"use client";

import type { UIMessage } from "ai";
import { Markdown } from "../markdown";

type MessageProps = {
  message: UIMessage;
};

export function Message({ message }: MessageProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[80%] rounded-xl px-4 py-3 ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-zinc-100 dark:bg-zinc-800"
        }`}
      >
        {message.parts.map((part, index) => {
          if (part.type !== "text") return null;

          return <Markdown key={index}>{part.text}</Markdown>;
        })}
      </div>
    </div>
  );
}
