#!/usr/bin/env sh

set -e

npm run build

if [ ! -d "dist" ]; then
  echo "Build failed: dist directory not found."
  exit 1
fi

cd dist

git init
git checkout --orphan main
git add -A
git commit -m 'deploy'

git push -f $GITHUB_REPO main:gh-pages

# Optional clean-up
rm -rf .git