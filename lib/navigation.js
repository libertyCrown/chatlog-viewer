'use strict';

(function attachNavigationApi(root, factory) {
  const api = factory();
  root.ChatLogNavigation = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
}(globalThis, function createNavigationApi() {
  function nextMessageNavIndex(currentIndex, total, key) {
    if (!Number.isInteger(total) || total < 1) return -1;
    const current = Math.min(Math.max(Number.isInteger(currentIndex) ? currentIndex : 0, 0), total - 1);
    if (key === 'ArrowDown') return Math.min(current + 1, total - 1);
    if (key === 'ArrowUp') return Math.max(current - 1, 0);
    if (key === 'Home') return 0;
    if (key === 'End') return total - 1;
    return -1;
  }

  return { nextMessageNavIndex };
}));
