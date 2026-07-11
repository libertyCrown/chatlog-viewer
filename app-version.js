'use strict';

// The displayed version and the app-shell cache version share one source.
(function attachVersion(root) {
  const version = '2.0.0-dev';
  const api = Object.freeze({
    value: version,
    cacheKey: `v${version}`
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }
  root.ChatLogViewerVersion = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
