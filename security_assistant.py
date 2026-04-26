#!/usr/bin/env python3
"""Offline security research assistant web app.

The app intentionally uses only the Python standard library so it can run on a
locked-down laptop without fetching dependencies. It integrates with local
Ollama-compatible LLM/VLM endpoints when they are available and falls back to
extractive, source-grounded answers when they are not.
"""

from __future__ import annotations

import base64
import json
import mimetypes
import os
import re
import shutil
import sys
import time
import traceback
import zlib
import urllib.error
import urllib.request
import uuid
from dataclasses import asdict, dataclass
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parent
STATIC_DIR = ROOT / "static"
STATE_DIR = ROOT / ".assistant_state"
INDEX_PATH = STATE_DIR / "index.json"
MEMORY_PATH = STATE_DIR / "memory.json"
PROFILE_PATH = STATE_DIR / "profile.json"
DEFAULT_REPOSITORY = ROOT / "data_repository"

OLLAMA_URL = os.environ.get("SECURITY_ASSISTANT_OLLAMA_URL", "http://127.0.0.1:11434")
QWEN_VLM_URL = os.environ.get("SECURITY_ASSISTANT_QWEN_VLM_URL", "http://127.0.0.1:8000/v1")
QWEN_VLM_API_KEY = os.environ.get("SECURITY_ASSISTANT_QWEN_VLM_API_KEY", "")
VLM_PROVIDER = os.environ.get("SECURITY_ASSISTANT_VLM_PROVIDER", "qwen").lower()
LLM_MODEL = os.environ.get("SECURITY_ASSISTANT_LLM_MODEL", "llama3.1")
VLM_MODEL = os.environ.get("SECURITY_ASSISTANT_VLM_MODEL", "qwen3.5-vl")

TEXT_EXTENSIONS = {
    ".asm",
    ".c",
    ".cc",
    ".cfg",
    ".conf",
    ".cpp",
    ".cs",
    ".csv",
    ".go",
    ".h",
    ".hpp",
    ".html",
    ".ini",
    ".java",
    ".js",
    ".json",
    ".log",
    ".md",
    ".py",
    ".rs",
    ".sh",
    ".sql",
    ".svg",
    ".toml",
    ".ts",
    ".txt",
    ".xml",
    ".yaml",
    ".yml",
}

IMAGE_EXTENSIONS = {".bmp", ".gif", ".jpeg", ".jpg", ".png", ".tif", ".tiff", ".webp"}
SKIP_DIRS = {".assistant_state", ".git", ".hg", ".svn", "__pycache__", "node_modules", ".venv", "venv"}


@dataclass
class Source:
    id: str
    path: str
    name: str
    kind: str
    mime: str
    size: int
    modified: float
    confidence_hint: str


@dataclass
class Chunk:
    id: str
    source_id: str
    path: str
    kind: str
    text: str
    tokens: list[str]
    ordinal: int


def ensure_state() -> None:
    STATE_DIR.mkdir(exist_ok=True)
    DEFAULT_REPOSITORY.mkdir(exist_ok=True)


def now_iso() -> str:
    return time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())


def read_json(path: Path, default: Any) -> Any:
    if not path.exists():
        return default
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def write_json(path: Path, data: Any) -> None:
    ensure_state()
    tmp = path.with_suffix(path.suffix + ".tmp")
    with tmp.open("w", encoding="utf-8") as handle:
        json.dump(data, handle, indent=2, sort_keys=True)
    tmp.replace(path)


def tokenize(text: str) -> list[str]:
    return [token.lower() for token in re.findall(r"[a-zA-Z0-9_\-\.]{2,}", text)]


def source_confidence(path: Path) -> str:
    lower = path.name.lower()
    if any(term in lower for term in ("manufacturer", "datasheet", "manual", "standard", "specification")):
        return "high"
    if any(term in lower for term in ("academic", "paper", "nist", "cisa", "mitre", "iec", "iso")):
        return "high"
    if any(term in lower for term in ("forum", "blog", "notes", "annotation", "handwritten")):
        return "medium"
    return "unknown"


def file_kind(path: Path) -> str:
    suffix = path.suffix.lower()
    if suffix in IMAGE_EXTENSIONS:
        return "image"
    if suffix in TEXT_EXTENSIONS:
        return "text"
    if suffix == ".pdf":
        return "pdf"
    return "binary"


