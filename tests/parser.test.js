'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const {
  canonicalSpeakerKey,
  findMessageMarkers,
  parseChatMarkdown,
  semanticRoleFor
} = require('../lib/parser.js');

test('parses the standard Prompt / Response format', () => {
  const doc = parseChatMarkdown(`## Prompt:\n\nQuestion\n\n## Response:\n\nAnswer\n\n## Prompt:\n\nFollow-up\n\n## Response:\n\nFinal answer`, 'chat.md', 'utf-8');

  assert.equal(doc.parsedAsChat, true);
  assert.equal(doc.messages.length, 4);
  assert.deepEqual(doc.messages.map((message) => message.role), ['prompt', 'response', 'prompt', 'response']);
  assert.equal(doc.turns, 2);
});

test('parses the User / Assistant format', () => {
  const doc = parseChatMarkdown(`## User:\n\nHello\n\n## Assistant:\n\nHi there`, 'chat.md', 'utf-8');

  assert.equal(doc.parsedAsChat, true);
  assert.deepEqual(doc.messages.map((message) => message.role), ['user', 'assistant']);
  assert.deepEqual(doc.participants.map((participant) => participant.id), ['speaker-1', 'speaker-2']);
});

test('ignores ## User: inside a backtick fenced code block', () => {
  const doc = parseChatMarkdown(`## Prompt:\n\nShow an example.\n\n## Response:\n\n\`\`\`md\n## User:\nThis is code, not a message.\n\`\`\`\n\nDone.`, 'chat.md', 'utf-8');

  assert.equal(doc.messages.length, 2);
  assert.match(doc.messages[1].raw, /## User:/);
  assert.match(doc.messages[1].plain, /## User:/);
});

test('ignores ## Response: inside a tilde fenced code block', () => {
  const doc = parseChatMarkdown(`## User:\n\nQuestion\n\n## Assistant:\n\n~~~text\n## Response:\nnot a marker\n~~~\n\nAnswer`, 'chat.md', 'utf-8');

  assert.equal(doc.messages.length, 2);
  assert.match(doc.messages[1].raw, /## Response:/);
});

test('keeps a custom speaker between known roles', () => {
  const doc = parseChatMarkdown(`## User:\n\nQuestion\n\n## 編集者:\n\nNote\n\n## Assistant:\n\nAnswer`, 'chat.md', 'utf-8');

  assert.equal(doc.messages.length, 3);
  assert.deepEqual(doc.messages.map((message) => message.speaker), ['User', '編集者', 'Assistant']);
  assert.equal(doc.messages[1].semanticRole, 'participant');
  assert.equal(new Set(doc.messages.map((message) => message.speakerId)).size, 3);
});

test('assigns different speaker IDs to different Japanese participant names', () => {
  const doc = parseChatMarkdown(`## 太郎:\n\nこんにちは\n\n## 花子:\n\nこんばんは\n\n## 太郎:\n\n続き\n\n## 花子:\n\n返答`, 'chat.md', 'utf-8');

  assert.equal(doc.parsedAsChat, true);
  assert.equal(doc.participants.length, 2);
  assert.notEqual(doc.participants[0].id, doc.participants[1].id);
  assert.deepEqual(doc.messages.map((message) => message.speakerId), ['speaker-1', 'speaker-2', 'speaker-1', 'speaker-2']);
});

test('keeps ordinary Markdown as a document', () => {
  const doc = parseChatMarkdown(`# Notes\n\n## Overview:\n\nA normal section.\n\n## Details:\n\nMore document text.\n\n## Appendix:\n\nReference material.`, 'notes.md', 'utf-8');

  assert.equal(doc.parsedAsChat, false);
  assert.equal(doc.messages.length, 1);
  assert.match(doc.messages[0].raw, /## Overview:/);
});

test('preserves searchable long-form Markdown content inside messages', () => {
  const doc = parseChatMarkdown(`## Prompt:\n\nPlease inspect this.\n\n## Response:\n\n> quoted text\n\n- first item\n- second item\n\n| Name | Value |\n| --- | --- |\n| alpha | beta |\n\n\`\`\`json\n{ "error": "example" }\n\`\`\``, 'long.md', 'utf-8');

  assert.equal(doc.messages.length, 2);
  assert.match(doc.messages[1].plain, /quoted text/);
  assert.match(doc.messages[1].plain, /alpha/);
  assert.match(doc.messages[1].plain, /beta/);
  assert.match(doc.messages[1].plain, /"error": "example"/);
});

test('does not retain duplicate normalized or navigation text for every message', () => {
  const doc = parseChatMarkdown('## Prompt:\n\nHello 👋\n\n## Response:\n\nWorld', 'memory.md', 'utf-8');

  assert.equal('searchText' in doc.messages[0], false);
  assert.equal('navExcerpt' in doc.messages[0], false);
  assert.equal(doc.messages[0].chars, 7);
});

test('normalizes speaker identity separately from display names', () => {
  assert.equal(canonicalSpeakerKey(' ＡＬＩＣＥ　'), 'alice');
  assert.equal(semanticRoleFor('Prompt'), 'prompt');
  assert.equal(semanticRoleFor('太郎'), 'participant');
  assert.equal(findMessageMarkers('## Prompt:\n\nA\n\n## Response:\n\nB').length, 2);
});
