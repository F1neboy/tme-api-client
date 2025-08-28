#!/bin/sh
cd "$(dirname "$0")/.." || exit 1
tsc src/client.ts
