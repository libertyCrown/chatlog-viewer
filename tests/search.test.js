'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { normalizeForSearch } = require('../lib/search.js');

test('normalizes NFKC variants for search comparisons', () => {
  assert.equal(normalizeForSearch('ＡＢＣ １２３'), 'abc 123');
  assert.equal(normalizeForSearch('Cafe\u0301'), normalizeForSearch('Café'));
  assert.equal(normalizeForSearch(null), '');
});