def safe_decode(path: Path) -> str:
    raw = path.read_bytes()
    for encoding in ("utf-8", "utf-16", "latin-1"):
        try:
            return raw.decode(encoding)
        except UnicodeDecodeError:
            continue
    return raw.decode("utf-8", errors="replace")


def chunk_text(text: str, size: int = 1400, overlap: int = 220) -> list[str]:
    cleaned = re.sub(r"\s+", " ", text).strip()
    if not cleaned:
        return []
    chunks: list[str] = []
    start = 0
    while start < len(cleaned):
        end = min(start + size, len(cleaned))
        chunks.append(cleaned[start:end])
        if end == len(cleaned):
            break
        start = max(0, end - overlap)
    return chunks


def path_inside(child: Path, parent: Path) -> bool:
    try:
        child.resolve().relative_to(parent.resolve())
        return True
    except ValueError:
        return False


def repository_path(value: str | None) -> Path:
    if not value:
        return DEFAULT_REPOSITORY
    candidate = Path(value).expanduser()
    if not candidate.is_absolute():
        candidate = (ROOT / candidate).resolve()
    return candidate


def media_data_url(path: Path) -> str:
    mime = mimetypes.guess_type(path.name)[0] or "application/octet-stream"
    encoded = base64.b64encode(path.read_bytes()).decode("ascii")
    return f"data:{mime};base64,{encoded}"


def qwen_vlm_generate(prompt: str, media_path: Path, timeout: int = 180) -> str | None:
    """Call a local OpenAI-compatible Qwen VLM endpoint for an image or PDF."""
    content_type = "image_url" if file_kind(media_path) == "image" else "file"
    media_payload: dict[str, Any]
    if content_type == "image_url":
        media_payload = {"type": "image_url", "image_url": {"url": media_data_url(media_path)}}
    else:
        media_payload = {
            "type": "file",
            "file": {
                "filename": media_path.name,
                "file_data": media_data_url(media_path),
            },
        }
    payload = {
        "model": VLM_MODEL,
        "messages": [
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": prompt},
                    media_payload,
                ],
            }
        ],
        "temperature": 0.1,
    }
    headers = {"Content-Type": "application/json"}
    if QWEN_VLM_API_KEY:
        headers["Authorization"] = f"Bearer {QWEN_VLM_API_KEY}"
    request = urllib.request.Request(
        f"{QWEN_VLM_URL.rstrip('/')}/chat/completions",
        data=json.dumps(payload).encode("utf-8"),
        headers=headers,
        method="POST",
    )
    try:
        with urllib.request.urlopen(request, timeout=timeout) as response:  # noqa: S310 - local endpoint
            body = json.loads(response.read().decode("utf-8"))
            return body.get("choices", [{}])[0].get("message", {}).get("content", "").strip()
    except (urllib.error.URLError, TimeoutError, json.JSONDecodeError, KeyError, IndexError):
        return None


def qwen_available() -> bool:
    headers = {}
    if QWEN_VLM_API_KEY:
        headers["Authorization"] = f"Bearer {QWEN_VLM_API_KEY}"
    request = urllib.request.Request(f"{QWEN_VLM_URL.rstrip('/')}/models", headers=headers)
    try:
        with urllib.request.urlopen(request, timeout=2) as response:  # noqa: S310 - local endpoint
            return response.status == 200
    except (urllib.error.URLError, TimeoutError):
        return False


def analyze_media_with_vlm(path: Path, prompt: str | None = None) -> str:
    media_prompt = prompt or (
        "Analyse this security-research evidence for an offline knowledge base. "
        "Extract visible text, component labels, interfaces, protocols, debug/test points, "
        "power domains, trust-boundary indicators, uncertainty, and security concerns. "
        "For PDFs, review the document pages as a whole and cite page/section labels when visible."
    )
    if VLM_PROVIDER == "qwen":
        analysis = qwen_vlm_generate(media_prompt, path)
    else:
        analysis = ollama_generate(media_prompt, model=VLM_MODEL, images=[base64.b64encode(path.read_bytes()).decode("ascii")])
    if analysis:
        return f"{VLM_MODEL} VLM analysis for {path.name}: {analysis}"
    return (
        f"Qwen3.5 VLM enrichment pending for {path.name}. The source is indexed as "
        f"{file_kind(path)} evidence, but no local {VLM_MODEL} endpoint was reachable. "
        "Start the configured local VLM and rebuild the index with media enrichment enabled."
    )


