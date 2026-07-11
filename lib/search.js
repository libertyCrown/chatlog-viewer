'use strict';

// Shared search normalization without any DOM dependency.
(function attachSearchApi(root) {
  function normalizeForSearch(value) {
    return String(value ?? '').normalize('NFKC').toLowerCase();
  }

  const api = Object.freeze({ normalizeForSearch });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }
  root.ChatLogSearch = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
