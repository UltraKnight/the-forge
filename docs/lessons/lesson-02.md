# Lesson 2 — Streaming Responses

## Objective

Understand how streaming works.

## Key Concepts

- Server-Sent Events (SSE)
- Time To First Token (TTFT)
- Streaming throughput
- UI Messages
- Model Messages

## Important Notes

Streaming does not guarantee one token per event.

Applications should accumulate streamed text instead of assuming each chunk is a complete word or token.
