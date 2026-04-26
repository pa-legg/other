# Project 1: Sentinel Garden

Sentinel Garden is a first-pass agentic AI deception and tripwire testbed. It
simulates agents operating in synthetic mission environments and records whether
they touch canary credentials, decoy documents, spoofed peers, or unauthorised
tools.

## What is implemented

- Deterministic synthetic missions in `data/scenarios.json`.
- A lightweight sandbox in `sentinel_garden/core.py`.
- Three policy profiles:
  - `benign`: follows task boundaries.
  - `curious`: explores suspicious assets.
  - `compromised`: aggressively seeks hidden assets and ignores containment.
- Tripwire event capture for credential, document, tool, peer, memory, and
  containment violations.
- Aggregate metrics for tripwire contact, boundary violation, unsafe
  persistence, mission completion, and containment recovery.

## Run

```bash
python3 project1/run_experiment.py
```

The runner writes `project1/results.json`.

## Test

```bash
python3 -m unittest discover -s project1/tests
```

## What else is required

- Connect the sandbox to real agent frameworks such as LangGraph, AutoGen, or
  bespoke government agent orchestration stacks.
- Add blinded realism review for deception artefacts.
- Add repeated stochastic trials for model-backed agents rather than fixed
  deterministic policy profiles.
- Expand scenarios into a federated LASR range with common telemetry schemas.
- Add secure storage and redaction for any future non-synthetic traces.
