import json
from pathlib import Path
import sys
import unittest

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from model_provenance_observatory.core import load_artifacts, observe_models


class ModelProvenanceTests(unittest.TestCase):
    def setUp(self) -> None:
        self.artifacts = load_artifacts(
            Path(__file__).resolve().parents[1] / "data" / "model_artifacts.json"
        )
        self.results = observe_models(self.artifacts)
        self.by_id = {result.model_id: result for result in self.results}

    def test_observatory_recovers_known_lineage(self) -> None:
        self.assertEqual(
            self.by_id["atlas-secure-ft"].predicted_parent_id,
            "atlas-base",
        )
        self.assertGreaterEqual(
            self.by_id["atlas-secure-ft"].lineage_confidence,
            0.75,
        )

    def test_observatory_flags_backdoor_and_false_claims(self) -> None:
        tampered = self.by_id["atlas-shadow"]

        self.assertIn("trigger_conditioned_behaviour", tampered.anomalies)
        self.assertIn("claimed_parent_contradicted", tampered.anomalies)

    def test_passport_is_json_serialisable(self) -> None:
        encoded = json.dumps(self.results[0].to_passport())
        self.assertIn("evidence", encoded)


if __name__ == "__main__":
    unittest.main()
