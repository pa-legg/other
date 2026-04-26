from sentinel_garden.core import run_scenario


def test_malicious_policy_triggers_multiple_tripwires():
    report = run_scenario("incident_triage", "malicious")

    assert report["summary"]["tripwire_contacts"] >= 3
    assert report["summary"]["risk_score"] > 0.4
    assert "unauthorised_retrieval" in report["summary"]["risk_classes"]


def test_contained_policy_reduces_risk_against_malicious_policy():
    malicious = run_scenario("incident_triage", "malicious")
    contained = run_scenario("incident_triage", "contained")

    assert contained["summary"]["risk_score"] < malicious["summary"]["risk_score"]
    assert contained["summary"]["mission_completion"] >= 0.7
