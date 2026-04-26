"""Model Provenance Observatory prototype.

This module provides a small, deterministic forensic harness for derivative model
supply-chain experiments. Instead of requiring real model weights, it represents
model artefacts as compact numeric fingerprints plus behavioural probe outcomes.
That is enough for first-pass experiments about provenance evidence fusion.
"""

from __future__ import annotations

from dataclasses import dataclass
import json
import math
from pathlib import Path
from typing import Any


@dataclass(frozen=True)
class ModelArtifact:
    """A model or adapter artefact with attested and observed properties."""

    artifact_id: str
    declared_base: str | None
    transformation: str
    fingerprint: tuple[float, ...]
    behaviours: dict[str, float]
    documentation: dict[str, Any]


@dataclass(frozen=True)
class ProvenanceFinding:
    """A forensic finding over a model artefact."""

    artifact_id: str
    inferred_base: str | None
    lineage_confidence: float
    anomalies: tuple[str, ...]
    passport: dict[str, Any]


def load_artifacts(path: str | Path) -> list[ModelArtifact]:
    """Load model artefacts from JSON test data."""

    raw = json.loads(Path(path).read_text(encoding="utf-8"))
    artifacts = []
    for item in raw["artifacts"]:
        artifacts.append(
            ModelArtifact(
                artifact_id=item["artifact_id"],
                declared_base=item.get("declared_base"),
                transformation=item["transformation"],
                fingerprint=tuple(float(v) for v in item["fingerprint"]),
                behaviours={k: float(v) for k, v in item["behaviours"].items()},
                documentation=item.get("documentation", {}),
            )
        )
    return artifacts


def cosine_similarity(left: tuple[float, ...], right: tuple[float, ...]) -> float:
    """Return cosine similarity for two compact fingerprints."""

    numerator = sum(a * b for a, b in zip(left, right))
    left_norm = math.sqrt(sum(a * a for a in left))
    right_norm = math.sqrt(sum(b * b for b in right))
    if left_norm == 0 or right_norm == 0:
        return 0.0
    return numerator / (left_norm * right_norm)


def behaviour_distance(left: dict[str, float], right: dict[str, float]) -> float:
    """Compute average absolute difference over shared behavioural probes."""

    keys = sorted(set(left) & set(right))
    if not keys:
        return 1.0
    return sum(abs(left[key] - right[key]) for key in keys) / len(keys)


def infer_base(
    candidate: ModelArtifact, possible_bases: list[ModelArtifact]
) -> tuple[str | None, float]:
    """Infer the most likely base model by combining structure and behaviour."""

    best_id = None
    best_score = -1.0
    for base in possible_bases:
        if base.artifact_id == candidate.artifact_id:
            continue
        if base.declared_base is not None:
            continue
        structural = cosine_similarity(candidate.fingerprint, base.fingerprint)
        behavioural = 1.0 - min(1.0, behaviour_distance(candidate.behaviours, base.behaviours))
        score = 0.65 * structural + 0.35 * behavioural
        if score > best_score:
            best_score = score
            best_id = base.artifact_id
    return best_id, round(max(0.0, min(1.0, best_score)), 3)


def detect_anomalies(
    artifact: ModelArtifact, inferred_base: str | None, confidence: float
) -> tuple[str, ...]:
    """Detect documentation and behavioural supply-chain anomalies."""

    anomalies: list[str] = []
    declared_base = artifact.declared_base
    if declared_base and inferred_base and declared_base != inferred_base and confidence >= 0.75:
        anomalies.append("declared_base_contradicted")
    if artifact.transformation != artifact.documentation.get("transformation", artifact.transformation):
        anomalies.append("transformation_documentation_mismatch")
    if artifact.behaviours.get("trigger_response", 0.0) >= 0.65:
        anomalies.append("trigger_conditioned_behaviour")
    if artifact.behaviours.get("eval_memorisation", 0.0) >= 0.70:
        anomalies.append("possible_benchmark_contamination")
    if artifact.documentation.get("adapter_declared") is False and artifact.transformation == "adapter_merge":
        anomalies.append("undisclosed_adapter_merge")
    if not artifact.documentation:
        anomalies.append("missing_documentation")
    return tuple(anomalies)


def evidence_confidence(artifact: ModelArtifact, anomalies: tuple[str, ...], lineage_confidence: float) -> str:
    """Map quantitative evidence into a decision-friendly confidence band."""

    if "missing_documentation" in anomalies:
        return "inferred_only"
    if "declared_base_contradicted" in anomalies or "transformation_documentation_mismatch" in anomalies:
        return "contradicted"
    if lineage_confidence >= 0.85 and not anomalies:
        return "attested_and_supported"
    if lineage_confidence >= 0.65:
        return "partially_supported"
    return "unknown"


def build_passport(artifact: ModelArtifact, inferred_base: str | None, confidence: float) -> ProvenanceFinding:
    """Create a minimal AI materials passport with forensic findings."""

    anomalies = detect_anomalies(artifact, inferred_base, confidence)
    passport = {
        "artifact_id": artifact.artifact_id,
        "declared_base": artifact.declared_base,
        "inferred_base": inferred_base,
        "lineage_confidence": confidence,
        "declared_transformation": artifact.documentation.get("transformation"),
        "observed_transformation": artifact.transformation,
        "evidence_band": evidence_confidence(artifact, anomalies, confidence),
        "anomalies": list(anomalies),
        "behavioural_probe_summary": artifact.behaviours,
    }
    return ProvenanceFinding(
        artifact_id=artifact.artifact_id,
        inferred_base=inferred_base,
        lineage_confidence=confidence,
        anomalies=anomalies,
        passport=passport,
    )


def run_observatory(artifacts: list[ModelArtifact]) -> dict[str, Any]:
    """Run provenance inference for all derivative artefacts."""

    findings = []
    bases = [artifact for artifact in artifacts if artifact.declared_base is None]
    for artifact in artifacts:
        if artifact.declared_base is None:
            continue
        inferred_base, confidence = infer_base(artifact, bases)
        findings.append(build_passport(artifact, inferred_base, confidence))

    anomaly_counts: dict[str, int] = {}
    for finding in findings:
        for anomaly in finding.anomalies:
            anomaly_counts[anomaly] = anomaly_counts.get(anomaly, 0) + 1

    return {
        "passports": [finding.passport for finding in findings],
        "summary": {
            "artifact_count": len(artifacts),
            "derivative_count": len(findings),
            "anomaly_counts": anomaly_counts,
            "mean_lineage_confidence": round(
                sum(finding.lineage_confidence for finding in findings) / max(1, len(findings)), 3
            ),
        },
    }

