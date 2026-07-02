"use client";

import { useEffect, useState } from "react";

export default function Typewriter({ text, speed = 45, startDelay = 400, className = "" }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let interval;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={className}>
      {text.slice(0, count)}
      <span
        aria-hidden="true"
        className={`ml-0.5 inline-block w-[2px] translate-y-[2px] bg-accent ${
          done ? "animate-pulse" : ""
        }`}
        style={{ height: "0.85em" }}
      />
    </span>
  );
}
