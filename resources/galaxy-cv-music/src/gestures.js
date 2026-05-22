/** Landmark index groups (MediaPipe hand). */
const FINGER_TIPS = [4, 8, 12, 16, 20];
const FINGER_PIPS = [3, 6, 10, 14, 18];

/**
 * Count extended fingers (same logic as galaxy-cv).
 * @param {import('@mediapipe/tasks-vision').NormalizedLandmark[]} landmarks
 * @param {string} handedness "Left" | "Right"
 */
export function countFingers(landmarks, handedness) {
  let count = 0;
  if (isThumbExtended(landmarks, handedness)) count++;
  for (let i = 1; i < 5; i++) {
    if (isFingerExtended(landmarks, FINGER_TIPS[i], FINGER_PIPS[i])) count++;
  }
  return count;
}

function isThumbExtended(landmarks, handedness) {
  const thumb = landmarks[4];
  const index = landmarks[3];
  const middle = landmarks[2];
  const isRight = handedness.toLowerCase().includes("right");
  if (isRight) {
    return thumb.x < index.x - 0.02 && thumb.x < middle.x;
  }
  return thumb.x > index.x + 0.02 && thumb.x > middle.x;
}

function isFingerExtended(landmarks, tipIdx, pipIdx) {
  const tip = landmarks[tipIdx];
  const pip = landmarks[pipIdx];
  const wrist = landmarks[0];
  const mcp = landmarks[pipIdx - 1];
  const tipDist = dist2(tip, wrist);
  const pipDist = dist2(pip, wrist);
  const mcpDist = dist2(mcp, wrist);
  return tipDist > pipDist && tipDist > mcpDist * 1.05;
}

function dist2(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return dx * dx + dy * dy;
}

/**
 * Per-finger extension flags: [thumb, index, middle, ring, pinky].
 */
export function fingerStates(landmarks, handedness) {
  return [
    isThumbExtended(landmarks, handedness),
    isFingerExtended(landmarks, FINGER_TIPS[1], FINGER_PIPS[1]),
    isFingerExtended(landmarks, FINGER_TIPS[2], FINGER_PIPS[2]),
    isFingerExtended(landmarks, FINGER_TIPS[3], FINGER_PIPS[3]),
    isFingerExtended(landmarks, FINGER_TIPS[4], FINGER_PIPS[4]),
  ];
}

/** Chromatic scale from middle C (MIDI 60) through top C (72) — 13 notes. */
export const NOTE_TABLE = [
  { id: "C4", midi: 60, label: "C4", gesture: "Thumb — middle C" },
  { id: "Cs4", midi: 61, label: "C♯4", gesture: "Index only" },
  { id: "D4", midi: 62, label: "D4", gesture: "Middle only" },
  { id: "Ds4", midi: 63, label: "D♯4", gesture: "Ring only" },
  { id: "E4", midi: 64, label: "E4", gesture: "Pinky only" },
  { id: "F4", midi: 65, label: "F4", gesture: "Index + middle" },
  { id: "Fs4", midi: 66, label: "F♯4", gesture: "Middle + ring" },
  { id: "G4", midi: 67, label: "G4", gesture: "Ring + pinky" },
  { id: "Gs4", midi: 68, label: "G♯4", gesture: "Index + middle + ring" },
  { id: "A4", midi: 69, label: "A4", gesture: "Middle + ring + pinky" },
  { id: "As4", midi: 70, label: "A♯4", gesture: "Four fingers (no thumb)" },
  { id: "B4", midi: 71, label: "B4", gesture: "Four fingers + thumb" },
  { id: "C5", midi: 72, label: "C5", gesture: "Open palm (all five)" },
];

/**
 * Map finger pose to note index 0–12, or -1 for fist/rest.
 * @returns {{ mode: 'dust' | 'note', noteIndex: number, fingerCount: number, states: boolean[] }}
 */
export function resolveGesture(landmarks, handedness) {
  const states = fingerStates(landmarks, handedness);
  const fingerCount = states.filter(Boolean).length;
  const [thumb, index, middle, ring, pinky] = states;

  if (fingerCount === 0) {
    return { mode: "dust", noteIndex: -1, fingerCount: 0, states };
  }

  const key = states.map((s) => (s ? "1" : "0")).join("");
  const noteIndex = POSE_TO_NOTE.get(key);
  if (noteIndex === undefined) {
    return { mode: "dust", noteIndex: -1, fingerCount, states };
  }

  return { mode: "note", noteIndex, fingerCount, states };
}

/** Bit patterns for thumb,index,middle,ring,pinky → note index. */
const POSE_TO_NOTE = new Map([
  ["10000", 0],
  ["01000", 1],
  ["00100", 2],
  ["00010", 3],
  ["00001", 4],
  ["01100", 5],
  ["00110", 6],
  ["00011", 7],
  ["01110", 8],
  ["00111", 9],
  ["01111", 10],
  ["11111", 12],
  ["11110", 11],
]);

export function gestureLabel(result) {
  if (!result || result.mode === "dust") {
    if (result?.fingerCount > 0) {
      return `${result.fingerCount} fingers — unrecognized pose (see guide)`;
    }
    return "Fist — orbiting space dust (rest)";
  }
  const note = NOTE_TABLE[result.noteIndex];
  return `${note.gesture} — playing ${note.label}`;
}
