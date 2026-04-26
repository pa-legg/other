#!/usr/bin/env python3
"""Run the Epistemic Shield cognitive-firewall prototype."""

from __future__ import annotations

import json
from pathlib import Path

from epistemic_shield import evaluate_benchmark


def main() -> None:
    data_path = Path(__file__).parent / "data" / "rag_corpus.json"
    benchmark = json.loads(data_path.read_text(encoding="utf-8"))
    results = evaluate_benchmark(benchmark)

    print("# Epistemic Shield experiment")
    for result in results:
        print(
            f"- {result['query_id']}: decision={result['decision']} "
            f"risk={result['risk_score']:.2f} answer_quality={result['answer_quality']:.2f}"
        )
        for reason in result["reasons"]:
            print(f"  - {reason}")

    output_path = Path(__file__).parent / "data" / "last_results.json"
    output_path.write_text(json.dumps(results, indent=2), encoding="utf-8")
    print(f"\nWrote results to {output_path.relative_to(Path.cwd())}")


if __name__ == "__main__":
    main()
