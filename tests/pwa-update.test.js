'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { shouldOfferUpdate, shouldReloadAfterUpdate } = require('../lib/pwa-update.js');
const appVersion = require('../app-version.js');

test('uses one development version for display and cache keys', () => {
  assert.equal(appVersion.value, '2.0.0-dev');
  assert.equal(appVersion.cacheKey, 'v2.0.0-dev');
});

test('offers an update only for a waiting worker that controls this page', () => {
  assert.equal(shouldOfferUpdate({ hasWaitingWorker: true, hasController: true, dismissed: false }), true);
  assert.equal(shouldOfferUpdate({ hasWaitingWorker: true, hasController: false, dismissed: false }), false);
  assert.equal(shouldOfferUpdate({ hasWaitingWorker: true, hasController: true, dismissed: true }), false);
});

test('reloads only once after an accepted update', () => {
  assert.equal(shouldReloadAfterUpdate({ updateAccepted: false, reloadStarted: false }), false);
  assert.equal(shouldReloadAfterUpdate({ updateAccepted: true, reloadStarted: false }), true);
  assert.equal(shouldReloadAfterUpdate({ updateAccepted: true, reloadStarted: true }), false);
});
