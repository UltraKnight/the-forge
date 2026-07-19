# Project State

Last Updated: 18-07-2026

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

### Sprint 3 — UX Polish
- GitHub Flavored Markdown
- Auto-scroll
- Chat bubbles
- Header
- Empty state
- Loading indicator

### Sprint 4 — Prompt Engineering
- Introduced provider-agnostic prompt architecture.
- Added reusable system prompt.
- Added prompt presets.
- Added dynamic prompt composition.
- Decoupled prompt logic from the API route.
- Centralized generation configuration
- Provider abstraction
- Temperature
- Top-P
- Max Output Tokens
- Model selection
- Provider-agnostic generation configuration
- AI error normalization
- Friendly provider error messages

The Prompt Inspector was postponed to the AI Observability sprint, where it can expose prompts, context, RAG retrievals, tool calls, MCP interactions, latency and token usage from a single debugging interface.

## Sprint 5 — Structured Outputs

- Introduced the `ai/generate` module.
- Centralized generation configuration resolution.
- Added reusable object generation.
- Introduced Zod schemas for website analysis.
- Added the `/api/analyze` endpoint.
- Added structured output validation.

### Outcome

Forge can now generate validated, type-safe AI responses.
This establishes the foundation for future tools, agents and browser analysis.

## Sprint 6 — Tool Calling

- Introduced Tool Calling infrastructure.
- Added a centralized tool registry.
- Implemented the first production tool (`fetchUrl`).
- Enabled multi-step tool execution with `stopWhen`.
- Validated end-to-end Tool Calling using Gemini 2.5 Flash.

### Outcome

Forge can now extend LLM capabilities through server-side tools.
This lays the foundation for browser analysis, MCP integration and AI workflows.

## Current Architecture

Browser

↓

Chat

↓

useChat

↓

DefaultChatTransport

↓

/api/chat

↓

Gemini

## Decisions

- Use Gemini during development.
- AI SDK as transport layer.
- Never render raw HTML.
- Provider-agnostic architecture.
- Keep the chat architecture simple.
- Avoid premature abstractions.

## Pending Refactors

None

## Known Issues

- No syntax theme customization
- Copy code button not implemented yet.

## Current Branch

main
