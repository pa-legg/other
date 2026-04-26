# Project 2: Model Provenance Observatory

This prototype implements a first-pass forensic "AI materials passport" for
foundation-model derivatives. It uses synthetic model artefacts so experiments
can run without large model weights.

## What it does

- Loads a small corpus of model artefacts, transformations, attested claims, and
  behavioural probe results.
- Builds a provenance graph linking base models, adapters, fine-tunes,
  quantised derivatives, and suspicious variants.
- Infers likely lineage from numeric fingerprints and behavioural signatures.
- Flags contradictions between attested documentation and forensic evidence.
- Generates human-readable and machine-readable model passports.

## Run

```bash
python3 project2/run_experiment.py
```

The script writes `project2/results.json` and prints a summary.

## First-pass test data

`data/model_artifacts.json` contains synthetic artefacts:

- `atlas-base`: trusted base model.
- `atlas-ops-tuned`: documented fine-tune.
- `atlas-ops-quantized`: documented quantised derivative.
- `atlas-ops-shadow`: undocumented adapter merge with anomalous behaviour.
- `beacon-distilled`: distilled model with incomplete documentation.

## What else is required

- Real model-weight and adapter feature extractors for modern architectures.
- A larger controlled corpus with LoRA merges, pruning, quantisation,
  distillation, benchmark leakage, and toy backdoors.
- Calibration against human forensic analysts and procurement workflows.
- Interoperability with SBOM formats, model registries, and confidential-compute
  attestations.
