'use strict';

const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const appVersion = require('../app-version.js');

function loadServiceWorker() {
  const listeners = new Map();
  let skipWaitingCalls = 0;
  const context = {
    URL,
    Set,
    Promise,
    caches: {
      open: async () => ({ addAll: async () => {}, put: async () => {} }),
      keys: async () => [],
      delete: async () => true,
      match: async () => undefined
    },
    fetch: async () => ({ clone: () => ({}) })
  };

  context.self = {
    location: { href: 'https://example.test/chatlog-viewer/sw.js', origin: 'https://example.test' },
    ChatLogViewerVersion: appVersion,
    addEventListener(type, handler) {
      listeners.set(type, handler);
    },
    skipWaiting: async () => { skipWaitingCalls += 1; },
    clients: { claim: async () => {} }
  };
  context.importScripts = () => {};
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'sw.js'), 'utf8'), context);
  return { listeners, skipWaitingCalls: () => skipWaitingCalls };
}

test('does not intercept Markdown document requests', () => {
  const { listeners } = loadServiceWorker();
  let responded = false;

  listeners.get('fetch')({
    request: { method: 'GET', url: 'https://example.test/chatlog-viewer/logs/chat.md' },
    respondWith() {
      responded = true;
    }
  });

  assert.equal(responded, false);
});

test('waits for an explicit message before calling skipWaiting', async () => {
  const { listeners, skipWaitingCalls } = loadServiceWorker();
  const message = listeners.get('message');
  let updatePromise;

  message({
    data: { type: 'IGNORE' },
    waitUntil(promise) {
      updatePromise = promise;
    }
  });
  assert.equal(updatePromise, undefined);
  assert.equal(skipWaitingCalls(), 0);

  message({
    data: { type: 'SKIP_WAITING' },
    waitUntil(promise) {
      updatePromise = promise;
    }
  });
  await updatePromise;
  assert.equal(skipWaitingCalls(), 1);
});
