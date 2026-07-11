'use strict';

const STORAGE = {
  language: 'chatlog-viewer.language',
  theme: 'chatlog-viewer.theme',
  density: 'chatlog-viewer.density',
  encoding: 'chatlog-viewer.encoding',
  sidebarCollapsed: 'chatlog-viewer.sidebarCollapsed'
};

const LOCALES = {
  en: { label: 'English', dir: 'ltr' },
  ja: { label: '日本語', dir: 'ltr' }
};

const I18N = {
  en: {
    brandSubtitle: 'Local Markdown reader',
    aboutApp: 'About ChatLog Viewer',
    aboutLine1: 'A lightweight local viewer for',
    aboutLine2: 'reviewing chat logs saved',
    aboutLine3: 'as Markdown.',
    appVersion: 'Version {version}',
    viewOnGitHub: 'View on GitHub',
    updateAvailableTitle: 'A new version is ready',
    updateAvailableBody: 'Updating closes the current local Markdown view, but never changes or deletes the original file.',
    updateNow: 'Update',
    updateLater: 'Later',
    updateApplying: 'Updating...',
    openFile: 'Open Markdown',
    install: 'Install',
    language: 'Language',
    theme: 'Theme',
    quickActions: 'Quick actions',
    advancedSettings: 'Advanced settings',
    showSidebar: 'Show sidebar',
    hideSidebar: 'Collapse sidebar',
    dropTitle: 'Drop Markdown',
    dropOr: 'or',
    chooseFile: 'choose a file',
    encoding: 'Encoding',
    density: 'Density',
    displayMode: 'Display',
    comfortable: 'Comfortable',
    compact: 'Compact',
    chat: 'Chat',
    urlLabel: 'Markdown URL',
    loadUrl: 'Load',
    messages: 'Messages',
    turns: 'Turns',
    characters: 'Chars',
    ready: 'Ready',
    search: 'Search',
    searchResults: 'Search results: {shown}',
    searchPosition: 'Search results: {current} / {total}',
    visibleResults: 'Showing: {shown} / {total}',
    searchResultsEmpty: 'Search results: 0',
    showMatchesOnly: 'Show matching messages only',
    previousResult: 'Previous result',
    nextResult: 'Next result',
    role: 'Role',
    all: 'All',
    prompt: 'Prompt',
    response: 'Response',
    assistant: 'Assistant',
    system: 'System',
    developer: 'Developer',
    tool: 'Tool',
    clear: 'Clear',
    resetFilters: 'Reset filters',
    emptyTitle: 'Open a Markdown chat log',
    emptyBody: 'Files stay in this browser.',
    emptyFormats: 'ChatGPT Markdown / plain Markdown',
    openSource: 'Open source',
    showLogInfo: 'Show log info',
    resetDocument: 'Reset loaded Markdown',
    resetConfirmTitle: 'Reset the loaded Markdown?',
    resetConfirmBody: 'The current log will close and the start screen will be shown. The original file will not be deleted.',
    resetDocumentConfirm: 'Reset',
    resetComplete: 'Loaded Markdown reset',
    cancel: 'Cancel',
    close: 'Close',
    noMatches: 'No matches',
    menu: 'Menu',
    closeMenu: 'Close menu',
    sidebarTitle: 'Library',
    messageList: 'Messages',
    conversation: 'Conversation',
    source: 'Source',
    user: 'User',
    created: 'Created',
    updated: 'Updated',
    exported: 'Exported',
    link: 'Link',
    titleUntitled: 'Untitled',
    turn: 'Turn {n}',
    copied: 'Copied',
    copy: 'Copy',
    copyMessage: 'Copy {speaker}, {turn}',
    loadedFile: 'Loaded: {name}',
    loadedUrl: 'Loaded URL',
    decodeUsed: 'Encoding: {encoding}',
    parseFallback: 'Loaded as plain Markdown',
    fetchFailed: 'Could not load that URL. Check CORS or serve the file over HTTP/HTTPS.',
    fileFailed: 'Could not open that file',
    noFile: 'No file selected',
    unsupportedUrl: 'Use http, https, or a relative URL served over HTTP/HTTPS',
    installReady: 'Install is available',
    installed: 'Installed',
    themeSystem: 'System',
    themeLight: 'Light',
    themeDark: 'Dark',
    countLabel: '{n} chars'
  },
  ja: {
    brandSubtitle: 'ローカルMarkdownリーダー',
    aboutApp: 'このアプリについて',
    aboutLine1: 'Markdown形式で保存された',
    aboutLine2: 'チャットログを読み返すための',
    aboutLine3: '軽量なローカルビューアです。',
    appVersion: 'バージョン {version}',
    viewOnGitHub: 'GitHubで見る',
    updateAvailableTitle: '新しいバージョンがあります',
    updateAvailableBody: '更新すると、現在表示中のローカルMarkdownは閉じます。元のファイル自体は変更・削除されません。',
    updateNow: '更新する',
    updateLater: '後で',
    updateApplying: '更新しています…',
    openFile: 'Markdownを開く',
    install: 'インストール',
    language: '言語',
    theme: 'テーマ',
    quickActions: 'クイック操作',
    advancedSettings: '詳細設定',
    showSidebar: 'サイドバーを表示',
    hideSidebar: 'サイドバーを畳む',
    dropTitle: 'Markdownをドロップ',
    dropOr: 'または',
    chooseFile: 'ファイル選択',
    encoding: '文字コード',
    density: '表示方法',
    displayMode: '表示方法',
    comfortable: '標準',
    compact: 'コンパクト',
    chat: 'チャット',
    urlLabel: 'Markdown URL',
    loadUrl: '読込',
    messages: 'メッセージ',
    turns: '往復',
    characters: '文字',
    ready: '待機中',
    search: '検索',
    searchResults: '検索結果: {shown}件',
    searchPosition: '検索結果: {current} / {total}',
    visibleResults: '表示中: {shown} / {total}',
    searchResultsEmpty: '検索結果: 0',
    showMatchesOnly: '一致した発言だけ表示',
    previousResult: '前の検索結果',
    nextResult: '次の検索結果',
    role: '種類',
    all: 'すべて',
    prompt: 'Prompt',
    response: 'Response',
    assistant: 'Assistant',
    system: 'System',
    developer: 'Developer',
    tool: 'Tool',
    clear: 'クリア',
    resetFilters: '検索条件をリセット',
    emptyTitle: 'Markdown\u200Bチャットログを開く',
    emptyBody: 'ファイルはこのブラウザ内で\u200B処理されます。',
    emptyFormats: 'ChatGPT Markdown / 通常Markdown',
    openSource: '元リンクを開く',
    showLogInfo: 'ログ情報を表示',
    resetDocument: '読み込みをリセット',
    resetConfirmTitle: '読み込み中のMarkdownをリセットしますか？',
    resetConfirmBody: '表示中のログを閉じて、最初の画面に戻ります。元のファイルは削除されません。',
    resetDocumentConfirm: 'リセット',
    resetComplete: '読み込みをリセットしました',
    cancel: 'キャンセル',
    close: '閉じる',
    noMatches: '一致なし',
    menu: 'メニュー',
    closeMenu: 'メニューを閉じる',
    sidebarTitle: 'ライブラリ',
    messageList: '発言一覧',
    conversation: '会話本文',
    source: '読込元',
    user: 'ユーザー',
    created: '作成',
    updated: '更新',
    exported: '出力',
    link: 'リンク',
    titleUntitled: '無題',
    turn: '{n}往復目',
    copied: 'コピーしました',
    copy: 'コピー',
    copyMessage: '{speaker}の{turn}をコピー',
    loadedFile: '読み込み完了: {name}',
    loadedUrl: 'URLを読み込みました',
    decodeUsed: '文字コード: {encoding}',
    parseFallback: '通常のMarkdownとして読み込みました',
    fetchFailed: 'URLを読み込めませんでした。CORS制限、またはHTTP/HTTPS配信かを確認してください',
    fileFailed: 'ファイルを開けませんでした',
    noFile: 'ファイルが選択されていません',
    unsupportedUrl: 'http、https、またはHTTP/HTTPS上の相対URLを指定してください',
    installReady: 'インストールできます',
    installed: 'インストール済み',
    themeSystem: 'システム',
    themeLight: 'ライト',
    themeDark: 'ダーク',
    countLabel: '{n}文字'
  }
};

