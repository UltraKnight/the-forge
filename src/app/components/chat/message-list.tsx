"use client";

import type { UIMessage } from "ai";
import { Message } from "./message";
import { useEffect, useRef } from "react";
import { EmptyState } from "./empty-state";

type Props = {
  messages: UIMessage[];
};

export function MessageList({ messages }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // bottomRef.current?.scrollIntoView({
    //   behavior: "smooth",
    //   block: "end",
    //   inline: "nearest",
    // });
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  if (messages.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="flex-1 space-y-4 overflow-y-auto py-4">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}

      <div ref={bottomRef} />
    </div>
  );
}
