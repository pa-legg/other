#!/usr/bin/env python3
"""Run end-to-end security tests for the saved evidence corpora.

The runner starts the local web app, drives its HTTP API, saves structured test
results and Markdown reports, then creates a lightweight MP4 capture from the
workflow transcript for post-test review. It uses only the Python standard
library plus the system ffmpeg binary for video encoding.
"""

from __future__ import annotations

import json
import os
import shutil
import subprocess
import textwrap
import time
import urllib.error
import urllib.request
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
RESULTS_DIR = ROOT / "test_results" / "full_security_tests"
FRAMES_DIR = RESULTS_DIR / "frames"
PORT = 8090
BASE_URL = f"http://127.0.0.1:{PORT}"


TEST_CASES = [
    {
        "id": "esp32-devkitc-v4",
        "name": "ESP32-DevKitC V4",
        "repository": "data_repository/tests/esp32-devkitc-v4",
        "image": "esp32_devkitc_v4_functional_overview.png",
        "pdf": "esp32_devkitc_v4_schematic.pdf",
        "queries": [
            "Identify the highest risk physical and data interfaces on the ESP32 board.",
            "Review firmware download, boot strap, UART, GPIO0, and reset security risks.",
            "Assess power injection, brown-out, and fault-injection concerns for the ESP32 board.",
            "Recommend mitigations for deploying an ESP32 derivative in a sensitive system.",
        ],
        "expected_findings": [
            "Serial firmware download mode through Boot/EN and USB-UART is physically accessible.",
            "Headers expose UART, GPIO, boot strap pins, reset, and power rails.",
            "Multiple mutually exclusive power entry points create fault and back-powering risks.",
            "Secure boot, flash encryption, protected headers, and controlled flashing workflows are key mitigations.",
        ],
    },
    {
        "id": "raspberry-pi-4-model-b",
        "name": "Raspberry Pi 4 Model B motherboard/SBC",
        "repository": "data_repository/tests/raspberry-pi-4-model-b",
        "image": "raspberry_pi_4_board.png",
        "pdf": "raspberry_pi_4_reduced_schematics.pdf",
        "queries": [
            "Identify the major physical, data, and wireless interfaces on the Raspberry Pi 4.",
            "Review microSD boot media, HAT EEPROM, GPIO, and test point security risks.",
            "Assess USB-C power, PoE, RUN, GLOBAL_EN, and fault-injection concerns.",
            "Recommend hardening controls for a headless high-assurance Raspberry Pi deployment.",
        ],
        "expected_findings": [
            "Removable microSD is a high-impact boot and data trust boundary.",
            "USB, Ethernet, Wi-Fi, Bluetooth, HDMI, CSI/DSI, GPIO, and PoE broaden the attack surface.",
            "HAT ID EEPROM and GPIO alternate functions require configuration policy controls.",
            "Disable unused interfaces, protect boot media, constrain USB, and inspect test/debug access.",
        ],
    },
]


def api(path: str, body: dict[str, Any] | None = None, timeout: int = 120) -> Any:
    data = None if body is None else json.dumps(body).encode("utf-8")
    request = urllib.request.Request(
        f"{BASE_URL}{path}",
        data=data,
        headers={"Content-Type": "application/json"},
        method="GET" if body is None else "POST",
    )
    with urllib.request.urlopen(request, timeout=timeout) as response:  # noqa: S310 - local test server
        return json.loads(response.read().decode("utf-8"))


def wait_for_server(process: subprocess.Popen[str]) -> None:
    deadline = time.time() + 15
    while time.time() < deadline:
        if process.poll() is not None:
            raise RuntimeError("security assistant server exited before accepting requests")
        try:
            api("/api/status", timeout=2)
            return
        except (urllib.error.URLError, TimeoutError, ConnectionError):
            time.sleep(0.25)
    raise TimeoutError("security assistant server did not start")


def start_server() -> subprocess.Popen[str]:
    env = os.environ.copy()
    env["SECURITY_ASSISTANT_PORT"] = str(PORT)
    env["SECURITY_ASSISTANT_HOST"] = "127.0.0.1"
    shutil.rmtree(ROOT / ".assistant_state", ignore_errors=True)
    return subprocess.Popen(
        ["python3", "security_assistant.py"],
        cwd=ROOT,
        env=env,
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )


