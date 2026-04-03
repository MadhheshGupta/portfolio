"use client";

import { useEffect, useState } from "react";

export function useTypewriter(
  words: readonly string[],
  typingSpeed = 80,
  deletingSpeed = 45,
  pauseMs = 2000
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];

    if (!isDeleting) {
      if (text === word) {
        const t = window.setTimeout(() => setIsDeleting(true), pauseMs);
        return () => window.clearTimeout(t);
      }
      const t = window.setTimeout(
        () => setText(word.slice(0, text.length + 1)),
        typingSpeed
      );
      return () => window.clearTimeout(t);
    }

    if (text === "") {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = window.setTimeout(
      () => setText(word.slice(0, text.length - 1)),
      deletingSpeed
    );
    return () => window.clearTimeout(t);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseMs]);

  return text;
}
