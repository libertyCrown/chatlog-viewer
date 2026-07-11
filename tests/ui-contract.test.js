'use strict';

const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const styles = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');

test('uses navigation and close-log wording in both languages', () => {
  assert.match(app, /sidebarTitle: 'Navigation'/);
  assert.match(app, /sidebarTitle: 'ナビゲーション'/);
  assert.match(app, /closeDocument: 'Close log'/);
  assert.match(app, /closeDocument: 'ログを閉じる'/);
  assert.doesNotMatch(app, /sidebarTitle: 'Library'/);
  assert.doesNotMatch(html, /ResetDocument|resetDocument|button-danger/);
});

test('gives each empty-state file action a distinct, concise label', () => {
  assert.match(app, /emptyTitle: 'Open a chat log'/);
  assert.match(app, /emptyTitle: 'チャットログを開く'/);
  assert.match(app, /chooseFile: 'ファイルを選択'/);
  assert.doesNotMatch(app, /emptyTitle: 'Markdown\\u200Bチャットログを開く'/);
});

test('allows same-site relative Markdown URLs through native form validation', () => {
  assert.match(html, /id="urlInput" type="text" inputmode="url"/);
});

test('matches each file-drop visual with its actual drop target', () => {
  assert.match(html, /id="dropOverlay"/);
  assert.match(app, /window\.addEventListener\('drop', handleFileDrop\)/);
  assert.match(app, /els\.emptyDropZone\.addEventListener\('drop', handleFileDrop\)/);
  assert.match(app, /!document\.querySelector\('dialog\[open\]'\)/);
  assert.match(app, /event\.currentTarget === els\.emptyDropZone/);
  assert.match(app, /els\.dropOverlay\.hidden = !isDocumentDrop/);
  assert.match(app, /if \(file\) loadFile\(file\)/);
});

test('keeps transient notifications from covering the update prompt', () => {
  assert.match(styles, /\.toast\s*\{[\s\S]*?bottom:\s*16px;[\s\S]*?z-index:\s*40;/);
  assert.match(styles, /\.update-notice\s*\{[\s\S]*?bottom:\s*72px;[\s\S]*?z-index:\s*35;/);
});
