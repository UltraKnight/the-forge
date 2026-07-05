# Current Architecture

```text
Browser (React)

        │
        ▼

useChat()

        │
        ▼

DefaultChatTransport

        │
        ▼

POST /api/chat

        │
        ▼

Next.js Route Handler

        │
        ▼

Google Gemini

        │
        ▼

Streaming (SSE)

        │
        ▼

Browser
```

## Responsibilities

### Browser

- Displays the conversation
- Sends user messages
- Renders streamed responses

### Route Handler

- Receives UI messages
- Calls the LLM
- Streams the response back

### Gemini

- Generates the response
- Has no memory between requests