const { parseChatMarkdown } = globalThis.ChatLogParser;
const {
  collectSearchResults,
  filterMessages,
  findNormalizedMatches,
  nextSearchIndex,
  normalizeForSearch
} = globalThis.ChatLogSearch;
const { safeUrl: safeUrlForBase } = globalThis.ChatLogUrl;
const APP_VERSION = globalThis.ChatLogViewerVersion;
const { shouldOfferUpdate, shouldReloadAfterUpdate } = globalThis.ChatLogPwaUpdate;
const { nextMessageNavIndex } = globalThis.ChatLogNavigation;

const els = {
  html: document.documentElement,
  body: document.body,
  topbar: document.getElementById('topbar'),
  aboutAppBtn: document.getElementById('aboutAppBtn'),
  aboutDialog: document.getElementById('aboutDialog'),
  aboutVersion: document.getElementById('aboutVersion'),
  closeAboutDialogBtn: document.getElementById('closeAboutDialogBtn'),
  sidebarRail: document.getElementById('sidebarRail'),
  sidebar: document.getElementById('sidebar'),
  sidebarContent: document.getElementById('sidebarContent'),
  sidebarToggleBtn: document.getElementById('sidebarToggleBtn'),
  sidebarExpandBtn: document.getElementById('sidebarExpandBtn'),
  sidebarCollapseBtn: document.getElementById('sidebarCollapseBtn'),
  drawerOpenFileBtn: document.getElementById('drawerOpenFileBtn'),
  sidebarCloseBtn: document.getElementById('sidebarCloseBtn'),
  sidebarScrim: document.getElementById('sidebarScrim'),
  railSearchBtn: document.getElementById('railSearchBtn'),
  openFileBtn: document.getElementById('openFileBtn'),
  topResetDocumentBtn: document.getElementById('topResetDocumentBtn'),
  installBtn: document.getElementById('installBtn'),
  drawerInstallBtn: document.getElementById('drawerInstallBtn'),
  fileInput: document.getElementById('fileInput'),
  emptyDropZone: document.getElementById('emptyDropZone'),
  emptyOpenFileBtn: document.getElementById('emptyOpenFileBtn'),
  encodingSelect: document.getElementById('encodingSelect'),
  densitySelect: document.getElementById('densitySelect'),
  languageSelect: document.getElementById('languageSelect'),
  drawerLanguageSelect: document.getElementById('drawerLanguageSelect'),
  urlForm: document.getElementById('urlForm'),
  urlInput: document.getElementById('urlInput'),
  searchInput: document.getElementById('searchInput'),
  searchClearInlineBtn: document.getElementById('searchClearInlineBtn'),
  resultLine: document.getElementById('resultLine'),
  prevResultBtn: document.getElementById('prevResultBtn'),
  nextResultBtn: document.getElementById('nextResultBtn'),
  roleFilter: document.getElementById('roleFilter'),
  clearSearchBtn: document.getElementById('clearSearchBtn'),
  matchOnlyToggle: document.getElementById('matchOnlyToggle'),
  messageList: document.getElementById('messageList'),
  emptyState: document.getElementById('emptyState'),
  documentView: document.getElementById('documentView'),
  sourceLabel: document.getElementById('sourceLabel'),
  docTitle: document.getElementById('docTitle'),
  sourceLink: document.getElementById('sourceLink'),
  resetDocumentDialog: document.getElementById('resetDocumentDialog'),
  cancelResetDocumentBtn: document.getElementById('cancelResetDocumentBtn'),
  confirmResetDocumentBtn: document.getElementById('confirmResetDocumentBtn'),
  metaDetails: document.getElementById('metaDetails'),
  metaGrid: document.getElementById('metaGrid'),
  conversation: document.getElementById('conversation'),
  emptyResults: document.getElementById('emptyResults'),
  reader: document.getElementById('reader'),
  statMessages: document.getElementById('statMessages'),
  statTurns: document.getElementById('statTurns'),
  statChars: document.getElementById('statChars'),
  statusLine: document.getElementById('statusLine'),
  toast: document.getElementById('toast'),
  updateNotice: document.getElementById('updateNotice'),
  updateNowBtn: document.getElementById('updateNowBtn'),
  updateLaterBtn: document.getElementById('updateLaterBtn')
};

const state = {
  lang: initialLanguage(),
  theme: localStorage.getItem(STORAGE.theme) || 'system',
  density: localStorage.getItem(STORAGE.density) || 'comfortable',
  encoding: localStorage.getItem(STORAGE.encoding) || 'auto',
  doc: null,
  query: '',
  normalizedQuery: '',
  role: 'all',
  searchResults: [],
  matchingMessageIds: new Set(),
  showMatchesOnly: false,
  searchIndex: -1,
  deferredInstallPrompt: null,
  activeId: null,
  sidebarCollapsed: localStorage.getItem(STORAGE.sidebarCollapsed) === 'true',
  drawerOpen: false,
  serviceWorkerRegistration: null,
  updateNoticeDismissed: false,
  updateAccepted: false,
  updateReloadStarted: false,
  renderedDoc: null,
  renderedLanguage: null,
  renderedNavKey: '',
  renderedVisibilityKey: '',
  highlightedQuery: '',
  highlightedMessageIds: new Set()
};

let searchTimer = null;
let activeObserver = null;
const NAV_ITEM_HEIGHT = 88;
const NAV_ITEM_GAP = 8;
const NAV_ROW_HEIGHT = NAV_ITEM_HEIGHT + NAV_ITEM_GAP;
const NAV_OVERSCAN = 8;
const NAV_VIRTUAL_THRESHOLD = 120;
const NAV_EXCERPT_LENGTH = 180;
const navState = {
  messages: [],
  virtual: false,
  start: -1,
  end: -1,
  frame: null
};

const dialogReturnFocus = new Map();
const DRAWER_FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
let numberFormatter = null;
let numberFormatterLanguage = '';

function initialLanguage() {
  const stored = localStorage.getItem(STORAGE.language);
  if (stored && LOCALES[stored] && I18N[stored]) return stored;
  const found = navigator.languages?.find((lang) => LOCALES[lang.toLowerCase().split('-')[0]] && I18N[lang.toLowerCase().split('-')[0]]);
  return found ? found.toLowerCase().split('-')[0] : 'en';
}

