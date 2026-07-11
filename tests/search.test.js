'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const {
  collectSearchResults,
  filterMessages,
  findNormalizedMatches,
  nextSearchIndex,
  normalizeForSearch
} = require('../lib/search.js');

test('normalizes NFKC variants for search comparisons', () => {
  assert.equal(normalizeForSearch('ＡＢＣ １２３'), 'abc 123');
  assert.equal(normalizeForSearch('Cafe\u0301'), normalizeForSearch('Café'));
  assert.equal(normalizeForSearch(null), '');
});

test('finds normal, case-insensitive, and NFKC-normalized matches', () => {
  assert.equal(findNormalizedMatches('Alpha alpha', 'ALPHA').length, 2);
  assert.deepEqual(findNormalizedMatches('ＡＢＣ and ABC', 'abc'), [
    { start: 0, end: 3 },
    { start: 8, end: 11 }
  ]);
  assert.equal(findNormalizedMatches('Cafe\u0301', 'Café').length, 1);
});

test('collects multiple matches, including code-like text', () => {
  const messages = [
    { id: 'message-1', speakerId: 'speaker-1', plain: 'needle needle' },
    { id: 'message-2', speakerId: 'speaker-2', plain: 'const needle = true;' }
  ];

  const results = collectSearchResults(messages, 'needle');
  assert.equal(results.length, 3);
  assert.deepEqual(results.map((result) => result.messageId), ['message-1', 'message-1', 'message-2']);
});

test('collects many matches from one long code-style message', () => {
  const plain = Array.from({ length: 1200 }, (_, index) => `const value${index} = needle;`).join('\n');
  const results = collectSearchResults([{ id: 'message-code', speakerId: 'speaker-1', plain }], 'needle');

  assert.equal(results.length, 1200);
  assert.equal(results[0].messageId, 'message-code');
  assert.equal(results.at(-1).occurrence, 1199);
});

test('combines speaker filtering with the matching-message-only option', () => {
  const messages = [
    { id: 'message-1', speakerId: 'speaker-1' },
    { id: 'message-2', speakerId: 'speaker-2' },
    { id: 'message-3', speakerId: 'speaker-2' }
  ];
  const matching = new Set(['message-2']);

  assert.deepEqual(filterMessages(messages, { matchingMessageIds: matching }).map((message) => message.id), ['message-1', 'message-2', 'message-3']);
  assert.deepEqual(filterMessages(messages, { speakerId: 'speaker-2' }).map((message) => message.id), ['message-2', 'message-3']);
  assert.deepEqual(filterMessages(messages, { speakerId: 'speaker-2', matchOnly: true, matchingMessageIds: matching }).map((message) => message.id), ['message-2']);
  assert.deepEqual(filterMessages(messages, { matchOnly: true, matchingMessageIds: new Set() }), []);
});

test('cycles previous and next search positions and handles empty results', () => {
  assert.equal(nextSearchIndex(-1, 3, 1), 0);
  assert.equal(nextSearchIndex(-1, 3, -1), 2);
  assert.equal(nextSearchIndex(2, 3, 1), 0);
  assert.equal(nextSearchIndex(0, 3, -1), 2);
  assert.equal(nextSearchIndex(-1, 0, 1), -1);
});