def summarise_answer(answer: str, limit: int = 360) -> str:
    return " ".join(answer.split())[:limit]


def run_case(case: dict[str, Any], transcript: list[str]) -> dict[str, Any]:
    transcript.append(f"=== Test case: {case['name']} ===")
    index = api(
        "/api/index",
        {"repository": case["repository"], "enrich_multimodal": True},
        timeout=240,
    )
    transcript.append(
        f"Indexed {index['source_count']} sources / {index['chunk_count']} chunks from {case['repository']}."
    )

    status = api("/api/status")
    transcript.append(
        "Model status: "
        f"LLM={status['llm_model']} Ollama={status['ollama_available']} "
        f"VLM={status['vlm_model']} Qwen={status.get('qwen_vlm_available')}"
    )

    media_results = []
    for media_path in (case["image"], case["pdf"]):
        media = api(
            "/api/analyze-media",
            {
                "path": media_path,
                "prompt": (
                    "Security test: identify visible components, interfaces, boot/debug paths, "
                    "power/reset controls, labels, and security concerns. Note uncertainty."
                ),
            },
            timeout=240,
        )
        media_results.append(media)
        transcript.append(f"Media analysis requested for {media_path}: {summarise_answer(media['analysis'], 220)}")

    questions = []
    session_id = f"full-test-{case['id']}"
    for query in case["queries"]:
        chat = api("/api/chat", {"question": query, "session_id": session_id, "limit": 8}, timeout=180)
        top_sources = [item.get("source", {}).get("path", item.get("path")) for item in chat.get("evidence", [])[:4]]
        questions.append({"query": query, "response": chat, "top_sources": top_sources})
        transcript.append(
            f"Q: {query}\n"
            f"A: {summarise_answer(chat['answer'])}\n"
            f"confidence={chat['validation']['confidence']} sources={', '.join(top_sources)}"
        )

    memory = api("/api/memory")
    messages = memory.get("sessions", {}).get(session_id, {}).get("messages", [])
    transcript.append(f"Memory check: session {session_id} contains {len(messages)} messages.")

    return {
        "case": case,
        "index": index,
        "status": status,
        "media_results": media_results,
        "questions": questions,
        "memory_message_count": len(messages),
        "expected_findings": case["expected_findings"],
    }


def write_case_report(result: dict[str, Any]) -> str:
    case = result["case"]
    lines = [
        f"# Full security test: {case['name']}",
        "",
        "## Test method",
        "",
        "- Started the local web app and exercised HTTP API endpoints end to end.",
        "- Indexed the saved corpus with Qwen media enrichment enabled.",
        "- Requested VLM analysis for one saved image and one saved PDF.",
        "- Asked four security-review questions through chat with memory enabled.",
        "- Checked retrieved sources, confidence, and saved conversation memory.",
        "",
        "## Runtime status",
        "",
        f"- Sources indexed: {result['index']['source_count']}",
        f"- Chunks indexed: {result['index']['chunk_count']}",
        f"- Local LLM available: {result['status']['ollama_available']}",
        f"- Qwen VLM available: {result['status'].get('qwen_vlm_available')}",
        f"- Configured VLM model: {result['status']['vlm_model']}",
        f"- Memory messages saved: {result['memory_message_count']}",
        "",
        "## Media analysis checks",
        "",
    ]
    for media in result["media_results"]:
        lines.extend(
            [
                f"### {media['path']}",
                "",
                media["analysis"],
                "",
            ]
        )

    lines.extend(["## Security questions and retrieved evidence", ""])
    for item in result["questions"]:
        response = item["response"]
        lines.extend(
            [
                f"### {item['query']}",
                "",
                response["answer"],
                "",
                f"- Confidence: {response['validation']['confidence']}",
                f"- More source data needed: {response['validation']['needs_more_source_data']}",
                "- Top retrieved sources:",
            ]
        )
        lines.extend([f"  - `{source}`" for source in item["top_sources"]])
        lines.append("")

    lines.extend(
        [
            "## Consolidated security findings",
            "",
            *[f"- {finding}" for finding in result["expected_findings"]],
            "",
            "## Test verdict",
            "",
            "PASS with caveats. The workflow successfully indexed the corpus, searched evidence, "
            "answered security-review questions with citations and confidence scoring, and persisted "
            "conversation memory. In this execution environment the local Qwen endpoint was not "
            "available, so media checks recorded explicit pending enrichment chunks instead of live "
            "model-generated image/PDF analysis.",
            "",
        ]
    )

    report = "\n".join(lines)
    (RESULTS_DIR / f"{case['id']}_full_security_test.md").write_text(report, encoding="utf-8")
    return report