function t(key, vars = {}) {
  let value = I18N[state.lang][key] || I18N.en[key] || key;
  Object.entries(vars).forEach(([name, replacement]) => {
    value = value.replaceAll(`{${name}}`, String(replacement));
  });
  return value;
}

function applyI18n() {
  els.html.lang = state.lang;
  els.html.dir = LOCALES[state.lang]?.dir || 'ltr';
  populateLanguageOptions();
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-attr]').forEach((node) => {
    node.dataset.i18nAttr.split(';').forEach((pair) => {
      const [attr, key] = pair.split(':').map((part) => part.trim());
      if (attr && key) node.setAttribute(attr, t(key));
    });
  });
  document.querySelectorAll('[data-theme-choice="system"]').forEach((button) => {
    button.title = t('themeSystem');
    button.setAttribute('aria-label', t('themeSystem'));
  });
  document.querySelectorAll('[data-theme-choice="light"]').forEach((button) => {
    button.title = t('themeLight');
    button.setAttribute('aria-label', t('themeLight'));
  });
  document.querySelectorAll('[data-theme-choice="dark"]').forEach((button) => {
    button.title = t('themeDark');
    button.setAttribute('aria-label', t('themeDark'));
  });
  els.aboutVersion.textContent = t('appVersion', { version: APP_VERSION.value });
  if (!state.doc) setStatus(t('ready'));
  if (state.doc) updateRoleFilter(state.doc);
  render();
}

function populateLanguageOptions() {
  const options = Object.entries(LOCALES)
    .map(([code, locale]) => `<option value="${escapeHtml(code)}">${escapeHtml(locale.label)}</option>`)
    .join('');
  [els.languageSelect, els.drawerLanguageSelect].forEach((select) => {
    select.innerHTML = options;
    select.value = state.lang;
  });
}

function applyTheme() {
  els.html.dataset.theme = state.theme;
  document.querySelectorAll('[data-theme-choice]').forEach((button) => {
    const selected = button.dataset.themeChoice === state.theme;
    button.classList.toggle('is-active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
}

function applyDensity() {
  els.reader.classList.toggle('compact', state.density === 'compact');
  els.reader.classList.toggle('chat', state.density === 'chat');
}

function setStatus(message) {
  els.statusLine.textContent = message;
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.hidden = false;
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    els.toast.hidden = true;
  }, 2200);
}

function init() {
  els.encodingSelect.value = state.encoding;
  els.densitySelect.value = state.density;
  applyTheme();
  applyDensity();
  setDrawerOpen(false);
  setSidebarCollapsed(state.sidebarCollapsed);
  resetSearchState();
  applyI18n();
  updateRoleFilter(null);
  bindEvents();
  registerServiceWorker();
}

function bindEvents() {
  els.aboutAppBtn.addEventListener('click', showAboutDialog);
  els.closeAboutDialogBtn.addEventListener('click', () => {
    closeDialog(els.aboutDialog);
  });
  els.aboutDialog.addEventListener('click', (event) => {
    if (event.target === els.aboutDialog) closeDialog(els.aboutDialog);
  });

  els.sidebarToggleBtn.addEventListener('click', () => setDrawerOpen(!state.drawerOpen));
  els.sidebarCloseBtn.addEventListener('click', () => setDrawerOpen(false));
  els.sidebarScrim.addEventListener('click', () => setDrawerOpen(false));
  els.sidebarCollapseBtn.addEventListener('click', () => setSidebarCollapsed(true));
  els.sidebarExpandBtn.addEventListener('click', () => setSidebarCollapsed(false));
  els.drawerOpenFileBtn.addEventListener('click', openFile);
  els.railSearchBtn.addEventListener('click', () => {
    setSidebarCollapsed(false);
    requestAnimationFrame(() => els.searchInput.focus());
  });
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Tab' && state.drawerOpen && trapDrawerFocus(event)) return;
    if (event.key === 'Escape' && state.drawerOpen) setDrawerOpen(false);
    if (event.key === 'Enter' && document.activeElement === els.searchInput) {
      event.preventDefault();
      clearTimeout(searchTimer);
      const nextQuery = els.searchInput.value.trim();
      if (state.query !== nextQuery) {
        state.query = nextQuery;
        state.searchIndex = -1;
        updateSearchResults();
        render();
      }
      jumpSearchResult(event.shiftKey ? -1 : 1);
    }
  });
  window.addEventListener('resize', () => {
    if (!isDrawerMode()) setDrawerOpen(false);
    setSidebarCollapsed(state.sidebarCollapsed);
    scheduleRenderMessageNavWindow();
  });
  els.sidebarContent.addEventListener('scroll', scheduleRenderMessageNavWindow, { passive: true });

  els.openFileBtn.addEventListener('click', openFile);
  els.topResetDocumentBtn.addEventListener('click', requestResetDocument);
  els.emptyOpenFileBtn.addEventListener('click', openFile);
  els.fileInput.addEventListener('change', () => {
    const [file] = els.fileInput.files || [];
    if (file) loadFile(file);
    else setStatus(t('noFile'));
    els.fileInput.value = '';
  });

  [els.emptyDropZone].forEach((zone) => {
    ['dragenter', 'dragover'].forEach((eventName) => {
      zone.addEventListener(eventName, (event) => {
        event.preventDefault();
        zone.classList.add('is-dragging');
      });
    });

    ['dragleave', 'drop'].forEach((eventName) => {
      zone.addEventListener(eventName, (event) => {
        event.preventDefault();
        zone.classList.remove('is-dragging');
      });
    });

    zone.addEventListener('drop', (event) => {
      const [file] = event.dataTransfer.files || [];
      if (file) loadFile(file);
    });
  });

  els.encodingSelect.addEventListener('change', () => {
    state.encoding = els.encodingSelect.value;
    localStorage.setItem(STORAGE.encoding, state.encoding);
  });

  els.densitySelect.addEventListener('change', () => {
    state.density = els.densitySelect.value;
    localStorage.setItem(STORAGE.density, state.density);
    applyDensity();
  });

  [els.languageSelect, els.drawerLanguageSelect].forEach((select) => {
    select.addEventListener('change', () => {
      state.lang = select.value;
      localStorage.setItem(STORAGE.language, state.lang);
      applyI18n();
    });
  });

  document.querySelectorAll('[data-theme-choice]').forEach((button) => {
    button.addEventListener('click', () => {
      state.theme = button.dataset.themeChoice;
      localStorage.setItem(STORAGE.theme, state.theme);
      applyTheme();
    });
  });

  els.urlForm.addEventListener('submit', (event) => {
    event.preventDefault();
    loadUrl(els.urlInput.value.trim());
  });

  els.searchInput.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.query = els.searchInput.value.trim();
      state.searchIndex = -1;
      updateSearchResults();
      render();
    }, 150);
  });
  els.searchClearInlineBtn.addEventListener('click', () => clearSearch());
  els.prevResultBtn.addEventListener('click', () => jumpSearchResult(-1));
  els.nextResultBtn.addEventListener('click', () => jumpSearchResult(1));

  els.roleFilter.addEventListener('change', () => {
    state.role = els.roleFilter.value;
    state.searchIndex = -1;
    render();
  });

  els.matchOnlyToggle.addEventListener('change', () => {
    state.showMatchesOnly = els.matchOnlyToggle.checked;
    state.searchIndex = -1;
    render();
  });

  els.clearSearchBtn.addEventListener('click', () => {
    clearSearch({ resetRole: true });
  });

  els.messageList.addEventListener('click', (event) => {
    const button = event.target.closest('[data-message-id]');
    if (!button) return;
    const target = document.getElementById(button.dataset.messageId);
    if (target) target.scrollIntoView({ behavior: scrollBehavior(), block: 'start' });
    setActiveMessage(button.dataset.messageId);
    setDrawerOpen(false);
  });
  els.messageList.addEventListener('keydown', handleMessageListKeydown);

  els.conversation.addEventListener('click', (event) => {
    const button = event.target.closest('[data-copy-id]');
    if (!button || !state.doc) return;
    const message = state.doc.messages.find((item) => item.id === button.dataset.copyId);
    if (message) copyText(message.raw);
  });

  els.cancelResetDocumentBtn.addEventListener('click', () => {
    closeDialog(els.resetDocumentDialog);
  });
  els.confirmResetDocumentBtn.addEventListener('click', () => {
    resetLoadedDocument();
    closeDialog(els.resetDocumentDialog, els.emptyOpenFileBtn);
  });
  els.resetDocumentDialog.addEventListener('click', (event) => {
    if (event.target === els.resetDocumentDialog) closeDialog(els.resetDocumentDialog);
  });
  [els.aboutDialog, els.resetDocumentDialog].forEach((dialog) => {
    dialog.addEventListener('close', () => restoreDialogFocus(dialog));
  });

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    state.deferredInstallPrompt = event;
    els.installBtn.hidden = false;
    els.drawerInstallBtn.hidden = false;
    setStatus(t('installReady'));
  });

  els.installBtn.addEventListener('click', promptInstall);
  els.drawerInstallBtn.addEventListener('click', promptInstall);
  els.updateNowBtn.addEventListener('click', acceptServiceWorkerUpdate);
  els.updateLaterBtn.addEventListener('click', dismissServiceWorkerUpdate);

  window.addEventListener('appinstalled', () => {
    els.installBtn.hidden = true;
    els.drawerInstallBtn.hidden = true;
    showToast(t('installed'));
  });
}

