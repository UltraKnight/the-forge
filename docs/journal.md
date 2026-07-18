# Engineering Journal

---

## Sprint 1 — Backend Foundations

### Goal

Build the first AI endpoint capable of streaming responses.

### What I built

- Created a Next.js project.
- Configured the Google Gemini API.
- Implemented the `/api/chat` Route Handler.
- Streamed responses using the AI SDK.

### What I learned

- Route Handlers execute on the server.
- API keys should never reach the browser.
- LLMs are stateless.
- Streaming uses Server-Sent Events (SSE).

### Engineering Decisions

- Keep Route Handlers small.
- The browser never communicates directly with the LLM.
- The server owns authentication and provider configuration.

---

## Sprint 2 — Streaming Chat UI

### Goal

Build the first ChatGPT-like interface.

### What I built

- Connected the frontend using `useChat()`.
- Added streaming message rendering.
- Built a reusable chat component architecture.
- Connected the frontend to the backend API.

### What I learned

- The AI SDK abstracts the streaming protocol.
- UI Messages are different from Model Messages.
- Streaming does not guarantee one token per event.
- Time To First Token (TTFT) is different from generation speed.

### Engineering Decisions

- Keep presentation separate from AI logic.
- Design components for future extensibility.
- Keep AI-specific logic outside UI components.

---

## Sprint 3 — UX Polish

### Goal

Improve the chat experience while keeping the architecture simple.

### What I built

- GitHub Flavored Markdown rendering.
- Syntax highlighting.
- Chat bubbles.
- Auto-scroll.
- Empty state.
- Loading indicator.
- Header and general UX improvements.

### What I learned

- Good AI UX is mostly about perceived responsiveness.
- Markdown rendering requires careful handling for code blocks.
- Small UX improvements significantly improve usability.

### Engineering Decisions

- Kept the existing component architecture.
- Avoided premature abstractions.
- Deferred Copy Code until a richer Markdown solution is needed.

---

## Sprint 4 — Prompt Engineering

### Goal

Build a provider-agnostic prompt and generation architecture.

### What I built

- Centralized prompt architecture.
- Prompt composition.
- Prompt presets.
- Dynamic prompt context.
- Centralized generation configuration.
- Temperature control.
- Top-P control.
- Max output tokens.
- Model selection.
- Provider-agnostic AI error normalization.

### What I learned

- Prompt engineering is more than writing prompts; generation parameters strongly influence outputs.
- Temperature controls randomness during token sampling.
- Top-P limits the candidate token distribution before sampling.
- Max output tokens constrain response length but do not influence reasoning quality.
- Provider abstractions should hide provider-specific APIs and errors.
- Streaming errors occur while consuming the stream, not when creating it.

### Engineering Decisions

- Centralized prompt composition outside the API route.
- Kept generation configuration as the single source of truth.
- Introduced provider-agnostic AI error normalization.
- Deferred the Prompt Inspector to Sprint 8 (AI Observability), where it can inspect prompts, context, tool calls, RAG, latency and token usage from a single debugging interface.

---

## Sprint 5 — AI Generation Layer (Infrastructure)

### Goal

Prepare the AI layer for structured outputs without changing application behavior.

### What I built

- Introduced a dedicated `ai/generate` module.
- Moved AI generation logic out of the chat route.
- Centralized generation configuration resolution.
- Reduced coupling between HTTP routes and the AI SDK.
- Preserved the existing streaming chat behavior.

### What I learned

- A thin application layer makes AI integrations easier to evolve.
- Separating transport (HTTP) from generation logic improves maintainability.
- AI SDK APIs evolve quickly; implementations should be isolated behind project abstractions.
- Small refactoring steps are safer than introducing new features while restructuring.

### Engineering Decisions

- Centralize all LLM interactions behind a single generation module.
- Keep Route Handlers focused on HTTP concerns.
- Delay structured outputs until the generation abstraction is stable.
- Follow the installed AI SDK version instead of examples from older releases.

### Next Sprint

- Add structured outputs.
- Introduce reusable Zod schemas.
- Support typed AI responses.
- Handle validation failures gracefully.
