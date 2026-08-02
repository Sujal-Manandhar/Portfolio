import { useEffect, useState } from "react";

interface TypewriterOptions {
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseFor?: number;
}

/** Cycles through phrases with a type / pause / delete loop. */
export function useTypewriter(
  phrases: readonly string[],
  { typeSpeed = 90, deleteSpeed = 45, pauseFor = 1600 }: TypewriterOptions = {},
) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (phrases.length === 0) return;
    const current = phrases[index % phrases.length] ?? "";

    if (!isDeleting && text === current) {
      const timer = window.setTimeout(() => setIsDeleting(true), pauseFor);
      return () => window.clearTimeout(timer);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timer = window.setTimeout(
      () => {
        setText((prev) =>
          isDeleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
        );
      },
      isDeleting ? deleteSpeed : typeSpeed,
    );

    return () => window.clearTimeout(timer);
  }, [text, isDeleting, index, phrases, typeSpeed, deleteSpeed, pauseFor]);

  return text;
}