function showAboutDialog() {
  showDialog(els.aboutDialog, els.aboutAppBtn, els.closeAboutDialogBtn);
}

function showDialog(dialog, opener, initialFocus) {
  if (typeof dialog.showModal !== 'function') return false;
  dialogReturnFocus.set(dialog, opener || document.activeElement);
  dialog.showModal();
  requestAnimationFrame(() => {
    if (dialog.open && initialFocus?.isConnected) initialFocus.focus({ preventScroll: true });
  });
  return true;
}

function closeDialog(dialog, returnFocus) {
  if (!dialog.open) return;
  if (returnFocus) dialogReturnFocus.set(dialog, returnFocus);
  dialog.close();
}

function restoreDialogFocus(dialog) {
  const target = dialogReturnFocus.get(dialog);
  dialogReturnFocus.delete(dialog);
  if (target?.isConnected && !target.hidden) target.focus({ preventScroll: true });
}

function showServiceWorkerUpdate(registration) {
  if (!shouldOfferUpdate({
    hasWaitingWorker: Boolean(registration?.waiting),
    hasController: Boolean(navigator.serviceWorker?.controller),
    dismissed: state.updateNoticeDismissed
  })) return;

  state.serviceWorkerRegistration = registration;
  els.updateNowBtn.disabled = false;
  els.updateLaterBtn.disabled = false;
  els.updateNotice.hidden = false;
  setStatus(t('updateAvailableTitle'));
}

function dismissServiceWorkerUpdate() {
  state.updateNoticeDismissed = true;
  els.updateNotice.hidden = true;
}

function acceptServiceWorkerUpdate() {
  const waitingWorker = state.serviceWorkerRegistration?.waiting;
  if (!waitingWorker) return;

  state.updateAccepted = true;
  els.updateNowBtn.disabled = true;
  els.updateLaterBtn.disabled = true;
  setStatus(t('updateApplying'));
  waitingWorker.postMessage({ type: 'SKIP_WAITING' });
}

async function promptInstall() {
  if (!state.deferredInstallPrompt) return;
  state.deferredInstallPrompt.prompt();
  await state.deferredInstallPrompt.userChoice;
  state.deferredInstallPrompt = null;
  els.installBtn.hidden = true;
  els.drawerInstallBtn.hidden = true;
}

function setDrawerOpen(open) {
  const drawerMode = isDrawerMode();
  open = open && drawerMode;
  state.drawerOpen = open;
  els.sidebar.classList.toggle('is-open', open);
  els.sidebarScrim.hidden = !open;
  els.sidebarScrim.classList.toggle('is-open', open);
  els.body.classList.toggle('sidebar-open', open && drawerMode);
  els.sidebarToggleBtn.setAttribute('aria-expanded', String(open));
  els.sidebar.setAttribute('aria-hidden', String(drawerMode && !open));
  if ('inert' in els.sidebar) {
    els.sidebar.inert = drawerMode && !open;
  }
  setDrawerBackgroundInert(open && drawerMode);

  if (open) {
    els.sidebarCloseBtn.focus({ preventScroll: true });
    scheduleRenderMessageNavWindow();
  } else if (document.activeElement && els.sidebar.contains(document.activeElement)) {
    els.sidebarToggleBtn.focus({ preventScroll: true });
  }
}

function setDrawerBackgroundInert(inert) {
  [els.topbar, els.reader].forEach((element) => {
    element.setAttribute('aria-hidden', String(inert));
    if ('inert' in element) element.inert = inert;
  });
}

function trapDrawerFocus(event) {
  const focusable = [...els.sidebar.querySelectorAll(DRAWER_FOCUSABLE_SELECTOR)]
    .filter((element) => !element.hidden && element.getClientRects().length);
  if (!focusable.length) return false;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  const current = document.activeElement;
  if (event.shiftKey && (current === first || !els.sidebar.contains(current))) {
    event.preventDefault();
    last.focus();
    return true;
  }
  if (!event.shiftKey && (current === last || !els.sidebar.contains(current))) {
    event.preventDefault();
    first.focus();
    return true;
  }
  return false;
}

function scrollBehavior() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
}

function setSidebarCollapsed(collapsed) {
  const canCollapse = !isDrawerMode();
  state.sidebarCollapsed = Boolean(collapsed);
  localStorage.setItem(STORAGE.sidebarCollapsed, String(state.sidebarCollapsed));
  els.body.classList.toggle('sidebar-collapsed', canCollapse && state.sidebarCollapsed);
  if (canCollapse) {
    els.sidebar.setAttribute('aria-hidden', String(state.sidebarCollapsed));
    if ('inert' in els.sidebar) {
      els.sidebar.inert = state.sidebarCollapsed;
    }
    if (state.sidebarCollapsed && els.sidebar.contains(document.activeElement)) {
      els.sidebarExpandBtn.focus({ preventScroll: true });
    }
  } else {
    els.sidebar.setAttribute('aria-hidden', String(!state.drawerOpen));
    if ('inert' in els.sidebar) {
      els.sidebar.inert = !state.drawerOpen;
    }
  }
  scheduleRenderMessageNavWindow();
}

function isDrawerMode() {
  return window.matchMedia('(max-width: 860px)').matches;
}

