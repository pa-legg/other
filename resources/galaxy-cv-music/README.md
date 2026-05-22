# Galaxy Music Gesture

Hand-controlled musical galaxy based on [Galaxy Gesture](https://pa-legg.github.io/resources/galaxy-cv/). Uses your webcam and MediaPipe hand landmarks to play chromatic notes from **middle C (C4)** through **top C (C5)** while particles form note labels in 3D space.

**Live site:** https://pa-legg.github.io/resources/galaxy-cv-music/

## Gesture → note map

| Finger pose | Note |
|-------------|------|
| Fist | Rest (orbiting dust, no sound) |
| Thumb only | C4 |
| Index only | C♯4 |
| Middle only | D4 |
| Ring only | D♯4 |
| Pinky only | E4 |
| Index + middle | F4 |
| Middle + ring | F♯4 |
| Ring + pinky | G4 |
| Index + middle + ring | G♯4 |
| Middle + ring + pinky | A4 |
| Four fingers (no thumb) | A♯4 |
| Four fingers + thumb | B4 |
| Open palm (all five) | C5 |

Click anywhere once to enable Web Audio after the page loads.

## Development

```bash
npm install
npm run dev
```

## Build & deploy to GitHub Pages

```bash
npm run build
```

Copy `dist/*` into `resources/galaxy-cv-music/` on the [pa-legg.github.io](https://github.com/pa-legg/pa-legg.github.io) repository, commit, and push to `main`.

Or from the repo root:

```bash
./scripts/deploy-galaxy-cv-music.sh /path/to/pa-legg.github.io
```
