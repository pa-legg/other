import * as THREE from "three";
import { NOTE_TABLE } from "./gestures.js";

const PARTICLE_COUNT = 6000;

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function randomDustPosition() {
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(2 * Math.random() - 1);
  const r = 1.8 + Math.random() * 2.2;
  return new THREE.Vector3(
    r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi) * 0.6,
    r * Math.sin(phi) * Math.sin(theta),
  );
}

/** Simple 5×7 bitmaps for note names (C, C#, D, …). */
const GLYPHS = {
  C: [
    "01110",
    "10001",
    "10000",
    "10000",
    "10001",
    "10001",
    "01110",
  ],
  "#": [
    "00100",
    "01110",
    "00100",
    "01110",
    "00100",
    "00000",
    "00000",
  ],
  D: [
    "11110",
    "10001",
    "10001",
    "10001",
    "10001",
    "10001",
    "11110",
  ],
  E: [
    "11111",
    "10000",
    "11110",
    "10000",
    "10000",
    "10000",
    "11111",
  ],
  F: [
    "11111",
    "10000",
    "11110",
    "10000",
    "10000",
    "10000",
    "10000",
  ],
  G: [
    "01110",
    "10001",
    "10000",
    "10111",
    "10001",
    "10001",
    "01110",
  ],
  A: [
    "01110",
    "10001",
    "10001",
    "11111",
    "10001",
    "10001",
    "10001",
  ],
  B: [
    "11110",
    "10001",
    "11110",
    "10001",
    "10001",
    "10001",
    "11110",
  ],
  "4": [
    "00100",
    "01100",
    "10100",
    "10100",
    "11111",
    "00100",
    "00100",
  ],
  "5": [
    "01111",
    "10000",
    "11110",
    "00001",
    "00001",
    "10001",
    "01110",
  ],
  "♯": [
    "01100",
    "11110",
    "01100",
    "11110",
    "01100",
    "00000",
    "00000",
  ],
};

function glyphPositions(text) {
  const chars = [...text.replace("♯", "#")];
  const cell = 0.11;
  const positions = [];
  let cursorX = 0;

  for (const ch of chars) {
    const glyph = GLYPHS[ch] || GLYPHS.C;
    for (let row = 0; row < glyph.length; row++) {
      for (let col = 0; col < glyph[row].length; col++) {
        if (glyph[row][col] === "1") {
          positions.push(
            new THREE.Vector3(
              cursorX + col * cell - (chars.length * 3 * cell) / 2,
              (glyph.length - row) * cell - 0.35,
              (Math.random() - 0.5) * 0.08,
            ),
          );
        }
      }
    }
    cursorX += glyph[0].length * cell + cell * 1.2;
  }

  while (positions.length < PARTICLE_COUNT) {
    const base = positions[positions.length % Math.max(positions.length, 1)];
    positions.push(
      base
        .clone()
        .add(
          new THREE.Vector3(
            (Math.random() - 0.5) * 0.25,
            (Math.random() - 0.5) * 0.25,
            (Math.random() - 0.5) * 0.15,
          ),
        ),
    );
  }

  return positions.slice(0, PARTICLE_COUNT);
}

function noteHue(noteIndex) {
  return (noteIndex / 12) * 0.85 + 0.05;
}

export function createScene(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x020008);

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x020008, 0.035);

  const camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    0.1,
    200,
  );
  camera.position.set(0, 0.5, 6);
  camera.lookAt(0, 0, 0);

  const core = new THREE.Mesh(
    new THREE.SphereGeometry(2.5, 32, 32),
    new THREE.MeshBasicMaterial({
      color: 0x3a1866,
      transparent: true,
      opacity: 0.12,
      side: THREE.DoubleSide,
    }),
  );
  scene.add(core);

  return { scene, camera, renderer };
}

export class GalaxyParticles {
  constructor(scene) {
    this.group = new THREE.Group();
    scene.add(this.group);

    this.mode = "dust";
    this.noteIndex = -1;
    this.transition = 1;

    const geometry = new THREE.SphereGeometry(0.015, 6, 6);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.mesh = new THREE.InstancedMesh(geometry, material, PARTICLE_COUNT);
    this.group.add(this.mesh);

    this.particles = [];
    this.currentPos = [];
    this.sourcePos = [];
    this.targetPos = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const dust = randomDustPosition();
      const color = new THREE.Color().setHSL(0.72 + Math.random() * 0.12, 0.75, 0.55 + Math.random() * 0.2);
      this.particles.push({ color, dustTheta: Math.random() * Math.PI * 2, dustPhi: Math.acos(2 * Math.random() - 1) });
      this.currentPos.push(dust.clone());
      this.sourcePos.push(dust.clone());
      this.targetPos.push(dust.clone());
      this.mesh.setColorAt(i, color);
    }
    this.mesh.instanceColor.needsUpdate = true;
    this.applyPositions(this.currentPos);
  }

  applyPositions(positions) {
    const dummy = new THREE.Object3D();
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      dummy.position.copy(positions[i]);
      dummy.updateMatrix();
      this.mesh.setMatrixAt(i, dummy.matrix);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
  }

  dustPosition(p, t) {
    const r = 1.8 + 0.4 * Math.sin(t * 0.4 + p.dustTheta);
    return new THREE.Vector3(
      r * Math.sin(p.dustPhi) * Math.cos(p.dustTheta + t * 0.15),
      r * Math.cos(p.dustPhi) * 0.6,
      r * Math.sin(p.dustPhi) * Math.sin(p.dustTheta + t * 0.12),
    );
  }

  setMode(mode, noteIndex = -1, force = false) {
    if (!force && mode === this.mode && noteIndex === this.noteIndex) return;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      this.sourcePos[i].copy(this.currentPos[i]);
    }

    this.mode = mode;
    this.noteIndex = noteIndex;
    this.transition = 0;

    if (mode === "dust") {
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        this.targetPos[i].copy(randomDustPosition());
        const hue = 0.72 + Math.random() * 0.1;
        this.particles[i].color.setHSL(hue, 0.7, 0.55);
        this.mesh.setColorAt(i, this.particles[i].color);
      }
    } else {
      const label = NOTE_TABLE[noteIndex]?.label ?? "C4";
      const targets = glyphPositions(label);
      const hue = noteHue(noteIndex);
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        this.targetPos[i].copy(targets[i]);
        this.particles[i].color.setHSL(hue, 0.85, 0.62);
        this.mesh.setColorAt(i, this.particles[i].color);
      }
    }
    this.mesh.instanceColor.needsUpdate = true;
  }

  update(timeMs, delta) {
    const formingNote = this.mode === "note";
    this.transition = Math.min(1, this.transition + 1.8 * delta);
    const blend = easeInOutCubic(this.transition);
    this.group.rotation.y += delta * (formingNote ? 0.55 : 0.85);

    const t = timeMs * 0.001;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      if (this.mode === "dust" && blend >= 1) {
        this.currentPos[i].copy(this.dustPosition(this.particles[i], t));
      } else {
        this.currentPos[i].lerpVectors(this.sourcePos[i], this.targetPos[i], blend);
        if (formingNote && blend >= 1) {
          this.currentPos[i].y += Math.sin(t * 3 + i * 0.01) * 0.012;
        }
      }
    }

    this.applyPositions(this.currentPos);
  }

  dispose() {
    this.mesh.geometry.dispose();
    this.mesh.material.dispose();
    this.group.remove(this.mesh);
  }
}
