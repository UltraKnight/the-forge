"use client";

import React, { useState } from "react";

type Props = {
  onSend: (text: string) => void;
  disabled: boolean;
};

export function ChatInput({ onSend, disabled }: Props) {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const value = input.trim();

    if (!value) return;

    onSend(value);

    setInput("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 border-t pt-4">
      <input
        className="flex-1 rounded border p-3"
        placeholder="Ask me anything..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={disabled}
      />

      <button
        className="rounded bg-black px-4 py-2 text-white disabled:opacity-50"
        disabled={disabled}
        type="submit"
      >
        Send
      </button>
    </form>
  );
}
