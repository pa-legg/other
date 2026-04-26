Offline Security Research Assistant
===================================

This repository contains a prototype web app for the HMGCC Co-Creation
"Smart personal assistant for security researchers" challenge. It is designed
for laptop use in disconnected environments and keeps all indexed evidence,
conversation memory, and profile data on the local machine.

Planned tool concept
--------------------

Security analysts assessing industrial machinery need a research assistant that
can turn a messy local evidence library into grounded, reusable insight. The
suitable tool is an offline, multi-modal analysis workspace with these
capabilities:

- Evidence ingestion for manuals, extracted OCR, schematics, datasheets, source
  code, forum exports, teardown photos, handwritten notes, and corporate
  database exports.
- System architecture understanding focused on physical interfaces, data
  interfaces, protocols, processors, memory, firmware, software components, and
  chain-of-trust boundaries.
- Natural-language search and chat that adapts to an analyst's line of enquiry
  and cites local source evidence for every substantive claim.
- Response validation before publication: citation checks, source quality
  weighting, confidence scoring, and explicit "more data needed" prompts when
  evidence is weak or contradictory.
- Multi-modal analysis using a local LLM for text synthesis and a local VLM for
  diagrams, teardown photos, schematics, and annotations.
- Long-running investigation memory so conversations can continue over several
  weeks without repeating context.
- Analyst profile preferences for answer style, focus areas, and language.
- Offline-first operation with no cloud APIs or internet dependency at runtime.

Key features an analyst would want
----------------------------------

- **Repository indexing:** build a searchable local library from a chosen folder.
- **Grounded chat:** ask questions such as "Which interfaces should I prioritise
  for vulnerability research?" and receive cited answers.
- **Evidence panel:** inspect retrieved chunks and source confidence hints.
- **Visual analysis:** send indexed images to a locally hosted VLM to identify
  components, labels, trust boundaries, and uncertainties.
- **Confidence controls:** every answer returns a confidence score and highlights
  when additional manufacturer, standards, academic, or industry sources are
  required.
- **Memory and personalisation:** local session memory and analyst preferences
  influence future responses.

Running the prototype
---------------------

The implementation uses only the Python standard library, so it can run without
installing packages.

```sh
python3 security_assistant.py
```

Open <http://127.0.0.1:8080> in a browser.

By default the app creates and indexes `data_repository/`. You can also enter an
absolute path or a path relative to this repository in the UI.

Local model integration
-----------------------

The app integrates with local Ollama-compatible endpoints when available:

```sh
export SECURITY_ASSISTANT_OLLAMA_URL=http://127.0.0.1:11434
export SECURITY_ASSISTANT_LLM_MODEL=llama3.1
export SECURITY_ASSISTANT_VLM_MODEL=llava
```

If Ollama or the requested models are unavailable, text chat falls back to an
extractive answer built from retrieved local evidence. Visual analysis reports
that the local VLM is unavailable.

Local state
-----------

Runtime state is stored under `.assistant_state/`:

- `index.json` - indexed source metadata and searchable chunks
- `memory.json` - chat sessions and answer validations
- `profile.json` - analyst preferences

This directory is intentionally ignored by git.

Limitations and next steps
--------------------------

This prototype demonstrates the required offline workflow and integration
points. A production TRL6 implementation should add robust PDF/OCR extraction,
embeddings/vector search, richer document provenance, translation pipelines,
model update bundles, user access controls, audit logs, and a stronger
cross-source contradiction detector.
