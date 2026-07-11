'use strict';

// Chat-log detection and speaker identity stay independent from the UI layer.
(function attachParserApi(root) {

  const KNOWN_ROLES = new Map([
    ['prompt', 'prompt'],
    ['response', 'response'],
    ['user', 'user'],
    ['assistant', 'assistant'],
    ['system', 'system'],
    ['developer', 'developer'],
    ['tool', 'tool'],
    ['function', 'function'],
    ['moderator', 'moderator'],
    ['narrator', 'narrator'],
    ['observer', 'observer']
  ]);

  function canonicalSpeakerKey(value) {
    return String(value ?? '')
      .normalize('NFKC')
      .trim()
      .replace(/\s+/g, ' ')
      .toLowerCase();
  }

  function semanticRoleFor(speaker) {
    const key = canonicalSpeakerKey(speaker);
    if (/^participant\s*\d+$/.test(key)) return 'participant';
    return KNOWN_ROLES.get(key) || 'participant';
  }

  function isKnownSpeaker(speaker) {
    const key = canonicalSpeakerKey(speaker);
    return KNOWN_ROLES.has(key) || /^participant\s*\d+$/.test(key);
  }

  function fenceInfo(line) {
    const match = line.match(/^ {0,3}(`{3,}|~{3,})(.*)$/);
    if (!match) return null;
    return { char: match[1][0], length: match[1].length };
  }

  function isClosingFence(line, fence) {
    const match = line.match(/^ {0,3}(`+|~+)[ \t]*$/);
    return Boolean(match && match[1][0] === fence.char && match[1].length >= fence.length);
  }

  function forEachLine(text, callback) {
    let start = 0;
    while (start <= text.length) {
      const next = text.indexOf('\n', start);
      const end = next === -1 ? text.length : next;
      callback(text.slice(start, end), start);
      if (next === -1) return;
      start = next + 1;
    }
  }

  function scanMessageMarkers(text) {
    const candidates = [];
    let activeFence = null;

    forEachLine(text, (line, index) => {
      if (activeFence) {
        if (isClosingFence(line, activeFence)) activeFence = null;
        return;
      }

      const fence = fenceInfo(line);
      if (fence) {
        activeFence = fence;
        return;
      }

      const marker = line.match(/^ {0,3}##[ \t]+([^:\n]{1,48}):[ \t]*$/i);
      if (!marker) return;

      const speaker = marker[1].trim();
      candidates.push({
        index,
        end: index + line.length,
        speaker,
        key: canonicalSpeakerKey(speaker),
        semanticRole: semanticRoleFor(speaker),
        known: isKnownSpeaker(speaker)
      });
    });

    return candidates;
  }

  function findMessageMarkers(text) {
    const candidates = scanMessageMarkers(text);
    if (candidates.length < 2) return [];

    const knownCount = candidates.filter((candidate) => candidate.known).length;
    const speakerKeys = new Set(candidates.map((candidate) => candidate.key));
    const hasRepeatedSpeaker = speakerKeys.size < candidates.length;

    // ChatGPT Exporter uses known roles. Once that pattern is established,
    // keep custom speakers in the same sequence rather than merging them into a body.
    if (knownCount >= 2) return candidates;
    if (knownCount === 1 && candidates.length >= 3 && speakerKeys.size >= 2) return candidates;

    // Loose detection stays deliberately conservative for ordinary Markdown files.
    if (knownCount === 0 && candidates.length >= 4 && speakerKeys.size >= 2 && speakerKeys.size <= 20 && hasRepeatedSpeaker) {
      return candidates;
    }

    return [];
  }

  function parseMetadata(head) {
    const meta = {};
    head.split('\n').forEach((line) => {
      const match = line.match(/^\*\*(User|Created|Updated|Exported|Link):\*\*\s*(.*?)\s*$/i);
      if (!match) return;
      const key = match[1].toLowerCase();
      let value = match[2].replace(/\s{2,}$/, '').trim();
      if (key === 'link') {
        const link = value.match(/\[([^\]]+)]\(([^)]+)\)/);
        value = link ? link[2] : value;
      }
      meta[key] = value;
    });
    return meta;
  }

  function protectFencedCode(markdown) {
    const tokens = [];
    const lines = [];
    let activeFence = null;

    forEachLine(markdown, (line) => {
      if (activeFence) {
        if (isClosingFence(line, activeFence)) {
          activeFence = null;
        } else {
          lines.push(`\uE000${tokens.push(line) - 1}\uE001`);
        }
        return;
      }

      const fence = fenceInfo(line);
      if (fence) {
        activeFence = fence;
      } else {
        lines.push(line);
      }
    });

    return { text: lines.join('\n'), tokens };
  }

  function stripMarkdown(markdown) {
    const protectedCode = protectFencedCode(String(markdown ?? ''));
    const plain = protectedCode.text
      .replace(/`([^`]+)`/g, '$1')
      .replace(/\[([^\]]+)]\(([^)]+)\)/g, '$1')
      .replace(/^\s{0,3}#{1,6}\s+/gm, '')
      .replace(/^\s{0,3}>\s?/gm, '')
      .replace(/^\s*[-*+]\s+/gm, '')
      .replace(/^\s*\d+[.)]\s+/gm, '')
      .replace(/[*_~]/g, '')
      .replace(/\\([\\`*{}\[\]()#+\-.!_>~|])/g, '$1')
      .replace(/\uE000(\d+)\uE001/g, (match, index) => protectedCode.tokens[Number(index)] || '');

    return plain.replace(/\s+/g, ' ').trim();
  }

  function countCharacters(value) {
    let count = 0;
    for (const character of String(value ?? '')) count += 1;
    return count;
  }

  function parseChatMarkdown(text, sourceName, encoding, options = {}) {
    const normalized = String(text ?? '').replace(/\r\n?/g, '\n');
    const title = normalized.match(/^#\s+(.+)$/m)?.[1]?.trim() || sourceName || options.untitledTitle || 'Untitled';
    const markers = findMessageMarkers(normalized);
    const head = markers.length ? normalized.slice(0, markers[0].index) : normalized;
    const meta = parseMetadata(head);
    const messages = [];
    const participants = [];
    const participantMap = new Map();
    let turn = 0;

    function participantFor(marker) {
      const existing = participantMap.get(marker.key);
      if (existing) return existing;

      const participant = {
        id: `speaker-${participants.length + 1}`,
        key: marker.key,
        label: marker.speaker,
        semanticRole: marker.semanticRole,
        index: participants.length
      };
      participantMap.set(marker.key, participant);
      participants.push(participant);
      return participant;
    }

    if (markers.length) {
      markers.forEach((marker, index) => {
        const participant = participantFor(marker);
        if (participant.index === 0) turn += 1;
        const end = markers[index + 1]?.index ?? normalized.length;
        const raw = normalized.slice(marker.end, end).trim();
        const plain = stripMarkdown(raw);
        messages.push({
          id: `message-${index + 1}`,
          role: participant.semanticRole,
          semanticRole: participant.semanticRole,
          speaker: participant.label,
          speakerId: participant.id,
          participantIndex: participant.index,
          isPrimarySpeaker: participant.index === 0,
          turn: turn || 1,
          raw,
          plain,
          chars: countCharacters(plain)
        });
      });
    } else {
      const body = normalized.replace(/^#\s+.+$/m, '').trim();
      if (body) {
        const plain = stripMarkdown(body);
        const participant = {
          id: 'speaker-1',
          key: 'response',
          label: 'Response',
          semanticRole: 'response',
          index: 0
        };
        participants.push(participant);
        messages.push({
          id: 'message-1',
          role: participant.semanticRole,
          semanticRole: participant.semanticRole,
          speaker: participant.label,
          speakerId: participant.id,
          participantIndex: participant.index,
          isPrimarySpeaker: true,
          turn: 1,
          raw: body,
          plain,
          chars: countCharacters(plain)
        });
      }
    }

    return {
      title,
      sourceName,
      encoding,
      meta,
      participants,
      messages,
      turns: Math.max(...messages.map((message) => message.turn), 0),
      chars: messages.reduce((total, message) => total + message.chars, 0),
      parsedAsChat: markers.length > 0
    };
  }

  const api = Object.freeze({
    canonicalSpeakerKey,
    findMessageMarkers,
    isKnownSpeaker,
    parseChatMarkdown,
    semanticRoleFor,
    stripMarkdown
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }
  root.ChatLogParser = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
