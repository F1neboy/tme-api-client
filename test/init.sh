#!/bin/sh
cd "$(dirname "$0")/.." || exit 1
npm install
tsc src/client.ts