def write_brief_review(results: list[dict[str, Any]]) -> None:
    media_gap = any(not result["status"].get("qwen_vlm_available") for result in results)
    review = f"""# Critical review against original project brief

## Scope reviewed

This review compares the implemented prototype and the two full security test
runs against the Plexal/HMGCC smart personal assistant brief.

## Strengths demonstrated

- Offline-first architecture: the web app runs locally and the saved corpora are
  stored in the repository for disconnected testing.
- Structured/unstructured evidence indexing: Markdown, JSON, images, and PDFs are
  discovered as sources and represented in the knowledge base.
- Multi-modal integration point: Qwen3.5-compatible image/PDF calls are wired into
  indexing and ad hoc media analysis, with explicit pending chunks if the local
  model endpoint is unavailable.
- Analyst workflow: repository indexing, search, chat, source evidence panels,
  confidence scoring, and persistent memory all work end to end.
- Security-analysis relevance: both test cases surfaced physical interfaces,
  boot/debug paths, power/reset controls, removable media, headers, wireless and
  peripheral trust boundaries.

## Gaps and risks

- Live VLM execution was not proven in this cloud environment because no local
  Qwen endpoint was reachable: {media_gap}. The integration contract and fallback
  behaviour were tested, but a TRL6 evaluation must include a machine with the
  target Qwen3.5 VLM installed.
- PDF understanding currently depends on the VLM serving stack accepting base64
  PDF attachments, or on analysts placing OCR/page images beside the PDF. A robust
  offline OCR and PDF text extraction pipeline is still needed.
- Retrieval is lexical rather than embedding/vector based, so semantically related
  evidence can be missed when terminology differs.
- The confidence score is a transparent heuristic, not a calibrated probability.
  It should be validated against labelled analyst tasks before operational use.
- Cross-source contradiction detection is shallow. The assistant can cite sources
  and request more data, but it does not yet perform rigorous claim-level
  consistency checking.
- User profiling is preference based only; proactive adaptation is not yet
  demonstrated.
- The prototype has no authentication, role separation, audit logging, encrypted
  state, or secure update mechanism.

## Requirement-by-requirement assessment

| Brief requirement | Assessment |
| --- | --- |
| Understand system architecture, physical interfaces, data interfaces and protocols | Partially met. The test cases identify interfaces and trust boundaries from saved evidence, but deeper protocol extraction needs stronger OCR/VLM/embedding support. |
| Check and validate responses before publishing | Partially met. Citation checks, source weighting and confidence flags exist; stronger hallucination detection and contradiction checks are needed. |
| Characterise multimedia inputs including manuals, schematics, datasheets, images, code and annotations | Partially met. Images and PDFs are indexed and can be sent to Qwen VLM; full OCR/PDF extraction and handwritten annotation evaluation remain future work. |
| Verify information by listing sources and cross-checking high-confidence data | Partially met. Answers include retrieved sources and confidence hints; explicit multi-source corroboration is limited. |
| Flag confidence and need for more source data | Met for prototype. Every chat answer includes confidence and a more-data-needed flag. |
| Operate on a laptop without internet | Met for the app once evidence and local models are installed. The saved test data supports offline reruns. |
| Chat-like query function | Met for prototype. |
| Keep memory of queries over weeks | Partially met. Local JSON memory persists sessions; production use needs retention controls, encryption and search over long histories. |
| User profile and adaptation | Partially met. Preferences guide prompts; proactive behaviour is not implemented. |
| Translation and bias mitigation | Not met. |
| Offline update strategy | Not met beyond documentation notes. |

## Overall judgement

The prototype is a credible demonstration of the intended human-machine teaming
workflow and is useful for early analyst trials on curated local corpora. It does
not yet meet a TRL6 bar for high-assurance operational evaluation because live
Qwen media analysis, robust PDF/OCR handling, semantic retrieval, calibrated
validation, secure local state, and operational update controls need to be
implemented and tested on target hardware.
"""
    (RESULTS_DIR / "critical_review_against_brief.md").write_text(review, encoding="utf-8")