async function openFile() {
  if ('showOpenFilePicker' in window && window.isSecureContext) {
    try {
      const [handle] = await window.showOpenFilePicker({
        types: [{
          description: 'Markdown',
          accept: { 'text/markdown': ['.md', '.markdown'], 'text/plain': ['.txt'] }
        }],
        multiple: false
      });
      const file = await handle.getFile();
      await loadFile(file);
      return;
    } catch (error) {
      if (error?.name === 'AbortError') return;
      console.warn(error);
    }
  }
  els.fileInput.click();
}

async function loadFile(file) {
  try {
    const buffer = await file.arrayBuffer();
    const decoded = decodeBuffer(buffer, state.encoding);
    const doc = parseChatMarkdown(decoded.text, file.name, decoded.encoding, { untitledTitle: t('titleUntitled') });
    prepareDocument(doc);
    state.doc = doc;
    state.role = 'all';
    state.activeId = null;
    state.renderedDoc = null;
    state.renderedNavKey = '';
    resetSearchState();
    updateRoleFilter(doc);
    render();
    setDrawerOpen(false);
    setStatus(`${t('loadedFile', { name: file.name })} / ${t('decodeUsed', { encoding: decoded.encoding })}`);
  } catch (error) {
    console.error(error);
    setStatus(t('fileFailed'));
    showToast(t('fileFailed'));
  }
}

