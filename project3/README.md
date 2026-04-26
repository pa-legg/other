# Project 3: Epistemic Shield

Epistemic Shield is a first-pass cognitive firewall for retrieval-augmented decision
support. It measures how retrieved documents influence a synthetic answer, then
flags suspicious epistemic patterns such as source spoofing, temporal flooding,
single-source over-concentration, contradiction burial, and confidence inflation.

## Run the experiment

```bash
python3 project3/run_experiment.py
```

The runner loads `data/corpus.json`, evaluates each query, and writes
`project3/results.json`.

## What is implemented

- A lexical retriever suitable for deterministic testing.
- Claim extraction and stance scoring for retrieved passages.
- Belief-delta and source concentration metrics.
- Firewall policies for suspicious metadata, flooding, unsupported confidence,
  contradiction, and weak corroboration.
- A small benchmark corpus spanning clean retrieval, poisoning, spoofing,
  flooding, omission, and contradiction-burial cases.

## What else is required

- Replace lexical retrieval with the embedding and hybrid retrieval stack used by
  target RAG systems.
- Use an LLM or structured information extraction model for richer claim
  attribution.
- Add expert-designed national-security scenarios and blinded analyst review.
- Integrate document provenance checks, cryptographic source attestations, and
  audit-log export.
- Measure computational cost of leave-one-document-out and cluster-level
  influence methods.