def build_index(repository: Path, enrich_media: bool = False) -> dict[str, Any]:
    repository = repository.resolve()
    if not repository.exists():
        raise ValueError(f"Repository path does not exist: {repository}")
    if not repository.is_dir():
        raise ValueError(f"Repository path is not a directory: {repository}")

    sources: list[Source] = []
    chunks: list[Chunk] = []
    errors: list[dict[str, str]] = []

    for current, dirnames, filenames in os.walk(repository):
        dirnames[:] = [dirname for dirname in dirnames if dirname not in SKIP_DIRS]
        for filename in sorted(filenames):
            path = Path(current) / filename
            try:
                stat = path.stat()
                kind = file_kind(path)
                rel = str(path.relative_to(repository))
                source = Source(
                    id=str(uuid.uuid5(uuid.NAMESPACE_URL, f"{repository}:{rel}")),
                    path=rel,
                    name=path.name,
                    kind=kind,
                    mime=mimetypes.guess_type(path.name)[0] or "application/octet-stream",
                    size=stat.st_size,
                    modified=stat.st_mtime,
                    confidence_hint=source_confidence(path),
                )
                sources.append(source)

                if kind == "text":
                    text = safe_decode(path)
                    for ordinal, content in enumerate(chunk_text(text)):
                        chunks.append(
                            Chunk(
                                id=str(uuid.uuid5(uuid.NAMESPACE_URL, f"{source.id}:{ordinal}")),
                                source_id=source.id,
                                path=rel,
                                kind=kind,
                                text=content,
                                tokens=tokenize(content),
                                ordinal=ordinal,
                            )
                        )
                elif kind == "image":
                    image_note = (
                        analyze_media_with_vlm(path)
                        if enrich_media
                        else (
                            f"Image source {rel}. Rebuild the index with media enrichment enabled to run "
                            f"{VLM_MODEL} against this schematic, teardown photo, handwritten annotation, or diagram."
                        )
                    )
                    chunks.append(
                        Chunk(
                            id=str(uuid.uuid5(uuid.NAMESPACE_URL, f"{source.id}:image")),
                            source_id=source.id,
                            path=rel,
                            kind=kind,
                            text=image_note,
                            tokens=tokenize(image_note),
                            ordinal=0,
                        )
                    )
                elif kind == "pdf":
                    pdf_note = (
                        analyze_media_with_vlm(path)
                        if enrich_media
                        else (
                            f"PDF source {rel}. Rebuild the index with media enrichment enabled to run "
                            f"{VLM_MODEL} over the PDF pages, or add OCR/extracted text alongside the PDF."
                        )
                    )
                    chunks.append(
                        Chunk(
                            id=str(uuid.uuid5(uuid.NAMESPACE_URL, f"{source.id}:pdf")),
                            source_id=source.id,
                            path=rel,
                            kind=kind,
                            text=pdf_note,
                            tokens=tokenize(pdf_note),
                            ordinal=0,
                        )
                    )
            except Exception as exc:  # noqa: BLE001 - indexing must continue per file
                errors.append({"path": str(path), "error": str(exc)})

    index = {
        "repository": str(repository),
        "built_at": now_iso(),
        "sources": [asdict(source) for source in sources],
        "chunks": [asdict(chunk) for chunk in chunks],
        "errors": errors,
    }
    write_json(INDEX_PATH, index)
    return index


def load_index() -> dict[str, Any]:
    return read_json(INDEX_PATH, {"repository": str(DEFAULT_REPOSITORY), "sources": [], "chunks": [], "errors": []})


def source_map(index: dict[str, Any]) -> dict[str, dict[str, Any]]:
    return {source["id"]: source for source in index.get("sources", [])}