async function loadUrl(input) {
  if (!input) return;
  let url;
  try {
    url = new URL(input, location.href);
    if (!['http:', 'https:'].includes(url.protocol)) {
      throw new Error('unsupported protocol');
    }
  } catch {
    setStatus(t('unsupportedUrl'));
    showToast(t('unsupportedUrl'));
    return;
  }

  try {
    const response = await fetch(url.href, { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const buffer = await response.arrayBuffer();
    const decoded = decodeBuffer(buffer, state.encoding);
    const name = decodeURIComponent(url.pathname.split('/').pop() || 'remote.md');
    const doc = parseChatMarkdown(decoded.text, name, decoded.encoding, { untitledTitle: t('titleUntitled') });
    prepareDocument(doc);
    state.doc = doc;
    state.role = 'all';
    state.activeId = null;
    state.renderedDoc = null;
    state.renderedNavKey = '';
    resetSearchState();
    updateRoleFilter(state.doc);
    render();
    setDrawerOpen(false);
    setStatus(`${t('loadedUrl')} / ${t('decodeUsed', { encoding: decoded.encoding })}`);
  } catch (error) {
    console.error(error);
    setStatus(t('fetchFailed'));
    showToast(t('fetchFailed'));
  }
}

function decodeBuffer(buffer, requested) {
  const options = requested === 'auto' ? ['utf-8', 'shift_jis', 'euc-jp'] : [requested];
  const candidates = options.map((encoding) => {
    try {
      const text = new TextDecoder(encoding, { fatal: false }).decode(buffer);
      return { encoding, text, score: scoreDecodedText(text) };
    } catch {
      return null;
    }
  }).filter(Boolean);

  candidates.sort((a, b) => a.score - b.score);
  return candidates[0] || { encoding: 'utf-8', text: new TextDecoder().decode(buffer) };
}

function scoreDecodedText(text) {
  const replacement = countMatches(text, /\uFFFD/g) * 120;
  const mojibake = countMatches(text, /(縺|繧|譁|蜿|鬆|蛹|莨|螟|隕|逡|蟆|諤|髢|荳|繝)/g) * 5;
  const control = countMatches(text, /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g) * 80;
  const japanese = countMatches(text, /[\u3040-\u30ff\u3400-\u9fff]/g);
  return replacement + mojibake + control - Math.min(japanese, 1200) * 0.02;
}

function countMatches(text, regex) {
  return (text.match(regex) || []).length;
}

function render() {
  if (!state.doc) {
    activeObserver?.disconnect();
    els.emptyState.hidden = false;
    els.documentView.hidden = true;
    els.topResetDocumentBtn.hidden = true;
    state.renderedDoc = null;
    state.renderedLanguage = null;
    state.renderedNavKey = '';
    state.renderedVisibilityKey = '';
    state.highlightedMessageIds = new Set();
    state.highlightedQuery = '';
    renderStats(null);
    renderResultStatus([]);
    resetMessageNav();
    return;
  }

  const shouldRenderConversation = state.renderedDoc !== state.doc || state.renderedLanguage !== state.lang;
  els.emptyState.hidden = true;
  els.documentView.hidden = false;
  els.topResetDocumentBtn.hidden = false;

  if (shouldRenderConversation) {
    els.docTitle.textContent = state.doc.title;
    els.sourceLabel.textContent = `${state.doc.sourceName} / ${state.doc.encoding}`;
    renderSourceLink();
    renderMeta();
    renderConversation(state.doc.messages);
    state.renderedDoc = state.doc;
    state.renderedLanguage = state.lang;
    state.renderedNavKey = '';
    state.renderedVisibilityKey = '';
    state.highlightedMessageIds = new Set();
    state.highlightedQuery = '';
  }

  const visible = visibleMessages();
  applyMessageVisibility(visible, shouldRenderConversation);
  applySearchHighlights(shouldRenderConversation);
  renderMessageNavIfNeeded(visible);
  renderStats(state.doc);
  renderResultStatus(visible);
  els.emptyResults.hidden = visible.length !== 0;
}

function renderSourceLink() {
  const link = state.doc.meta.link;
  const safe = safeUrl(link);
  if (safe) {
    els.sourceLink.href = safe;
    els.sourceLink.hidden = false;
  } else {
    els.sourceLink.hidden = true;
  }
}

function renderMeta() {
  const entries = [
    ['source', state.doc.sourceName],
    ['user', state.doc.meta.user],
    ['created', state.doc.meta.created],
    ['updated', state.doc.meta.updated],
    ['exported', state.doc.meta.exported]
  ].filter(([, value]) => value);

  els.metaDetails.hidden = entries.length === 0;
  els.metaGrid.innerHTML = entries.map(([key, value]) => `
    <div>
      <dt>${escapeHtml(t(key))}</dt>
      <dd>${escapeHtml(value)}</dd>
    </div>
  `).join('');
}

function updateRoleFilter(doc) {
  const selected = state.role;
  const options = [`<option value="all" data-i18n="all">${escapeHtml(t('all'))}</option>`];
  (doc?.participants || []).forEach((participant) => {
    options.push(`<option value="${escapeHtml(participant.id)}">${escapeHtml(participantLabel(participant))}</option>`);
  });
  els.roleFilter.innerHTML = options.join('');
  els.roleFilter.value = [...els.roleFilter.options].some((option) => option.value === selected) ? selected : 'all';
  state.role = els.roleFilter.value;
}

function prepareDocument(doc) {
  doc.messages.forEach((message) => {
    message.html = markdownToHtml(message.raw);
  });
  doc.messageById = new Map(doc.messages.map((message) => [message.id, message]));
}

function resetSearchState() {
  state.query = '';
  state.normalizedQuery = '';
  state.searchResults = [];
  state.matchingMessageIds = new Set();
  state.showMatchesOnly = false;
  state.searchIndex = -1;
  state.highlightedQuery = '';
  state.highlightedMessageIds = new Set();
  els.searchInput.value = '';
  els.matchOnlyToggle.checked = false;
  els.matchOnlyToggle.disabled = true;
}

function updateSearchResults() {
  state.normalizedQuery = normalizeForSearch(state.query);
  state.searchResults = state.doc && state.normalizedQuery
    ? collectSearchResults(state.doc.messages, state.query)
    : [];
  state.matchingMessageIds = new Set(state.searchResults.map((result) => result.messageId));

  if (!state.normalizedQuery) state.showMatchesOnly = false;
  els.matchOnlyToggle.checked = state.showMatchesOnly;
  els.matchOnlyToggle.disabled = !state.normalizedQuery;
}

function visibleMessages() {
  return filterMessages(state.doc.messages, {
    speakerId: state.role,
    matchOnly: state.showMatchesOnly && Boolean(state.normalizedQuery),
    matchingMessageIds: state.matchingMessageIds
  });
}

function visibleSearchResults() {
  return state.searchResults.filter((result) => state.role === 'all' || result.speakerId === state.role);
}

function applyMessageVisibility(messages, force = false) {
  const key = `${state.role}\u0000${state.showMatchesOnly ? state.normalizedQuery : ''}`;
  if (!force && key === state.renderedVisibilityKey) return;

  const visibleIds = new Set(messages.map((message) => message.id));
  els.conversation.querySelectorAll('.message-card').forEach((card) => {
    card.hidden = !visibleIds.has(card.id);
  });
  state.renderedVisibilityKey = key;
}

function renderMessageNavIfNeeded(messages) {
  const key = `${state.role}\u0000${state.showMatchesOnly ? state.normalizedQuery : ''}`;
  if (key === state.renderedNavKey) {
    updateActiveNavItem();
    return;
  }
  state.renderedNavKey = key;
  renderMessageNav(messages);
}

function renderConversation(messages) {
  els.conversation.innerHTML = messages.map((message) => {
    const roleLabel = participantLabel(message);
    const turnLabel = t('turn', { n: message.turn });
    const copyLabel = t('copyMessage', { speaker: roleLabel, turn: turnLabel });
    const speakerClass = `speaker-${message.participantIndex % 20}`;
    const primaryClass = message.isPrimarySpeaker ? 'speaker-primary' : 'speaker-secondary';
    return `
      <article class="message-card ${message.role} ${speakerClass} ${primaryClass}" id="${message.id}">
        <header class="message-head">
          <div class="message-title">
            <span class="role-chip ${message.role} ${speakerClass}">${escapeHtml(roleLabel)}</span>
            <span class="turn-label">${escapeHtml(turnLabel)}</span>
          </div>
          <div class="message-tools">
            <span class="turn-label">${escapeHtml(t('countLabel', { n: formatNumber(message.chars) }))}</span>
            <button class="mini-button" type="button" data-copy-id="${message.id}" title="${escapeHtml(copyLabel)}" aria-label="${escapeHtml(copyLabel)}">
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M8 4.8A2.8 2.8 0 0 1 10.8 2h5.4A2.8 2.8 0 0 1 19 4.8v8.4a2.8 2.8 0 0 1-2.8 2.8h-5.4A2.8 2.8 0 0 1 8 13.2V4.8Zm2.8-1a1 1 0 0 0-1 1v8.4a1 1 0 0 0 1 1h5.4a1 1 0 0 0 1-1V4.8a1 1 0 0 0-1-1h-5.4ZM5 8a.9.9 0 0 1 .9.9v8.3a3 3 0 0 0 3 3h5.2a.9.9 0 1 1 0 1.8H8.9A4.8 4.8 0 0 1 4.1 17.2V8.9A.9.9 0 0 1 5 8Z"/></svg>
            </button>
          </div>
        </header>
        <div class="message-body">${message.html}</div>
      </article>
    `;
  }).join('');
  observeVisibleMessages();
}

function applySearchHighlights(force = false) {
  if (!force && state.highlightedQuery === state.normalizedQuery) return;

  const affectedIds = new Set([
    ...state.highlightedMessageIds,
    ...state.matchingMessageIds
  ]);

  affectedIds.forEach((id) => {
    const message = state.doc.messageById.get(id);
    const body = document.getElementById(id)?.querySelector('.message-body');
    if (!message || !body) return;

    body.innerHTML = message.html;
    if (state.matchingMessageIds.has(id)) highlightMessageBody(body, state.query);
  });

  state.highlightedMessageIds = new Set(state.matchingMessageIds);
  state.highlightedQuery = state.normalizedQuery;
}

function highlightMessageBody(body, query) {
  const textNodes = [];
  const walker = document.createTreeWalker(body, globalThis.NodeFilter?.SHOW_TEXT || 4);
  let node;
  let offset = 0;

  while ((node = walker.nextNode())) {
    if (!node.nodeValue) continue;
    textNodes.push({ node, start: offset, end: offset + node.nodeValue.length });
    offset += node.nodeValue.length;
  }

  const matches = findNormalizedMatches(textNodes.map((item) => item.node.nodeValue).join(''), query);
  let firstMatchIndex = 0;
  textNodes.forEach((item) => {
    while (firstMatchIndex < matches.length && matches[firstMatchIndex].end <= item.start) {
      firstMatchIndex += 1;
    }

    const pieces = [];
    for (let index = firstMatchIndex; index < matches.length && matches[index].start < item.end; index += 1) {
      const match = matches[index];
      const start = Math.max(item.start, match.start);
      const end = Math.min(item.end, match.end);
      if (start < end) pieces.push({ occurrence: index, start, end });
    }
    if (!pieces.length) return;

    const fragment = document.createDocumentFragment();
    const text = item.node.nodeValue;
    let cursor = 0;
    pieces.forEach((piece) => {
      const start = piece.start - item.start;
      const end = piece.end - item.start;
      if (start > cursor) fragment.append(text.slice(cursor, start));
      const mark = document.createElement('mark');
      mark.dataset.searchOccurrence = String(piece.occurrence);
      mark.textContent = text.slice(start, end);
      fragment.append(mark);
      cursor = end;
    });
    if (cursor < text.length) fragment.append(text.slice(cursor));
    item.node.replaceWith(fragment);
  });
}

function setCurrentSearchMark(result) {
  els.conversation.querySelectorAll('mark.is-current').forEach((mark) => mark.classList.remove('is-current'));
  const card = document.getElementById(result.messageId);
  const mark = card?.querySelector(`mark[data-search-occurrence="${result.occurrence}"]`);
  if (mark) mark.classList.add('is-current');
  (mark || card)?.scrollIntoView({ behavior: scrollBehavior(), block: mark ? 'center' : 'start' });
}

function renderMessageNav(messages) {
  navState.messages = messages;
  navState.virtual = messages.length > NAV_VIRTUAL_THRESHOLD;
  navState.start = -1;
  navState.end = -1;
  els.messageList.classList.toggle('is-virtualized', navState.virtual);

  if (!messages.length) {
    els.messageList.replaceChildren();
    return;
  }

  if (!navState.virtual) {
    const fragment = document.createDocumentFragment();
    messages.forEach((message) => fragment.append(createMessageNavItem(message)));
    els.messageList.replaceChildren(fragment);
    updateActiveNavItem();
    return;
  }

  renderMessageNavWindow();
}

function resetMessageNav() {
  navState.messages = [];
  navState.virtual = false;
  navState.start = -1;
  navState.end = -1;
  if (navState.frame) {
    cancelAnimationFrame(navState.frame);
    navState.frame = null;
  }
  els.messageList.classList.remove('is-virtualized');
  els.messageList.replaceChildren();
}

function createMessageNavItem(message) {
  const button = document.createElement('button');
  const speakerClass = `speaker-${message.participantIndex % 20}`;
  button.className = `nav-item ${message.role} ${message.id === state.activeId ? 'is-active' : ''}`;
  button.type = 'button';
  button.dataset.messageId = message.id;
  if (message.id === state.activeId) button.setAttribute('aria-current', 'location');

  const row = document.createElement('span');
  row.className = 'nav-row';

  const chip = document.createElement('span');
  chip.className = `role-chip ${message.role} ${speakerClass}`;
  chip.textContent = participantLabel(message);

  const turn = document.createElement('span');
  turn.className = 'turn-label';
  turn.textContent = t('turn', { n: message.turn });

  const excerpt = document.createElement('span');
  excerpt.className = 'nav-excerpt';
  excerpt.textContent = (message.plain || message.raw).slice(0, NAV_EXCERPT_LENGTH);

  row.append(chip, turn);
  button.append(row, excerpt);
  return button;
}

function scheduleRenderMessageNavWindow() {
  if (!navState.virtual || navState.frame) return;
  navState.frame = requestAnimationFrame(() => {
    navState.frame = null;
    renderMessageNavWindow();
  });
}

function renderMessageNavWindow() {
  if (!navState.virtual) return;
  const messages = navState.messages;
  if (!messages.length) {
    els.messageList.replaceChildren();
    return;
  }

  const viewport = Math.max(els.sidebarContent.clientHeight, 360);
  const listTop = els.messageList.offsetTop;
  const scrollTop = Math.max(0, els.sidebarContent.scrollTop - listTop);
  const start = Math.max(0, Math.floor(scrollTop / NAV_ROW_HEIGHT) - NAV_OVERSCAN);
  const visibleCount = Math.ceil(viewport / NAV_ROW_HEIGHT) + NAV_OVERSCAN * 2;
  const end = Math.min(messages.length, start + visibleCount);

  if (start === navState.start && end === navState.end) {
    updateActiveNavItem();
    return;
  }

  navState.start = start;
  navState.end = end;

  const topSpacer = document.createElement('div');
  topSpacer.className = 'nav-spacer';
  topSpacer.style.height = `${start * NAV_ROW_HEIGHT}px`;

  const bottomSpacer = document.createElement('div');
  bottomSpacer.className = 'nav-spacer';
  bottomSpacer.style.height = `${Math.max(0, (messages.length - end) * NAV_ROW_HEIGHT)}px`;

  const fragment = document.createDocumentFragment();
  fragment.append(topSpacer);
  messages.slice(start, end).forEach((message) => fragment.append(createMessageNavItem(message)));
  fragment.append(bottomSpacer);
  els.messageList.replaceChildren(fragment);
  updateActiveNavItem();
}

function participantLabel(message) {
  const role = message.semanticRole || message.role;
  return I18N[state.lang][role] || message.speaker || message.label || role;
}

function observeVisibleMessages() {
  activeObserver?.disconnect();
  if (!('IntersectionObserver' in window)) return;
  activeObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible?.target?.id) setActiveMessage(visible.target.id);
  }, {
    root: els.reader,
    threshold: [0.35, 0.6]
  });

  els.conversation.querySelectorAll('.message-card').forEach((node) => activeObserver.observe(node));
}

