# AGENTS.md

Guidance for cloud agents and automated development in this repository.

## Repository structure

This is a **multi-branch sandbox**, not a monorepo. The `master` branch contains only a placeholder README. Each product lives on its own branch:

| Branch | Product | Stack |
|--------|---------|-------|
| `LASR-research` | Three LASR AI-security prototypes (Sentinel Garden, Model Provenance Observatory, Epistemic Shield) | Python 3 stdlib, `unittest` |
| `cursor/offline-security-assistant-ecda` | Offline Security Research Assistant | Python 3 stdlib HTTP server, static HTML/JS |
| `music-camera` | Galaxy CV Music (hand-gesture musical galaxy) | Vite 6, Three.js, MediaPipe |

**Always `git checkout` the target branch before running or editing a product.** Servers started on one branch may keep running after switching branches, but static files and Python entrypoints will be missing on disk until you check out the correct branch again.

## System dependencies

- **Python 3.12+** — all Python products (no pip packages required)
- **Node.js 22+ / npm** — Galaxy CV Music only
- **ffmpeg** — optional; required for `tools/run_full_security_tests.py` video capture on the security assistant branch

## Cursor Cloud specific instructions

### LASR-research

```bash
git checkout LASR-research
cd project1   # or project2, project3
python3 run_experiment.py
python3 -m unittest discover -s tests -v
```

No install step. Run from each `projectN/` directory so local imports resolve.

### Offline Security Research Assistant

```bash
git checkout cursor/offline-security-assistant-ecda
python3 security_assistant.py
```

Open http://127.0.0.1:8080. Uses only the Python standard library.

On first use, build the index via the UI or:

```bash
curl -X POST http://127.0.0.1:8080/api/index \
  -H 'Content-Type: application/json' \
  -d '{"path":"/workspace/data_repository"}'
```

Chat API field is `question` (not `message`):

```bash
curl -X POST http://127.0.0.1:8080/api/chat \
  -H 'Content-Type: application/json' \
  -d '{"question":"Which interfaces matter on the ESP32?"}'
```

Without Ollama, chat uses an extractive fallback from indexed evidence (still functional).

**Optional:** Ollama at `http://127.0.0.1:11434` for LLM/VLM features (`SECURITY_ASSISTANT_OLLAMA_URL`, `SECURITY_ASSISTANT_LLM_MODEL`, `SECURITY_ASSISTANT_VLM_MODEL`).

**E2E test suite:** `python3 tools/run_full_security_tests.py` (starts server on port 8090; needs ffmpeg).

### Galaxy CV Music

```bash
git checkout music-camera
cd resources/galaxy-cv-music
npm install
npm run dev -- --host 127.0.0.1
```

Dev URL (note GitHub Pages base path): http://127.0.0.1:5173/resources/galaxy-cv-music/

```bash
npm run build    # production build to dist/
```

Webcam and Web Audio require a real browser with camera permission. In headless VMs the canvas/HUD still load; hand tracking shows a camera error, which is expected.

MediaPipe WASM/models load from CDN at runtime (network required unless vendored).

### Lint / test summary

| Branch | Lint | Test / run |
|--------|------|------------|
| `LASR-research` | N/A | `python3 -m unittest discover -s tests` per project |
| `cursor/offline-security-assistant-ecda` | N/A | `python3 security_assistant.py` + API/UI smoke; optional `python3 tools/run_full_security_tests.py` |
| `music-camera` | N/A | `npm run build`; `npm run dev` for browser testing |

There is no repo-wide linter or CI configuration on `master`.
