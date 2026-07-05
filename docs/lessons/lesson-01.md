# Lesson 1 — AI Request Flow

## Objective

Understand how a user message reaches the LLM.

## Flow

Browser

↓

Route Handler

↓

Gemini

↓

Streaming Response

↓

Browser

## Key Concepts

- Route Handlers protect secrets.
- The browser never owns API keys.
- LLMs are stateless.
