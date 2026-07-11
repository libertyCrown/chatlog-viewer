'use strict';

// Safe link handling shared by the Markdown renderer and its tests.
(function attachUrlApi(root) {
  function safeUrl(rawUrl, baseUrl) {
    if (!rawUrl) return '';

    try {
      const cleaned = String(rawUrl).trim().replace(/^['"]|['"]$/g, '');
      if (!cleaned) return '';
      if (cleaned.startsWith('#')) return cleaned;
      if (cleaned.startsWith('//')) return '';
      if ((cleaned.startsWith('./') || cleaned.startsWith('../') || cleaned.startsWith('/')) && !cleaned.startsWith('//')) {
        return cleaned;
      }

      const url = new URL(cleaned, baseUrl || 'https://chatlog-viewer.invalid/');
      return ['http:', 'https:', 'mailto:'].includes(url.protocol) ? url.href : '';
    } catch {
      return '';
    }
  }

  const api = Object.freeze({ safeUrl });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }
  root.ChatLogUrl = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
