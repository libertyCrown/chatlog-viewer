'use strict';

// Shared search matching without any DOM dependency.
(function attachSearchApi(root) {
  function normalizeForSearch(value) {
    return String(value ?? '').normalize('NFKC').toLowerCase();
  }

  function graphemeSegments(source) {
    if (typeof Intl !== 'undefined' && typeof Intl.Segmenter === 'function') {
      const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' });
      return Array.from(segmenter.segment(source), ({ segment, index }) => ({
        text: segment,
        start: index,
        end: index + segment.length
      }));
    }

    let offset = 0;
    return Array.from(source, (text) => {
      const segment = { text, start: offset, end: offset + text.length };
      offset += text.length;
      return segment;
    });
  }

  function normalizedTextMap(value) {
    const source = String(value ?? '');
    const map = [];
    let normalized = '';

    graphemeSegments(source).forEach((segment) => {
      const normalizedSegment = normalizeForSearch(segment.text);
      normalized += normalizedSegment;
      for (let index = 0; index < normalizedSegment.length; index += 1) {
        map.push({ start: segment.start, end: segment.end });
      }
    });

    return { normalized, map };
  }

  function findNormalizedMatches(value, query) {
    const normalizedQuery = normalizeForSearch(query);
    if (!normalizedQuery) return [];

    const { normalized, map } = normalizedTextMap(value);
    const matches = [];
    const seenRanges = new Set();
    let from = 0;

    while (from < normalized.length) {
      const index = normalized.indexOf(normalizedQuery, from);
      if (index < 0) break;
      const first = map[index];
      const last = map[index + normalizedQuery.length - 1];
      if (first && last) {
        const range = { start: first.start, end: last.end };
        const key = `${range.start}:${range.end}`;
        if (!seenRanges.has(key)) {
          seenRanges.add(key);
          matches.push(range);
        }
      }
      from = index + normalizedQuery.length;
    }

    return matches;
  }

  function collectSearchResults(messages, query) {
    if (!normalizeForSearch(query)) return [];

    return messages.flatMap((message) => findNormalizedMatches(message.plain || message.raw || '', query)
      .map((range, occurrence) => ({
        id: `${message.id}:${occurrence}`,
        messageId: message.id,
        speakerId: message.speakerId,
        occurrence,
        range
      })));
  }

  function filterMessages(messages, { speakerId = 'all', matchOnly = false, matchingMessageIds = new Set() } = {}) {
    return messages.filter((message) => {
      const speakerMatches = speakerId === 'all' || message.speakerId === speakerId;
      return speakerMatches && (!matchOnly || matchingMessageIds.has(message.id));
    });
  }

  function nextSearchIndex(currentIndex, total, direction) {
    if (!total) return -1;
    if (currentIndex < 0) return direction < 0 ? total - 1 : 0;
    return (currentIndex + direction + total) % total;
  }

  const api = Object.freeze({
    collectSearchResults,
    filterMessages,
    findNormalizedMatches,
    nextSearchIndex,
    normalizeForSearch
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }
  root.ChatLogSearch = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
