"use client";

import type { UIMessage } from "ai";
import { Message } from "./message";

type Props = {
  messages: UIMessage[];
};

export function MessageList({ messages }: Props) {
  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}
