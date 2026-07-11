'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { nextMessageNavIndex } = require('../lib/navigation.js');

test('moves through message navigation without passing either end', () => {
  assert.equal(nextMessageNavIndex(2, 5, 'ArrowDown'), 3);
  assert.equal(nextMessageNavIndex(2, 5, 'ArrowUp'), 1);
  assert.equal(nextMessageNavIndex(0, 5, 'ArrowUp'), 0);
  assert.equal(nextMessageNavIndex(4, 5, 'ArrowDown'), 4);
});

test('jumps to the first and last virtual navigation item', () => {
  assert.equal(nextMessageNavIndex(3, 5, 'Home'), 0);
  assert.equal(nextMessageNavIndex(1, 5, 'End'), 4);
  assert.equal(nextMessageNavIndex(0, 0, 'End'), -1);
  assert.equal(nextMessageNavIndex(0, 5, 'PageDown'), -1);
});
