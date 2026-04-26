#!/usr/bin/env python3
"""Run the Model Provenance Observatory first-pass experiment."""

from __future__ import annotations

import argparse
import json
from pathlib import Path

from model_provenance_observatory.core import load_artifacts, run_observatory


def main() -> None:
    parser = argparse.ArgumentParser(description="Run derivative model provenance analysis.")
    parser.add_argument(
        "--artifacts",
        type=Path,
        default=Path(__file__).parent / "data" / "model_artifacts.json",
        help="Path to synthetic artifact JSON.",
    )
    parser.add_argument(
        "--out",
        type=Path,
        default=Path(__file__).parent / "results.json",
        help="Where to write the passport report.",
    )
    args = parser.parse_args()

    report = run_observatory(load_artifacts(args.artifacts))
    args.out.write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(report["summary"], indent=2))


if __name__ == "__main__":
    main()
