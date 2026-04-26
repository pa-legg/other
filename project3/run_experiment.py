#!/usr/bin/env python3
"""Run Epistemic Shield over the synthetic RAG benchmark."""

from __future__ import annotations

import argparse
import json
from pathlib import Path

from epistemic_shield.core import evaluate_benchmark, load_benchmark


def main() -> None:
    parser = argparse.ArgumentParser(description="Run the Epistemic Shield RAG benchmark.")
    parser.add_argument(
        "--corpus",
        type=Path,
        default=Path(__file__).parent / "data" / "corpus.json",
        help="Path to benchmark corpus JSON.",
    )
    parser.add_argument(
        "--out",
        type=Path,
        default=Path(__file__).parent / "results.json",
        help="Where to write experiment results.",
    )
    args = parser.parse_args()

    results = evaluate_benchmark(load_benchmark(args.corpus))
    args.out.write_text(json.dumps(results, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({"query_count": len(results), "actions": [item["decision"] for item in results]}, indent=2))


if __name__ == "__main__":
    main()