function setActiveMessage(id) {
  if (!id || state.activeId === id) return;
  state.activeId = id;
  updateActiveNavItem();
}

function updateActiveNavItem() {
  els.messageList.querySelectorAll('.nav-item').forEach((item) => {
    const active = item.dataset.messageId === state.activeId;
    item.classList.toggle('is-active', active);
    if (active) item.setAttribute('aria-current', 'location');
    else item.removeAttribute('aria-current');
  });
}

function handleMessageListKeydown(event) {
  const button = event.target.closest('.nav-item');
  if (!button || !['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
  const currentIndex = navState.messages.findIndex((message) => message.id === button.dataset.messageId);
  const nextIndex = nextMessageNavIndex(currentIndex, navState.messages.length, event.key);
  if (nextIndex < 0) return;
  event.preventDefault();
  if (nextIndex === currentIndex) return;
  focusMessageNavIndex(nextIndex);
}

function focusMessageNavIndex(index) {
  const message = navState.messages[index];
  if (!message) return;

  if (navState.virtual) {
    els.sidebarContent.scrollTop = Math.max(0, els.messageList.offsetTop + index * NAV_ROW_HEIGHT - NAV_ITEM_GAP);
    renderMessageNavWindow();
  }

  requestAnimationFrame(() => {
    els.messageList.querySelector(`[data-message-id="${message.id}"]`)?.focus({ preventScroll: true });
  });
}

function renderStats(doc) {
  els.statMessages.textContent = formatNumber(doc?.messages.length || 0);
  els.statTurns.textContent = formatNumber(doc?.turns || 0);
  els.statChars.textContent = formatNumber(doc?.chars || 0);
}

function renderResultStatus(visible) {
  const results = visibleSearchResults();
  const filtering = state.role !== 'all';
  const hasQuery = Boolean(state.normalizedQuery);
  const current = state.searchIndex >= 0 ? state.searchIndex + 1 : 0;

  els.resultLine.textContent = hasQuery
    ? t('searchPosition', { current: formatNumber(current), total: formatNumber(results.length) })
    : (filtering ? t('visibleResults', { shown: formatNumber(visible.length), total: formatNumber(state.doc?.messages.length || 0) }) : t('searchResultsEmpty'));

  const hasResults = hasQuery && results.length > 0;
  els.prevResultBtn.disabled = !hasResults;
  els.nextResultBtn.disabled = !hasResults;
}

function clearSearch(options = {}) {
  clearTimeout(searchTimer);
  resetSearchState();
  if (options.resetRole) {
    els.roleFilter.value = 'all';
    state.role = 'all';
  }
  render();
  els.searchInput.focus();
}

function requestResetDocument() {
  if (!state.doc) return;
  if (showDialog(els.resetDocumentDialog, els.topResetDocumentBtn, els.cancelResetDocumentBtn)) return;
  if (window.confirm(t('resetConfirmTitle'))) resetLoadedDocument();
}

function resetLoadedDocument() {
  activeObserver?.disconnect();
  state.doc = null;
  state.role = 'all';
  state.activeId = null;
  resetSearchState();
  els.metaDetails.open = false;
  updateRoleFilter(null);
  render();
  setStatus(t('resetComplete'));
  showToast(t('resetComplete'));
}

function jumpSearchResult(direction) {
  const results = visibleSearchResults();
  if (!results.length) return;

  state.searchIndex = nextSearchIndex(state.searchIndex, results.length, direction);
  const result = results[state.searchIndex];
  setCurrentSearchMark(result);
  setActiveMessage(result.messageId);
  scrollMessageNavToId(result.messageId);
  setDrawerOpen(false);
  renderResultStatus(visibleMessages());
}

function scrollMessageNavToId(id) {
  const index = navState.messages.findIndex((message) => message.id === id);
  if (index < 0) return;

  if (navState.virtual) {
    els.sidebarContent.scrollTop = Math.max(0, els.messageList.offsetTop + index * NAV_ROW_HEIGHT - NAV_ITEM_GAP);
    renderMessageNavWindow();
    return;
  }

  [...els.messageList.querySelectorAll('.nav-item')]
    .find((item) => item.dataset.messageId === id)
    ?.scrollIntoView({ block: 'nearest' });
}

function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r\n?/g, '\n').split('\n');
  const html = [];
  const listStack = [];
  let paragraph = [];
  let inCode = false;
  let codeBuffer = [];
  let codeLanguage = '';
  let codeFence = null;

  const closeParagraph = () => {
    if (!paragraph.length) return;
    html.push(`<p>${inlineMarkdown(paragraph.join(' '))}</p>`);
    paragraph = [];
  };

  const closeListsTo = (indent = -1) => {
    while (listStack.length && listStack[listStack.length - 1].indent >= indent) {
      html.push(`</${listStack.pop().type}>`);
    }
  };

  const closeAllLists = () => closeListsTo(-1);

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const fence = line.match(/^ {0,3}(`{3,}|~{3,})(.*)$/);
    const closesCodeFence = inCode
      && fence
      && fence[1][0] === codeFence.char
      && fence[1].length >= codeFence.length
      && !fence[2].trim();

    if (!inCode && fence) {
      closeParagraph();
      closeAllLists();
      inCode = true;
      codeFence = { char: fence[1][0], length: fence[1].length };
      codeLanguage = fence[2].trim().split(/\s+/)[0] || '';
      continue;
    }

    if (closesCodeFence) {
      const codeHtml = escapeHtml(codeBuffer.join('\n'));
      html.push(`<pre><code${codeLanguage ? ` class="language-${escapeHtml(codeLanguage)}"` : ''}>${codeHtml}</code></pre>`);
      inCode = false;
      codeBuffer = [];
      codeLanguage = '';
      codeFence = null;
      continue;
    }

    if (inCode) {
      codeBuffer.push(line);
      continue;
    }

    if (!line.trim()) {
      closeParagraph();
      closeAllLists();
      continue;
    }

    if (/^\s{0,3}([-*_]\s*){3,}$/.test(line.trim())) {
      closeParagraph();
      closeAllLists();
      html.push('<hr>');
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      closeParagraph();
      closeAllLists();
      const level = Math.min(heading[1].length + 1, 6);
      html.push(`<h${level}>${inlineMarkdown(heading[2].trim())}</h${level}>`);
      continue;
    }

    const quote = line.match(/^\s{0,3}>\s?(.*)$/);
    if (quote) {
      closeParagraph();
      closeAllLists();
      html.push(`<blockquote>${inlineMarkdown(quote[1])}</blockquote>`);
      continue;
    }

    const item = line.match(/^(\s*)([-*+]|\d+[.)])\s+(.+)$/);
    if (item) {
      closeParagraph();
      const indent = Math.floor(item[1].replace(/\t/g, '    ').length / 2);
      const type = /^\d/.test(item[2]) ? 'ol' : 'ul';
      while (listStack.length && listStack[listStack.length - 1].indent > indent) {
        html.push(`</${listStack.pop().type}>`);
      }
      const current = listStack[listStack.length - 1];
      if (!current || current.indent < indent || current.type !== type) {
        html.push(`<${type}>`);
        listStack.push({ indent, type });
      }
      html.push(`<li>${inlineMarkdown(item[3])}</li>`);
      continue;
    }

    if (isTableHeader(line, lines[index + 1])) {
      closeParagraph();
      closeAllLists();
      const tableLines = [line];
      index += 2;
      while (index < lines.length && looksLikeTableRow(lines[index])) {
        tableLines.push(lines[index]);
        index += 1;
      }
      index -= 1;
      html.push(renderMarkdownTable(tableLines));
      continue;
    }

    closeAllLists();
    paragraph.push(line.trim());
  }

  closeParagraph();
  closeAllLists();
  if (inCode) {
    html.push(`<pre><code>${escapeHtml(codeBuffer.join('\n'))}</code></pre>`);
  }

  return html.join('\n');
}

function isTableHeader(header, divider) {
  return looksLikeTableRow(header) && /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(divider || '');
}

function looksLikeTableRow(line) {
  return typeof line === 'string' && line.includes('|') && line.trim().length > 2;
}

function splitTableRow(line) {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());
}

function renderMarkdownTable(lines) {
  const headers = splitTableRow(lines[0]);
  const rows = lines.slice(1).map(splitTableRow);
  const head = `<thead><tr>${headers.map((cell) => `<th>${inlineMarkdown(cell)}</th>`).join('')}</tr></thead>`;
  const body = rows.length
    ? `<tbody>${rows.map((row) => `<tr>${headers.map((_, index) => `<td>${inlineMarkdown(row[index] || '')}</td>`).join('')}</tr>`).join('')}</tbody>`
    : '';
  return `<table>${head}${body}</table>`;
}

function inlineMarkdown(text) {
  const codeParts = text.split(/(`[^`]*`)/g);
  return codeParts.map((part) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return `<code>${escapeHtml(part.slice(1, -1))}</code>`;
    }

    const escaped = protectMarkdownEscapes(part);
    let output = escapeHtml(escaped.text);
    output = output.replace(/\[([^\]]+)]\(([^)]+)\)/g, (match, label, url) => {
      const safe = safeUrl(unescapeHtml(url.trim()));
      if (!safe) return escapeHtml(label);
      return `<a href="${escapeHtml(safe)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
    });
    output = output
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/__([^_]+)__/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      .replace(/_([^_]+)_/g, '<em>$1</em>');
    output = escaped.restore(output);

    return output;
  }).join('');
}

function protectMarkdownEscapes(text) {
  const values = [];
  return {
    text: text.replace(/\\([\\`*{}\[\]()#+\-.!_>~|])/g, (match, char) => {
      const index = values.push(char) - 1;
      return `\uE000${index}\uE000`;
    }),
    restore(html) {
      return html.replace(/\uE000(\d+)\uE000/g, (match, index) => escapeHtml(values[Number(index)] || ''));
    }
  };
}

