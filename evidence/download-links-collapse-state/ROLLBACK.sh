#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
TARGET="${1:-$ROOT}"
cp "$ROOT/evidence/download-links-collapse-state/baseline/index.html" "$TARGET/dist/index.html"
echo "Restored previous PupMail download links in $TARGET/dist/index.html"
