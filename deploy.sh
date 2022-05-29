#!/usr/bin/env sh
set -e
npm run docs:build
cd /.vuepress/dist
git init
git add -A
git commit -m 'contents updated'
git push -f git@github.com:citenote/citenote.github.io.git master:gh-pages
cd -