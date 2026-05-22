import "./style.css";
import { createScene, GalaxyParticles } from "./galaxy.js";
import { HandTracker } from "./hand-tracker.js";
import { MusicEngine } from "./audio.js";

const canvas = document.getElementById("galaxy-canvas");
const video = document.getElementById("webcam");
const loading = document.getElementById("loading");
const gestureLabelEl = document.getElementById("gesture-label");
const noteLabelEl = document.getElementById("note-label");
const hud = document.getElementById("hud");
const hudToggle = document.getElementById("hud-toggle");

const music = new MusicEngine();

hudToggle.addEventListener("click", () => {
  hud.classList.toggle("minimized");
  hudToggle.textContent = hud.classList.contains("minimized") ? "+" : "−";
  hudToggle.setAttribute(
    "aria-label",
    hud.classList.contains("minimized") ? "Expand panel" : "Minimize panel",
  );
});

document.body.addEventListener(
  "click",
  () => {
    music.unlock();
  },
  { once: true },
);

async function main() {
  const { scene, camera, renderer } = createScene(canvas);
  const galaxy = new GalaxyParticles(scene);
  const tracker = new HandTracker(video);

  let lastMode = "";
  let lastNote = -2;

  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener("resize", onResize);

  await tracker.init();
  loading.classList.add("hidden");

  galaxy.setMode("dust", -1, true);
  lastMode = "dust";
  lastNote = -1;

  const clock = { last: performance.now() };

  function frame(now) {
    requestAnimationFrame(frame);
    const delta = Math.min((now - clock.last) / 1000, 0.05);
    clock.last = now;

    tracker.update();

    const mode = tracker.currentMode;
    const noteIndex = tracker.noteIndex;

    if (mode !== lastMode || noteIndex !== lastNote) {
      galaxy.setMode(mode, noteIndex);
      music.updateNote(noteIndex);
      lastMode = mode;
      lastNote = noteIndex;
    }

    gestureLabelEl.textContent = tracker.getStatusText();
    noteLabelEl.textContent = tracker.getNoteLabel();

    galaxy.update(now, delta);
    renderer.render(scene, camera);
  }

  requestAnimationFrame(frame);

  window.addEventListener("beforeunload", () => {
    tracker.dispose();
    galaxy.dispose();
    music.dispose();
    renderer.dispose();
  });
}

main().catch((err) => {
  console.error(err);
  loading.textContent = "Could not start camera or hand tracking.";
});
