"""Epistemic Shield prototype.

This module implements a first-pass cognitive firewall for RAG experiments.
It measures how retrieved passages influence answer claims, confidence, and
risk posture before a decision-support response is released.
"""

from __future__ import annotations

from dataclasses import dataclass
from typing import Dict, Iterable, List, Sequence, Set


@dataclass(frozen=True)
class Document:
    doc_id: str
    source: str
    cluster: str
    text: str
    claims: Set[str]
    credibility: float
    retrieved_rank: int
    attack_label: str = "clean"


@dataclass(frozen=True)
class FirewallPolicy:
    max_single_source_influence: float = 0.55
    min_independent_sources: int = 2
    confidence_inflation_threshold: float = 0.25
    min_average_credibility: float = 0.58
    suspicious_attack_labels: Set[str] = None  # type: ignore[assignment]

    def __post_init__(self) -> None:
        if self.suspicious_attack_labels is None:
            object.__setattr__(
                self,
                "suspicious_attack_labels",
                {"poison", "source_spoof", "flood", "embedding_hijack"},
            )


@dataclass(frozen=True)
class FirewallDecision:
    action: str
    confidence: float
    answer_claims: Set[str]
    risk_flags: List[str]
    influence_by_document: Dict[str, float]
    influence_by_source: Dict[str, float]
    explanation: str


def score_query(query: str, document: Document) -> int:
    query_terms = {term.strip(".,:;!?").lower() for term in query.split()}
    text_terms = {term.strip(".,:;!?").lower() for term in document.text.split()}
    return len(query_terms & text_terms)


def retrieve(query: str, documents: Sequence[Document], limit: int = 5) -> List[Document]:
    return sorted(
        documents,
        key=lambda doc: (score_query(query, doc), -doc.retrieved_rank),
        reverse=True,
    )[:limit]


def synthesize_claims(documents: Sequence[Document]) -> Set[str]:
    votes: Dict[str, float] = {}
    for doc in documents:
        weight = max(doc.credibility, 0.05)
        for claim in doc.claims:
            votes[claim] = votes.get(claim, 0.0) + weight
    if not votes:
        return set()
    threshold = max(0.75, sum(votes.values()) / max(len(votes), 1) * 0.55)
    return {claim for claim, vote in votes.items() if vote >= threshold}


def estimate_confidence(documents: Sequence[Document], claims: Set[str]) -> float:
    if not documents or not claims:
        return 0.0
    credibility = sum(doc.credibility for doc in documents) / len(documents)
    independent_sources = len({doc.source for doc in documents})
    source_bonus = min(independent_sources / 4.0, 1.0) * 0.25
    agreement = sum(1 for doc in documents if doc.claims & claims) / len(documents)
    return min(1.0, 0.2 + credibility * 0.45 + agreement * 0.3 + source_bonus)


def belief_delta(documents: Sequence[Document], baseline_claims: Set[str]) -> Dict[str, float]:
    full_claims = synthesize_claims(documents)
    influence: Dict[str, float] = {}
    for doc in documents:
        remaining = [candidate for candidate in documents if candidate.doc_id != doc.doc_id]
        without_claims = synthesize_claims(remaining)
        removed_claims = len(full_claims - without_claims)
        introduced_claims = len(doc.claims - baseline_claims)
        attack_bonus = 0.25 if doc.attack_label != "clean" else 0.0
        influence[doc.doc_id] = round(
            min(1.0, removed_claims * 0.35 + introduced_claims * 0.12 + attack_bonus),
            3,
        )
    return influence


def decide(
    query: str,
    documents: Sequence[Document],
    policy: FirewallPolicy | None = None,
    retrieval_limit: int = 5,
) -> FirewallDecision:
    active_policy = policy or FirewallPolicy()
    retrieved = retrieve(query, documents, retrieval_limit)
    baseline_claims = set()
    claims = synthesize_claims(retrieved)
    confidence = estimate_confidence(retrieved, claims)
    influence = belief_delta(retrieved, baseline_claims)

    source_influence: Dict[str, float] = {}
    for doc in retrieved:
        source_influence[doc.source] = source_influence.get(doc.source, 0.0) + influence[doc.doc_id]
    total = sum(source_influence.values()) or 1.0
    source_influence = {
        source: round(value / total, 3) for source, value in source_influence.items()
    }

    risk_flags: List[str] = []
    independent_sources = {doc.source for doc in retrieved if doc.claims & claims}
    avg_credibility = (
        sum(doc.credibility for doc in retrieved) / len(retrieved) if retrieved else 0.0
    )
    max_source_influence = max(source_influence.values()) if source_influence else 0.0
    suspicious_docs = [
        doc
        for doc in retrieved
        if doc.attack_label in active_policy.suspicious_attack_labels
    ]

    if max_source_influence > active_policy.max_single_source_influence:
        risk_flags.append("over_concentrated_source_influence")
    if len(independent_sources) < active_policy.min_independent_sources:
        risk_flags.append("insufficient_independent_corroboration")
    if avg_credibility < active_policy.min_average_credibility:
        risk_flags.append("low_average_source_credibility")
    if suspicious_docs:
        risk_flags.append("retrieval_contains_known_attack_pattern")
    if confidence > 0.72 and len(independent_sources) < 3:
        risk_flags.append("confidence_inflation")

    if "retrieval_contains_known_attack_pattern" in risk_flags and len(risk_flags) >= 2:
        action = "block"
    elif risk_flags:
        action = "escalate"
    else:
        action = "allow"

    explanation = (
        f"{action.upper()}: {len(retrieved)} passages retrieved, "
        f"{len(independent_sources)} corroborating sources, "
        f"average credibility {avg_credibility:.2f}, flags={risk_flags or ['none']}."
    )
    return FirewallDecision(
        action=action,
        confidence=round(confidence, 3),
        answer_claims=claims,
        risk_flags=risk_flags,
        influence_by_document=influence,
        influence_by_source=source_influence,
        explanation=explanation,
    )


def documents_from_records(records: Iterable[dict]) -> List[Document]:
    return [
        Document(
            doc_id=record["doc_id"],
            source=record["source"],
            cluster=record["cluster"],
            text=record["text"],
            claims=set(record["claims"]),
            credibility=float(record["credibility"]),
            retrieved_rank=int(record["retrieved_rank"]),
            attack_label=record.get("attack_label", "clean"),
        )
        for record in records
    ]