function safeUrl(rawUrl) {
  return safeUrlForBase(rawUrl, location.href);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function unescapeHtml(value) {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = value;
  return textarea.value;
}

function formatNumber(value) {
  if (numberFormatterLanguage !== state.lang) {
    numberFormatter = new Intl.NumberFormat(state.lang);
    numberFormatterLanguage = state.lang;
  }
  return numberFormatter.format(value || 0);
}

async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      textarea.remove();
    }
    showToast(t('copied'));
  } catch (error) {
    console.error(error);
  }
}

function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  if (!['http:', 'https:'].includes(location.protocol)) return;
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js', { updateViaCache: 'none' })
      .then((registration) => {
        state.serviceWorkerRegistration = registration;
        showServiceWorkerUpdate(registration);
        registration.addEventListener('updatefound', () => {
          const installingWorker = registration.installing;
          if (!installingWorker) return;
          installingWorker.addEventListener('statechange', () => {
            if (installingWorker.state === 'installed') showServiceWorkerUpdate(registration);
          });
        });
        registration.update().catch((error) => console.warn(error));
      })
      .catch((error) => console.warn(error));
  });
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!shouldReloadAfterUpdate({
      updateAccepted: state.updateAccepted,
      reloadStarted: state.updateReloadStarted
    })) return;

    state.updateReloadStarted = true;
    window.location.reload();
  });
}

init();