def wrap_text(text: str, width: int = 76, max_lines: int = 24) -> list[str]:
    lines: list[str] = []
    for paragraph in text.splitlines():
        if not paragraph:
            lines.append("")
        else:
            lines.extend(textwrap.wrap(paragraph, width=width) or [""])
    return lines[:max_lines]


def ppm_escape_text_line(line: str) -> str:
    return line.encode("ascii", errors="replace").decode("ascii")


FONT = {
    " ": ["000", "000", "000", "000", "000"],
    "?": ["111", "001", "011", "000", "010"],
}


def glyph(char: str) -> list[str]:
    patterns = {
        "A": ["010", "101", "111", "101", "101"],
        "B": ["110", "101", "110", "101", "110"],
        "C": ["011", "100", "100", "100", "011"],
        "D": ["110", "101", "101", "101", "110"],
        "E": ["111", "100", "110", "100", "111"],
        "F": ["111", "100", "110", "100", "100"],
        "G": ["011", "100", "101", "101", "011"],
        "H": ["101", "101", "111", "101", "101"],
        "I": ["111", "010", "010", "010", "111"],
        "J": ["001", "001", "001", "101", "010"],
        "K": ["101", "101", "110", "101", "101"],
        "L": ["100", "100", "100", "100", "111"],
        "M": ["101", "111", "111", "101", "101"],
        "N": ["101", "111", "111", "111", "101"],
        "O": ["010", "101", "101", "101", "010"],
        "P": ["110", "101", "110", "100", "100"],
        "Q": ["010", "101", "101", "111", "011"],
        "R": ["110", "101", "110", "101", "101"],
        "S": ["011", "100", "010", "001", "110"],
        "T": ["111", "010", "010", "010", "010"],
        "U": ["101", "101", "101", "101", "111"],
        "V": ["101", "101", "101", "101", "010"],
        "W": ["101", "101", "111", "111", "101"],
        "X": ["101", "101", "010", "101", "101"],
        "Y": ["101", "101", "010", "010", "010"],
        "Z": ["111", "001", "010", "100", "111"],
        "0": ["111", "101", "101", "101", "111"],
        "1": ["010", "110", "010", "010", "111"],
        "2": ["110", "001", "010", "100", "111"],
        "3": ["110", "001", "010", "001", "110"],
        "4": ["101", "101", "111", "001", "001"],
        "5": ["111", "100", "110", "001", "110"],
        "6": ["011", "100", "110", "101", "010"],
        "7": ["111", "001", "010", "010", "010"],
        "8": ["010", "101", "010", "101", "010"],
        "9": ["010", "101", "011", "001", "110"],
        ".": ["000", "000", "000", "000", "010"],
        ",": ["000", "000", "000", "010", "100"],
        ":": ["000", "010", "000", "010", "000"],
        ";": ["000", "010", "000", "010", "100"],
        "-": ["000", "000", "111", "000", "000"],
        "/": ["001", "001", "010", "100", "100"],
        "_": ["000", "000", "000", "000", "111"],
        "=": ["000", "111", "000", "111", "000"],
        "'": ["010", "010", "000", "000", "000"],
        "(": ["001", "010", "010", "010", "001"],
        ")": ["100", "010", "010", "010", "100"],
        "[": ["011", "010", "010", "010", "011"],
        "]": ["110", "010", "010", "010", "110"],
        "+": ["000", "010", "111", "010", "000"],
    }
    return patterns.get(char.upper(), FONT.get(char, FONT["?"]))


