# ChatLog Viewer

[日本語](README.md) | **English**

## Overview

ChatLog Viewer is a viewer for reading Markdown chat logs exported from ChatGPT and similar tools.

It is mainly intended for Markdown files exported with [ChatGPT Exporter](https://www.chatgptexporter.com/).
Markdown files are processed entirely in your browser, and local files are not uploaded to an external server.

For long logs, you can use search and the message list to jump to the topic you want.

## Usage

Open the hosted page, then load the Markdown file you want to read.

```text
Pages URL will be added here
```

### On desktop

- Drag and drop a Markdown file onto the page.
- Or choose a file using `Open Markdown`.

### On mobile

- Choose a Markdown file using the file icon in the top bar or `Open Markdown`.
- Open the menu to use search and the message list.

Supported extensions are `.md` and `.markdown`.

## Features

- Loading `.md` and `.markdown` files
- Drag-and-drop file loading
- Displays ChatGPT Exporter's `## Prompt:` / `## Response:` format as a conversation
- Full-text search, including code blocks
- Previous/next search result navigation
- Filtering by message role/type
- Jumping from the message list
- Standard, compact, and chat-style display modes
- Light and dark theme support
- Japanese and English UI
- Layouts for desktop monitors and narrow mobile screens

## Supported Markdown formats

The main target is ChatGPT conversation logs.

As noted above, this viewer assumes the output format used by [ChatGPT Exporter](https://www.chatgptexporter.com/).
Other formats are not guaranteed to work. If ChatGPT Exporter's output format changes, logs may not display correctly.

Typical format:

```markdown
## Prompt:

Question text

## Response:

Answer text
```

If known role names are not found, repeated `## Any Name:` headings may still be treated as chat-style messages.

Other Markdown files are displayed as regular documents.

## Privacy and Security

- Local files are processed in the browser.
- The app does not upload local Markdown files to an external server.
- HTML inside Markdown is not executed; it is treated as text.
- `script`, `iframe`, arbitrary embedded HTML, and dangerous inline attributes are not supported.
- Markdown loaded from a URL is not cached by the Service Worker.

## URL loading notes

Markdown URL loading is subject to normal browser restrictions.

- `http:` and `https:` Markdown URLs are supported.
- Cross-origin URLs require the remote server to allow CORS.
- In normal use, choosing or dragging a local Markdown file is recommended over URL loading.

## Markdown rendering limits

This app uses a small Markdown renderer focused on log viewing. It is not fully CommonMark-compatible.

Supported basics:

- headings
- paragraphs
- unordered and ordered lists
- blockquotes
- fenced code blocks
- inline code
- links with safe URL protocols
- simple tables

Raw HTML rendering and execution are not supported.

## Browser support

Tested primarily on Chromium-based browsers.

- Google Chrome
- Microsoft Edge

It should also be usable on smartphones and tablets.

## Notes

- This project was developed and revised with help from Codex.
- This project is maintained primarily for personal use on GitHub Pages. I may not be able to respond to issues, feature requests, or support requests.
- This README provides only the minimum public-facing information in case someone happens to find the project.

## License

Licensed under the MIT License. See [LICENSE](LICENSE).
