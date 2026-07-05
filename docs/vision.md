# Forge

> An AI Developer Workspace for Frontend Engineers.

---

# Mission

Forge is not another chatbot.

Forge is a collection of AI-powered developer tools that help engineers understand, analyze, improve, document, and transform frontend applications.

The goal is to become the tool I wish existed as a frontend engineer.

---

# Vision

Imagine one ecosystem.

Browser Extension

+

VS Code Extension

+

Web Application

+

CLI

+

MCP Server

Everything connected.

---

# Browser Extension

Inspect any website.

Understand:

- React
- Vue
- Angular
- Next.js
- Astro
- Tailwind
- HTML/CSS architecture

Generate:

- Component tree
- Design system
- Accessibility report
- Performance report
- Lighthouse suggestions
- Bundle analysis
- Reusable components
- Design tokens

Then ask:

> Explain this page.

> Suggest improvements.

> Convert this page to another framework.

---

# VS Code Extension

Highlight any code.

Right click.

Forge →

- Explain
- Improve
- Refactor
- Generate Storybook
- Generate tests
- Document
- Convert framework
- Detect duplicated logic
- Optimize performance

---

# Web Application

Acts as the control center.

Features:

- Multi-provider chat
- Prompt playground
- Model comparison
- Tool calling
- MCP Inspector
- Conversation history
- AI Debug Panel
- Provider configuration
- RAG
- Knowledge base

---

# MCP Server

Provide developer tools such as:

- read_file()
- write_file()
- search_docs()
- search_github()
- create_issue()
- run_tests()
- search_components()
- read_package_json()

---

# CLI

Allow developers to use Forge without leaving the terminal.

Examples:

forge explain

forge test

forge refactor

forge docs

forge storybook

forge audit

---

# Knowledge Engine

Teach Forge about:

- React
- Next.js
- Tailwind
- Design systems
- Company documentation
- Personal projects

Forge should answer using trusted knowledge instead of guessing.

---

# Long-term Architecture

Frontend

↓

Next.js

↓

Provider Layer

↓

OpenAI

Claude

Gemini

Ollama

↓

AI SDK

↓

MCP

↓

Tool Layer

↓

GitHub

Filesystem

Browser

VS Code

↓

Knowledge Layer

↓

Embeddings

Vector Database

RAG

↓

Storage

↓

Supabase / PostgreSQL

---

# Engineering Principles

- Learn AI from first principles.
- Build production-quality software.
- Prefer architecture over shortcuts.
- Stay provider-agnostic.
- Follow official documentation.
- Build features incrementally.
- Keep the codebase maintainable.
- Understand every abstraction before using it.

---

# Success Criteria

Forge should become a tool that frontend developers actually want to use.

The repository should demonstrate:

- Frontend Engineering
- AI Engineering
- Software Architecture
- Product Thinking
- Developer Experience (DX)

rather than simply showing that an LLM API can be called.