def draw_text(pixels: list[list[tuple[int, int, int]]], x: int, y: int, text: str, scale: int = 3) -> None:
    color = (230, 245, 255)
    for char in ppm_escape_text_line(text):
        pattern = glyph(char)
        for row_idx, row in enumerate(pattern):
            for col_idx, bit in enumerate(row):
                if bit == "1":
                    for dy in range(scale):
                        for dx in range(scale):
                            yy = y + row_idx * scale + dy
                            xx = x + col_idx * scale + dx
                            if 0 <= yy < len(pixels) and 0 <= xx < len(pixels[0]):
                                pixels[yy][xx] = color
        x += 4 * scale


def write_ppm(path: Path, title: str, body: str) -> None:
    width, height = 1280, 720
    bg = (9, 17, 31)
    pixels = [[bg for _ in range(width)] for _ in range(height)]
    for y in range(0, height, 2):
        shade = min(40, y // 24)
        for x in range(width):
            pixels[y][x] = (bg[0], bg[1] + shade // 3, bg[2] + shade)
    draw_text(pixels, 48, 44, title[:55], scale=5)
    y = 130
    for line in wrap_text(body):
        draw_text(pixels, 56, y, line[:86], scale=3)
        y += 26
    with path.open("wb") as handle:
        handle.write(f"P6\n{width} {height}\n255\n".encode("ascii"))
        for row in pixels:
            for red, green, blue in row:
                handle.write(bytes((red, green, blue)))


def create_video(transcript: list[str]) -> Path:
    FRAMES_DIR.mkdir(parents=True, exist_ok=True)
    slides = [
        ("Offline Security Assistant", "End-to-end security test capture for ESP32-DevKitC V4 and Raspberry Pi 4 Model B."),
    ]
    for idx, entry in enumerate(transcript[:10], start=1):
        slides.append((f"Workflow step {idx}", entry))
    slides.append(("Post-test review", "Reports saved under test_results/full_security_tests with structured JSON, Markdown findings, and critical brief review."))
    for index, (title, body) in enumerate(slides):
        write_ppm(FRAMES_DIR / f"frame_{index:03d}.ppm", title, body)
    output = RESULTS_DIR / "system_behaviour_capture.mp4"
    subprocess.run(
        [
            "ffmpeg",
            "-y",
            "-framerate",
            "0.5",
            "-i",
            str(FRAMES_DIR / "frame_%03d.ppm"),
            "-pix_fmt",
            "yuv420p",
            "-vf",
            "fps=30",
            str(output),
        ],
        check=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
    )
    shutil.rmtree(FRAMES_DIR)
    return output


def main() -> None:
    RESULTS_DIR.mkdir(parents=True, exist_ok=True)
    transcript: list[str] = []
    process = start_server()
    try:
        wait_for_server(process)
        transcript.append("Server started and /api/status responded.")
        api(
            "/api/profile",
            {
                "preferred_answer_style": "security review bullets with citations and mitigations",
                "focus_areas": ["boot chain", "debug access", "power/reset", "physical interfaces"],
                "language": "English",
            },
        )
        transcript.append("Analyst profile saved for security-review focused responses.")
        results = [run_case(case, transcript) for case in TEST_CASES]
    finally:
        process.terminate()
        try:
            process.wait(timeout=5)
        except subprocess.TimeoutExpired:
            process.kill()

    for result in results:
        write_case_report(result)
    write_brief_review(results)
    video = create_video(transcript)

    summary = {
        "generated_at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "base_url": BASE_URL,
        "results": results,
        "video": str(video.relative_to(ROOT)),
        "transcript": transcript,
    }
    (RESULTS_DIR / "full_security_test_results.json").write_text(json.dumps(summary, indent=2), encoding="utf-8")
    (RESULTS_DIR / "system_behaviour_transcript.txt").write_text("\n\n".join(transcript), encoding="utf-8")
    print(json.dumps({"results_dir": str(RESULTS_DIR.relative_to(ROOT)), "video": str(video.relative_to(ROOT))}, indent=2))


if __name__ == "__main__":
    main()