def search_index(query: str, limit: int = 8) -> list[dict[str, Any]]:
    index = load_index()
    sources = source_map(index)
    query_tokens = tokenize(query)
    query_set = set(query_tokens)
    if not query_set:
        return []

    scored: list[tuple[float, dict[str, Any]]] = []
    for chunk in index.get("chunks", []):
        tokens = chunk.get("tokens", [])
        token_set = set(tokens)
        overlap = query_set & token_set
        if not overlap:
            continue
        density = len(overlap) / max(len(query_set), 1)
        repetition = sum(min(tokens.count(token), 4) for token in overlap) / max(len(tokens), 1)
        confidence_bonus = {"high": 0.18, "medium": 0.08}.get(
            sources.get(chunk.get("source_id"), {}).get("confidence_hint"), 0
        )
        score = density + repetition + confidence_bonus
        enriched = dict(chunk)
        enriched["score"] = round(score, 4)
        enriched["source"] = sources.get(chunk.get("source_id"), {})
        scored.append((score, enriched))

    scored.sort(key=lambda item: item[0], reverse=True)
    return [item[1] for item in scored[:limit]]


def ollama_generate(prompt: str, model: str = LLM_MODEL, images: list[str] | None = None, timeout: int = 120) -> str | None:
    payload: dict[str, Any] = {"model": model, "prompt": prompt, "stream": False}
    if images:
        payload["images"] = images
    request = urllib.request.Request(
        f"{OLLAMA_URL.rstrip('/')}/api/generate",
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(request, timeout=timeout) as response:  # noqa: S310 - local endpoint
            body = json.loads(response.read().decode("utf-8"))
            return body.get("response", "").strip()
    except (urllib.error.URLError, TimeoutError, json.JSONDecodeError):
        return None


def ollama_available() -> bool:
    try:
        with urllib.request.urlopen(f"{OLLAMA_URL.rstrip('/')}/api/tags", timeout=2) as response:  # noqa: S310
            return response.status == 200
    except (urllib.error.URLError, TimeoutError):
        return False


def build_prompt(question: str, evidence: list[dict[str, Any]], profile: dict[str, Any], history: list[dict[str, Any]]) -> str:
    evidence_lines = []
    for idx, chunk in enumerate(evidence, start=1):
        source = chunk.get("source", {})
        evidence_lines.append(
            f"[S{idx}] {source.get('path', chunk.get('path'))} "
            f"(source confidence: {source.get('confidence_hint', 'unknown')}): {chunk.get('text')}"
        )
    recent_history = "\n".join(
        f"{item.get('role', 'user')}: {item.get('content', '')}" for item in history[-6:]
    )
    return f"""You are an offline smart personal assistant for security researchers assessing industrial systems.
Use only the supplied evidence. If the evidence is incomplete, say so and recommend exactly what extra source data is needed.
Cross-check claims across sources where possible. Cite sources inline as [S1], [S2], etc.
Prefer concise technical language, architecture/interface/protocol detail, and vulnerability-research implications.

User profile/preferences:
{json.dumps(profile, indent=2)}

Recent conversation:
{recent_history or "No previous conversation in this thread."}

Evidence:
{chr(10).join(evidence_lines) or "No matching evidence found."}

Question:
{question}

Answer with sections: Assessment, Evidence, Confidence, More data needed."""


def extractive_answer(question: str, evidence: list[dict[str, Any]]) -> str:
    if not evidence:
        return (
            "Assessment\nNo indexed evidence matched the question, so I cannot provide a grounded answer.\n\n"
            "Evidence\nNo citations available.\n\n"
            "Confidence\nLow.\n\n"
            "More data needed\nAdd manufacturer documentation, schematics, code, forum notes, or extracted OCR text and rebuild the index."
        )
    lines = ["Assessment"]
    for idx, chunk in enumerate(evidence[:4], start=1):
        text = chunk.get("text", "")
        excerpt = text[:500] + ("..." if len(text) > 500 else "")
        lines.append(f"- [S{idx}] {excerpt}")
    lines.extend(
        [
            "",
            "Evidence",
            *[
                f"- [S{idx}] {chunk.get('source', {}).get('path', chunk.get('path'))}"
                for idx, chunk in enumerate(evidence[:4], start=1)
            ],
            "",
            "Confidence",
            "Medium if the cited sources are authoritative; low where the evidence comes from notes, forums, or image placeholders.",
            "",
            "More data needed",
            "Use the local LLM for synthesis, run VLM analysis on diagrams/photos, and add manufacturer or standards references for cross-checking.",
        ]
    )
    return "\n".join(lines)


def validate_answer(answer: str, evidence: list[dict[str, Any]]) -> dict[str, Any]:
    citations = set(re.findall(r"\[S(\d+)\]", answer))
    valid_citations = {str(index) for index in range(1, len(evidence) + 1)}
    citation_score = len(citations & valid_citations) / max(min(len(evidence), 3), 1)
    high_conf_sources = sum(
        1 for chunk in evidence if chunk.get("source", {}).get("confidence_hint") == "high"
    )
    source_score = min(high_conf_sources / 2, 1.0)
    coverage_score = min(len(evidence) / 4, 1.0)
    confidence = min(round((0.45 * citation_score) + (0.35 * coverage_score) + (0.20 * source_score), 2), 1.0)
    if not evidence:
        confidence = 0.05
    needs_more = confidence < 0.68 or "more data" in answer.lower() or "incomplete" in answer.lower()
    return {
        "confidence": confidence,
        "needs_more_source_data": needs_more,
        "checks": [
            "Answer must cite indexed sources with [S#] markers.",
            "Confidence is reduced when few independent or high-confidence sources are retrieved.",
            "Unsupported questions are answered with a request for additional evidence.",
        ],
    }


def load_memory() -> dict[str, Any]:
    return read_json(MEMORY_PATH, {"sessions": {}})


def save_exchange(session_id: str, question: str, answer: str, validation: dict[str, Any]) -> None:
    memory = load_memory()
    sessions = memory.setdefault("sessions", {})
    session = sessions.setdefault(session_id, {"created_at": now_iso(), "messages": []})
    session["updated_at"] = now_iso()
    session["messages"].extend(
        [
            {"role": "user", "content": question, "created_at": now_iso()},
            {"role": "assistant", "content": answer, "validation": validation, "created_at": now_iso()},
        ]
    )
    write_json(MEMORY_PATH, memory)


def session_history(session_id: str) -> list[dict[str, Any]]:
    return load_memory().get("sessions", {}).get(session_id, {}).get("messages", [])


def load_profile() -> dict[str, Any]:
    return read_json(
        PROFILE_PATH,
        {
            "preferred_answer_style": "concise technical bullets with citations",
            "focus_areas": ["interfaces", "protocols", "chain of trust", "vulnerability implications"],
            "language": "English",
        },
    )


def save_profile(profile: dict[str, Any]) -> dict[str, Any]:
    current = load_profile()
    current.update(profile)
    write_json(PROFILE_PATH, current)
    return current


class SecurityAssistantHandler(BaseHTTPRequestHandler):
    server_version = "OfflineSecurityAssistant/0.1"

    def log_message(self, format: str, *args: Any) -> None:  # noqa: A002 - BaseHTTPRequestHandler API
        sys.stderr.write("[%s] %s\n" % (now_iso(), format % args))

    def send_json(self, data: Any, status: int = 200) -> None:
        body = json.dumps(data, indent=2).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def send_text(self, text: str, status: int = 200, content_type: str = "text/plain; charset=utf-8") -> None:
        body = text.encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def read_body(self) -> dict[str, Any]:
        length = int(self.headers.get("Content-Length", 0))
        if not length:
            return {}
        raw = self.rfile.read(length).decode("utf-8")
        return json.loads(raw or "{}")

    def do_GET(self) -> None:  # noqa: N802 - BaseHTTPRequestHandler API
        try:
            if self.path == "/" or self.path.startswith("/?"):
                self.serve_static(STATIC_DIR / "index.html")
            elif self.path.startswith("/static/"):
                self.serve_static(ROOT / self.path.lstrip("/"))
            elif self.path == "/api/status":
                index = load_index()
                self.send_json(
                    {
                        "repository": index.get("repository"),
                        "built_at": index.get("built_at"),
                        "source_count": len(index.get("sources", [])),
                        "chunk_count": len(index.get("chunks", [])),
                        "errors": index.get("errors", []),
                        "ollama_available": ollama_available(),
                        "qwen_vlm_available": qwen_available(),
                        "llm_model": LLM_MODEL,
                        "vlm_model": VLM_MODEL,
                        "vlm_provider": VLM_PROVIDER,
                        "profile": load_profile(),
                    }
                )
            elif self.path == "/api/sources":
                self.send_json(load_index().get("sources", []))
            elif self.path == "/api/memory":
                self.send_json(load_memory())
            else:
                self.send_text("Not found", status=404)
        except Exception as exc:  # noqa: BLE001
            self.send_json({"error": str(exc), "trace": traceback.format_exc()}, status=500)

    def do_POST(self) -> None:  # noqa: N802 - BaseHTTPRequestHandler API
        try:
            if self.path == "/api/index":
                body = self.read_body()
                index = build_index(
                    repository_path(body.get("repository")),
                    enrich_media=bool(
                        body.get("enrich_media") or body.get("enrich_multimodal") or body.get("use_vlm")
                    ),
                )
                self.send_json(
                    {
                        "repository": index["repository"],
                        "built_at": index["built_at"],
                        "source_count": len(index["sources"]),
                        "chunk_count": len(index["chunks"]),
                        "errors": index["errors"],
                    }
                )
            elif self.path == "/api/search":
                body = self.read_body()
                self.send_json({"results": search_index(body.get("query", ""), int(body.get("limit", 8)))})
            elif self.path == "/api/chat":
                body = self.read_body()
                question = body.get("question", "").strip()
                if not question:
                    self.send_json({"error": "question is required"}, status=400)
                    return
                session_id = body.get("session_id") or str(uuid.uuid4())
                evidence = search_index(question, int(body.get("limit", 8)))
                prompt = build_prompt(question, evidence, load_profile(), session_history(session_id))
                answer = ollama_generate(prompt) or extractive_answer(question, evidence)
                validation = validate_answer(answer, evidence)
                save_exchange(session_id, question, answer, validation)
                self.send_json(
                    {
                        "session_id": session_id,
                        "answer": answer,
                        "evidence": evidence,
                        "validation": validation,
                        "model": LLM_MODEL if ollama_available() else "extractive-fallback",
                    }
                )
            elif self.path == "/api/analyze-media":
                body = self.read_body()
                rel_path = body.get("path", "")
                index = load_index()
                repository = Path(index.get("repository") or DEFAULT_REPOSITORY)
                media_path = (repository / rel_path).resolve()
                if not path_inside(media_path, repository) or not media_path.exists():
                    self.send_json({"error": "media path not found in indexed repository"}, status=404)
                    return
                if file_kind(media_path) not in {"image", "pdf"}:
                    self.send_json({"error": "path is not a supported image or PDF"}, status=400)
                    return
                prompt = body.get(
                    "prompt",
                    "Describe the security-relevant content of this technical evidence. Identify components, "
                    "interfaces, labels, protocols, trust boundaries, debug/test access, and uncertainties. Cite visible text.",
                )
                analysis = analyze_media_with_vlm(media_path, prompt)
                self.send_json({"path": rel_path, "analysis": analysis, "model": VLM_MODEL})
            elif self.path == "/api/analyze-image":
                self.path = "/api/analyze-media"
                self.do_POST()
            elif self.path == "/api/profile":
                self.send_json(save_profile(self.read_body()))
            else:
                self.send_text("Not found", status=404)
        except json.JSONDecodeError:
            self.send_json({"error": "invalid JSON body"}, status=400)
        except Exception as exc:  # noqa: BLE001
            self.send_json({"error": str(exc), "trace": traceback.format_exc()}, status=500)

    def serve_static(self, path: Path) -> None:
        path = path.resolve()
        if not path_inside(path, STATIC_DIR) and path != (STATIC_DIR / "index.html").resolve():
            self.send_text("Forbidden", status=403)
            return
        if not path.exists() or not path.is_file():
            self.send_text("Not found", status=404)
            return
        content_type = mimetypes.guess_type(path.name)[0] or "application/octet-stream"
        if path.suffix == ".js":
            content_type = "text/javascript"
        with path.open("rb") as handle:
            body = handle.read()
        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


def main() -> None:
    ensure_state()
    host = os.environ.get("SECURITY_ASSISTANT_HOST", "127.0.0.1")
    port = int(os.environ.get("SECURITY_ASSISTANT_PORT", "8080"))
    server = ThreadingHTTPServer((host, port), SecurityAssistantHandler)
    print(f"Offline Security Assistant running at http://{host}:{port}")
    print(f"Index repository defaults to {DEFAULT_REPOSITORY}")
    server.serve_forever()


if __name__ == "__main__":
    main()
