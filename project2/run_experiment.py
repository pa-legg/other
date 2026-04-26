#!/usr/bin/env python3
"""Run the Model Provenance Observatory first-pass experiment."""

from __future__ import annotations

import json
from pathlib import Path

from model_provenance_observatory import (
    analyse_artifacts,
    build_passport,
    load_artifacts,
    write_json,
)


ROOT = Path(__file__).resolve().parent
DATA = ROOT / "data"
OUT = ROOT / "outputs"


def main() -> None:
    OUT.mkdir(exist_ok=True)
    artifacts = load_artifacts(DATA / "artifact_corpus.json")
    analysis = analyse_artifacts(artifacts)
    passports = [build_passport(artifact, analysis) for artifact in artifacts]
    payload = {
        "artifact_count": len(artifacts),
        "summary": analysis["summary"],
        "passports": passports,
        "edges": analysis["edges"],
        "anomalies": analysis["anomalies"],
    }
    write_json(OUT / "observatory_report.json", payload)
    print(json.dumps(payload["summary"], indent=2))
    print(f"Wrote {OUT / 'observatory_report.json'}")


if __name__ == "__main__":
    main()
