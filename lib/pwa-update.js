'use strict';

// Small, testable decisions for the Service Worker update lifecycle.
(function attachPwaUpdateApi(root) {
  function shouldOfferUpdate({ hasWaitingWorker, hasController, dismissed }) {
    return Boolean(hasWaitingWorker && hasController && !dismissed);
  }

  function shouldReloadAfterUpdate({ updateAccepted, reloadStarted }) {
    return Boolean(updateAccepted && !reloadStarted);
  }

  const api = Object.freeze({ shouldOfferUpdate, shouldReloadAfterUpdate });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }
  root.ChatLogPwaUpdate = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
