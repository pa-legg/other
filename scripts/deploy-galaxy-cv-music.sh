#!/usr/bin/env bash
# Build galaxy-cv-music and copy into a local pa-legg.github.io clone.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PAGES_REPO="${1:-}"

if [[ -z "$PAGES_REPO" ]]; then
  echo "Usage: $0 /path/to/pa-legg.github.io"
  exit 1
fi

cd "$ROOT/resources/galaxy-cv-music"
npm install
npm run build

TARGET="$PAGES_REPO/resources/galaxy-cv-music"
rm -rf "$TARGET"
mkdir -p "$TARGET"
cp -r dist/* "$TARGET/"

echo "Built files copied to $TARGET"
echo "Commit and push from pa-legg.github.io to publish."
