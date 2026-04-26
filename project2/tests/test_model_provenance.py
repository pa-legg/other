import json
from pathlib import Path

from model_provenance_observatory.core import load_artifacts, observe_models


def test_observatory_recovers_known_lineage():
    artifacts = load_artifacts(
        Path(__file__).resolve().parents[1] / "data" / "model_artifacts.json"
    )
    results = observe_models(artifacts)
    by_id = {result.model_id: result for result in results}

    assert by_id["sentinel-incident-v1"].predicted_parent_id == "atlas-base"
    assert by_id["sentinel-incident-v1"].lineage_confidence >= 0.75


def test_observatory_flags_backdoor_and_false_claims():
    artifacts = load_artifacts(
        Path(__file__).resolve().parents[1] / "data" / "model_artifacts.json"
    )
    results = observe_models(artifacts)
    by_id = {result.model_id: result for result in results}

    tampered = by_id["atlas-ops-shadow"]
    assert "trigger_conditioned_behaviour" in tampered.anomalies
    assert "claimed_parent_contradicted" in tampered.anomalies


def test_passport_is_json_serialisable():
    artifacts = load_artifacts(
        Path(__file__).resolve().parents[1] / "data" / "model_artifacts.json"
    )
    [first_result] = observe_models(artifacts)[:1]
    encoded = json.dumps(first_result.to_passport())
    assert "evidence" in encoded
