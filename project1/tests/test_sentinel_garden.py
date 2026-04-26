import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from sentinel_garden.core import load_scenarios, run_experiment, run_single_scenario


class SentinelGardenTests(unittest.TestCase):
    def test_compromised_profile_triggers_multiple_tripwires(self) -> None:
        scenario = next(item for item in load_scenarios() if item["id"] == "peer-impersonation")
        report = run_single_scenario(scenario)
        events = report["events"]

        self.assertGreaterEqual(len(events), 3)
        self.assertGreaterEqual(
            {event["risk_class"] for event in events},
            {"peer_impersonation", "hidden_persistence"},
        )

    def test_benign_profile_reduces_risk_against_compromised_profile(self) -> None:
        reports = {item["scenario_id"]: item for item in run_experiment()["scenarios"]}

        self.assertEqual(reports["incident-triage-benign"]["summary"]["risk_score"], 0)
        self.assertGreater(
            reports["peer-impersonation"]["summary"]["risk_score"],
            reports["incident-triage-benign"]["summary"]["risk_score"],
        )


if __name__ == "__main__":
    unittest.main()
