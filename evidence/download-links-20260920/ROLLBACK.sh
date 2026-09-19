#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
TARGET="${1:-$ROOT}"
cp "$ROOT/evidence/download-links-20260920/baseline/index.html" "$TARGET/dist/index.html"
echo "Restored the previous PupMail download links in $TARGET/dist/index.html"
