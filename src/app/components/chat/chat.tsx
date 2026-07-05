"use client";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { ChatInput, MessageList } from ".";

export function Chat() {
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  return (
    <div className="mx-auto flex h-screen max-w-4xl flex-col p-6">
      <MessageList messages={messages} />

      <ChatInput
        disabled={status !== "ready"}
        onSend={(text) => sendMessage({ text })}
      />
    </div>
  );
}
