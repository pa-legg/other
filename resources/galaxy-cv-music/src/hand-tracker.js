import {
  FilesetResolver,
  HandLandmarker,
} from "@mediapipe/tasks-vision";
import { resolveGesture, gestureLabel, NOTE_TABLE } from "./gestures.js";

export class HandTracker {
  constructor(video) {
    this.video = video;
    this.landmarker = null;
    this.stream = null;
    this.running = false;
    this.handDetected = false;
    this.fingerCount = 0;
    this.currentMode = "dust";
    this.noteIndex = -1;
    this.gestureResult = null;
  }

  async init() {
    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.18/wasm",
    );

    this.landmarker = await HandLandmarker.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath:
          "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",
        delegate: "GPU",
      },
      runningMode: "VIDEO",
      numHands: 1,
    });

    this.stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } },
      audio: false,
    });
    this.video.srcObject = this.stream;
    await this.video.play();
    this.running = true;
  }

  update() {
    if (!this.running || !this.landmarker || this.video.readyState < 2) return;

    const result = this.landmarker.detectForVideo(this.video, performance.now());

    if (result.landmarks?.length) {
      this.handDetected = true;
      const landmarks = result.landmarks[0];
      const handedness =
        result.handedness?.[0]?.[0]?.categoryName ?? "Right";
      this.gestureResult = resolveGesture(landmarks, handedness);
      this.fingerCount = this.gestureResult.fingerCount;
      this.currentMode = this.gestureResult.mode;
      this.noteIndex = this.gestureResult.noteIndex;
    } else {
      this.handDetected = false;
      this.fingerCount = 0;
      this.currentMode = "dust";
      this.noteIndex = -1;
      this.gestureResult = { mode: "dust", noteIndex: -1, fingerCount: 0 };
    }
  }

  getStatusText() {
    return gestureLabel(this.gestureResult);
  }

  getNoteLabel() {
    if (this.noteIndex < 0) return "—";
    return NOTE_TABLE[this.noteIndex].label;
  }

  dispose() {
    this.running = false;
    if (this.stream) {
      for (const track of this.stream.getTracks()) track.stop();
    }
    this.landmarker?.close();
  }
}
