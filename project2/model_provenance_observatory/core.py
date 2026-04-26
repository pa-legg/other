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
    kind: str
    declared_parent: str | None
    fingerprint: tuple[float, ...]
    behaviours: dict[str, float]
    metadata: dict[str, Any]


@dataclass(frozen=True)
class ProvenanceFinding:
    """A forensic finding over a model artefact."""

    artifact_id: str
    inferred_base: str | None
    lineage_confidence: float
    anomalies: tuple[str, ...]
    passport: dict[str, Any]

    @property
    def model_id(self) -> str:
        """Compatibility alias used by tests and analyst notebooks."""

        return self.artifact_id

    @property
    def predicted_parent_id(self) -> str | None:
        """Compatibility alias for inferred parent."""

        return self.inferred_base

    def to_passport(self) -> dict[str, Any]:
        """Return a JSON-serialisable passport."""

        return self.passport


def load_artifacts(path: str | Path) -> list[ModelArtifact]:
    """Load model artefacts from JSON test data."""

    raw = json.loads(Path(path).read_text(encoding="utf-8"))
    artifacts = []
    for item in raw["artifacts"]:
        artifacts.append(
            ModelArtifact(
                artifact_id=item["id"],
                kind=item["kind"],
                declared_parent=item.get("declared_parent"),
                fingerprint=tuple(float(v) for v in item["weights"]),
                behaviours={k: float(v) for k, v in item["behaviours"].items()},
                metadata=item.get("metadata", {}),
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
    candidate: ModelArtifact, possible_parents: list[ModelArtifact]
) -> tuple[str | None, float]:
    """Infer the most likely parent model by combining structure and behaviour."""

    declared_parent_score: float | None = None
    scored: list[tuple[str, float]] = []
    for parent in possible_parents:
        if parent.artifact_id == candidate.artifact_id:
            continue
        structural = cosine_similarity(candidate.fingerprint, parent.fingerprint)
        behavioural = 1.0 - min(1.0, behaviour_distance(candidate.behaviours, parent.behaviours))
        score = 0.65 * structural + 0.35 * behavioural
        scored.append((parent.artifact_id, score))
        if parent.artifact_id == candidate.declared_parent:
            declared_parent_score = score

    if not scored:
        return None, 0.0

    best_id, best_score = max(scored, key=lambda item: item[1])
    if (
        candidate.declared_parent
        and declared_parent_score is not None
        and best_id != candidate.declared_parent
        and best_score - declared_parent_score < 0.02
    ):
        # Closely related model families can make a base model score slightly
        # above the documented intermediate parent. Treat near ties as support
        # for the attested chain rather than as a contradiction.
        best_id = candidate.declared_parent
        best_score = declared_parent_score
    return best_id, round(max(0.0, min(1.0, best_score)), 3)


def detect_anomalies(
    artifact: ModelArtifact, inferred_base: str | None, confidence: float
) -> tuple[str, ...]:
    """Detect documentation and behavioural supply-chain anomalies."""

    anomalies: list[str] = []
    declared_base = artifact.declared_parent
    if declared_base and inferred_base and declared_base != inferred_base and confidence >= 0.75:
        anomalies.append("claimed_parent_contradicted")
    if artifact.behaviours.get("trigger_phrase_response", 0.0) >= 0.65:
        anomalies.append("trigger_conditioned_behaviour")
    if artifact.behaviours.get("eval_memorisation", 0.0) >= 0.70:
        anomalies.append("possible_benchmark_contamination")
    if artifact.kind in {"unknown_derivative", "adapter_merge"} and not artifact.metadata.get("adapters"):
        anomalies.append("undisclosed_adapter_merge")
    if artifact.metadata.get("license") == "unknown" or not artifact.metadata.get("training_data"):
        anomalies.append("weak_attestation")
    if not artifact.metadata:
        anomalies.append("missing_documentation")
    return tuple(anomalies)


def evidence_confidence(artifact: ModelArtifact, anomalies: tuple[str, ...], lineage_confidence: float) -> str:
    """Map quantitative evidence into a decision-friendly confidence band."""

    if "missing_documentation" in anomalies:
        return "inferred_only"
    if "claimed_parent_contradicted" in anomalies:
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
        "declared_base": artifact.declared_parent,
        "inferred_base": inferred_base,
        "lineage_confidence": confidence,
        "observed_transformation": artifact.kind,
        "evidence_band": evidence_confidence(artifact, anomalies, confidence),
        "anomalies": list(anomalies),
        "behavioural_probe_summary": artifact.behaviours,
        "evidence": {
            "fingerprint_dimensions": len(artifact.fingerprint),
            "metadata_keys": sorted(artifact.metadata),
        },
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
    for artifact in artifacts:
        if artifact.declared_parent is None:
            continue
        inferred_base, confidence = infer_base(artifact, artifacts)
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


def observe_models(artifacts: list[ModelArtifact]) -> list[ProvenanceFinding]:
    """Return findings for derivative artefacts."""

    findings: list[ProvenanceFinding] = []
    for artifact in artifacts:
        if artifact.declared_parent is None:
            continue
        inferred_base, confidence = infer_base(artifact, artifacts)
        findings.append(build_passport(artifact, inferred_base, confidence))
    return findings


def analyse_artifacts(artifacts: list[ModelArtifact]) -> dict[str, Any]:
    """Compatibility wrapper that returns a serialisable observatory report."""

    return run_observatory(artifacts)


def write_json(path: str | Path, payload: dict[str, Any]) -> None:
    """Write experiment output as formatted JSON."""

    Path(path).write_text(json.dumps(payload, indent=2) + "\n", encoding="utf-8")


def main() -> None:
    """CLI entrypoint for the observatory experiment."""

    import argparse

    parser = argparse.ArgumentParser(description="Run model provenance observatory experiment.")
    parser.add_argument(
        "--artifacts",
        type=Path,
        default=Path(__file__).resolve().parents[1] / "data" / "model_artifacts.json",
        help="Path to synthetic model artefact corpus.",
    )
    parser.add_argument(
        "--out",
        type=Path,
        default=Path(__file__).resolve().parents[1] / "results.json",
        help="Where to write observatory report.",
    )
    args = parser.parse_args()

    report = run_observatory(load_artifacts(args.artifacts))
    write_json(args.out, report)
    print(json.dumps(report["summary"], indent=2))

