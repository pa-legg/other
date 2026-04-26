#!/usr/bin/env python3
"""Run a Sentinel Garden tripwire experiment."""

from __future__ import annotations

import argparse
import json
from pathlib import Path

from sentinel_garden.core import load_scenarios, run_scenarios


def main() -> None:
    parser = argparse.ArgumentParser(description="Run deterministic agent tripwire scenarios.")
    parser.add_argument(
        "--scenarios",
        type=Path,
        default=Path(__file__).parent / "data" / "scenarios.json",
        help="Path to scenario JSON.",
    )
    parser.add_argument(
        "--out",
        type=Path,
        default=Path(__file__).parent / "data" / "latest_results.json",
        help="Where to write experiment results.",
    )
    args = parser.parse_args()

    scenarios = load_scenarios(args.scenarios)
    results = run_scenarios(scenarios)
    args.out.write_text(json.dumps(results, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(results["summary"], indent=2))


if __name__ == "__main__":
    main()
