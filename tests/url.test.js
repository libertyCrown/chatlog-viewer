'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { safeUrl } = require('../lib/url.js');

test('allows safe web, mail, and local-reference URLs', () => {
  const base = 'https://example.com/viewer/index.html';

  assert.equal(safeUrl('https://example.org/log.md', base), 'https://example.org/log.md');
  assert.equal(safeUrl('mailto:hello@example.org', base), 'mailto:hello@example.org');
  assert.equal(safeUrl('../logs/chat.md', base), '../logs/chat.md');
  assert.equal(safeUrl('#message-2', base), '#message-2');
});

test('rejects unsafe protocols and protocol-relative URLs', () => {
  const base = 'https://example.com/viewer/index.html';

  assert.equal(safeUrl('javascript:alert(1)', base), '');
  assert.equal(safeUrl('data:text/html,unsafe', base), '');
  assert.equal(safeUrl('//example.org/log.md', base), '');
});
