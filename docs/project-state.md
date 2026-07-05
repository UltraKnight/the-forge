# Project State

Last Updated: 2026-07-05

## Current Sprint

Sprint 3.2 — UX Polish

Status:
- Not started

## Completed

### Sprint 1
- Next.js
- Gemini
- Route Handler
- Streaming API

### Sprint 2
- useChat()
- Chat components
- Streaming UI
- Markdown rendering
- Syntax highlighting

## Current Architecture

Browser

↓

useChat

↓

DefaultChatTransport

↓

/api/chat

↓

Gemini

## Next Tasks

1. Auto-scroll
2. Chat bubbles
3. Header
4. Empty state
5. Loading indicator

## Decisions

- Use Gemini during development.
- AI SDK as transport layer.
- Never render raw HTML.
- Provider-agnostic architecture.

## Pending Refactors

None

## Known Issues

- No auto-scroll
- No syntax theme customization
- Basic layout

## Current Branch

main
