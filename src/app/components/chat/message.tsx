"use client";

import type { UIMessage } from "ai";

type MessageProps = { message: UIMessage };

export function Message({ message }: MessageProps) {
  return (
    <div className="mb-6">
      <strong>{message.role === "user" ? "You" : "AI"}</strong>

      <div className="mt-2">
        {message.parts.map((part, index) => {
          if (part.type !== "text") return null;

          return <p key={index}>{part.text}</p>;
        })}
      </div>
    </div>
  );
}
