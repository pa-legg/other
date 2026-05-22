import { NOTE_TABLE } from "./gestures.js";

export class MusicEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.active = new Map();
    this.lastNoteIndex = -1;
    this.enabled = false;
  }

  async unlock() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.35;
      this.master.connect(this.ctx.destination);
    }
    if (this.ctx.state === "suspended") {
      await this.ctx.resume();
    }
    this.enabled = true;
  }

  midiToFreq(midi) {
    return 440 * Math.pow(2, (midi - 69) / 12);
  }

  /**
   * @param {number} noteIndex 0–12 or -1 for rest
   */
  updateNote(noteIndex) {
    if (!this.enabled || !this.ctx) return;

    if (noteIndex === this.lastNoteIndex) return;

    if (this.lastNoteIndex >= 0) {
      this.releaseNote(this.lastNoteIndex);
    }

    this.lastNoteIndex = noteIndex;

    if (noteIndex >= 0) {
      this.playNote(noteIndex);
    }
  }

  playNote(noteIndex) {
    const note = NOTE_TABLE[noteIndex];
    const t = this.ctx.currentTime;
    const freq = this.midiToFreq(note.midi);

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    osc1.type = "triangle";
    osc2.type = "sine";
    osc1.frequency.value = freq;
    osc2.frequency.value = freq * 2;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.22, t + 0.02);
    gain.gain.setValueAtTime(0.18, t + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.9);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.master);

    osc1.start(t);
    osc2.start(t);
    osc1.stop(t + 0.95);
    osc2.stop(t + 0.95);

    this.active.set(noteIndex, { osc1, osc2, gain, stopAt: t + 0.95 });
  }

  releaseNote(noteIndex) {
    const voice = this.active.get(noteIndex);
    if (!voice || !this.ctx) return;
    const t = this.ctx.currentTime;
    try {
      voice.gain.gain.cancelScheduledValues(t);
      voice.gain.gain.setValueAtTime(voice.gain.gain.value, t);
      voice.gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
      voice.osc1.stop(t + 0.1);
      voice.osc2.stop(t + 0.1);
    } catch {
      /* already stopped */
    }
    this.active.delete(noteIndex);
  }

  dispose() {
    for (const idx of [...this.active.keys()]) {
      this.releaseNote(idx);
    }
    this.lastNoteIndex = -1;
    if (this.ctx) {
      this.ctx.close();
      this.ctx = null;
    }
  }
}
