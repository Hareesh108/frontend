"use client";

import { useEffect } from "react";
import { animate } from "animejs";

export default function BouncyText() {
  useEffect(() => {
    animate("span.bounce-char", {
      y: [
        { to: "-2.75rem", ease: "outExpo", duration: 600 },
        { to: 0, ease: "outBounce", duration: 800, delay: 100 },
      ],
      rotate: {
        from: "-1turn",
        delay: 0,
      },
      delay: (_, i) => i * 50,
      ease: "inOutCirc",
      loopDelay: 1000,
      loop: true,
    });
  }, []);

  const text = "Bounce me!";

  return (
    <div className="flex justify-center items-center h-screen text-4xl font-bold">
      {text.split("").map((char, index) => (
        <span key={index} className="bounce-char inline-block">
          {char}
        </span>
      ))}
    </div>
  );
}
