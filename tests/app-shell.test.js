'use strict';

const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const assert = require('node:assert/strict');

function assetPathsFromIndex(html) {
  const scripts = [...html.matchAll(/<script[^>]+src="([^"]+)"/g)].map((match) => match[1]);
  const links = [...html.matchAll(/<link[^>]+href="([^"]+)"/g)].map((match) => match[1]);
  return [...scripts, ...links]
    .filter((value) => !/^[a-z][a-z0-9+.-]*:/i.test(value))
    .map((value) => `./${value.replace(/^\.\//, '')}`);
}

function appShellPaths(source) {
  const declaration = source.match(/const APP_SHELL = \[([\s\S]*?)\];/);
  return new Set([...declaration[1].matchAll(/'([^']+)'/g)].map((match) => match[1]));
}

test('caches every local asset loaded by the HTML app shell', () => {
  const root = path.join(__dirname, '..');
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const serviceWorker = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');
  const cached = appShellPaths(serviceWorker);
  const missing = assetPathsFromIndex(html).filter((asset) => !cached.has(asset));

  assert.deepEqual(missing, []);
});

test('caches every local icon referenced by the web app manifest', () => {
  const root = path.join(__dirname, '..');
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.webmanifest'), 'utf8'));
  const serviceWorker = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');
  const cached = appShellPaths(serviceWorker);
  const missing = (manifest.icons || [])
    .map((icon) => `./${icon.src.replace(/^\.\//, '')}`)
    .filter((asset) => !cached.has(asset));

  assert.deepEqual(missing, []);
});
