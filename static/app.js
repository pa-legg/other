const state = {
  sessionId: localStorage.getItem("securityAssistantSession") || crypto.randomUUID(),
  sources: [],
};

localStorage.setItem("securityAssistantSession", state.sessionId);

const $ = (id) => document.getElementById(id);

async function api(path, options = {}) {
  const response = await fetch(path, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || `Request failed: ${response.status}`);
  }
  return data;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderStatus(status) {
  $("status").innerHTML = `
    <div><strong>Repository:</strong> ${escapeHtml(status.repository || "not indexed")}</div>
    <div><strong>Index:</strong> ${status.source_count} sources / ${status.chunk_count} chunks</div>
    <div><strong>Built:</strong> ${escapeHtml(status.built_at || "never")}</div>
    <div><strong>Local models:</strong> ${status.ollama_available ? "Ollama available" : "Ollama unavailable"} (${escapeHtml(status.llm_model)} / ${escapeHtml(status.vlm_model)})</div>
  `;
  $("profileStyle").value = status.profile?.preferred_answer_style || "";
  $("profileFocus").value = (status.profile?.focus_areas || []).join(", ");
  $("profileLanguage").value = status.profile?.language || "English";
}

function confidenceClass(value) {
  if (value >= 0.68) return "high";
  if (value >= 0.4) return "medium";
  return "low";
}

function renderSources(sources) {
  state.sources = sources;
  if (!sources.length) {
    $("sources").innerHTML = "<p>No sources indexed yet.</p>";
    $("imagePath").innerHTML = "<option value=''>No images indexed</option>";
    return;
  }
  $("sources").innerHTML = sources
    .slice(0, 80)
    .map((source) => `
      <div class="source-card">
        <div><strong>${escapeHtml(source.path)}</strong></div>
        <div>${escapeHtml(source.kind)} | ${escapeHtml(source.mime)} | confidence hint: ${escapeHtml(source.confidence_hint)}</div>
      </div>
    `)
    .join("");
  const images = sources.filter((source) => source.kind === "image");
  $("imagePath").innerHTML = images.length
    ? images.map((source) => `<option value="${escapeHtml(source.path)}">${escapeHtml(source.path)}</option>`).join("")
    : "<option value=''>No images indexed</option>";
}

function renderEvidence(evidence) {
  if (!evidence.length) return "<p>No evidence retrieved.</p>";
  return evidence
    .map((item, index) => `
      <details>
        <summary>[S${index + 1}] ${escapeHtml(item.source?.path || item.path)} (score ${item.score})</summary>
        <p>${escapeHtml(item.text)}</p>
      </details>
    `)
    .join("");
}

function addMessage(role, content, meta = "") {
  const message = document.createElement("div");
  message.className = `message ${role}`;
  message.innerHTML = `
    <div class="message-role">${role === "user" ? "Analyst" : "Assistant"}</div>
    <pre>${escapeHtml(content)}</pre>
    ${meta ? `<div class="message-meta">${meta}</div>` : ""}
  `;
  $("chatLog").appendChild(message);
  $("chatLog").scrollTop = $("chatLog").scrollHeight;
}

async function refresh() {
  const [status, sources] = await Promise.all([api("/api/status"), api("/api/sources")]);
  renderStatus(status);
  renderSources(sources);
}

async function buildIndex(event) {
  event.preventDefault();
  $("indexResult").textContent = "Indexing repository...";
  const repository = $("repository").value.trim();
  const data = await api("/api/index", {
    method: "POST",
    body: JSON.stringify({ repository }),
  });
  $("indexResult").textContent = `Indexed ${data.source_count} sources and ${data.chunk_count} chunks.`;
  await refresh();
}

async function runSearch(event) {
  event.preventDefault();
  const query = $("searchQuery").value.trim();
  if (!query) return;
  const data = await api("/api/search", {
    method: "POST",
    body: JSON.stringify({ query, limit: 10 }),
  });
  $("searchResults").innerHTML = renderEvidence(data.results);
}

async function askQuestion(event) {
  event.preventDefault();
  const question = $("question").value.trim();
  if (!question) return;
  addMessage("user", question);
  $("question").value = "";
  const data = await api("/api/chat", {
    method: "POST",
    body: JSON.stringify({ question, session_id: state.sessionId, limit: 8 }),
  });
  const confidence = data.validation?.confidence ?? 0;
  const cls = confidenceClass(confidence);
  const meta = `
    <span class="pill ${cls}">confidence ${confidence}</span>
    <span class="pill">${escapeHtml(data.model)}</span>
    ${data.validation?.needs_more_source_data ? '<span class="pill low">more source data needed</span>' : ""}
  `;
  addMessage("assistant", data.answer, meta);
  $("evidencePanel").innerHTML = renderEvidence(data.evidence || []);
}

async function analyzeImage(event) {
  event.preventDefault();
  const path = $("imagePath").value;
  if (!path) return;
  $("imageAnalysis").textContent = "Running local VLM analysis...";
  const prompt = $("imagePrompt").value.trim();
  const data = await api("/api/analyze-image", {
    method: "POST",
    body: JSON.stringify({ path, prompt }),
  });
  $("imageAnalysis").textContent = data.analysis;
}

async function saveProfile(event) {
  event.preventDefault();
  const focus = $("profileFocus").value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  await api("/api/profile", {
    method: "POST",
    body: JSON.stringify({
      preferred_answer_style: $("profileStyle").value.trim(),
      focus_areas: focus,
      language: $("profileLanguage").value.trim(),
    }),
  });
  $("profileResult").textContent = "Profile saved for future sessions.";
  await refresh();
}

$("indexForm").addEventListener("submit", (event) => buildIndex(event).catch(showError));
$("searchForm").addEventListener("submit", (event) => runSearch(event).catch(showError));
$("chatForm").addEventListener("submit", (event) => askQuestion(event).catch(showError));
$("imageForm").addEventListener("submit", (event) => analyzeImage(event).catch(showError));
$("profileForm").addEventListener("submit", (event) => saveProfile(event).catch(showError));

function showError(error) {
  const message = error instanceof Error ? error.message : String(error);
  $("error").textContent = message;
  setTimeout(() => {
    $("error").textContent = "";
  }, 7000);
}

refresh().catch(showError);
