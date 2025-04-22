"use client";

import { useEffect, useRef } from "react";
import { utils, animate, createScope } from "animejs";

export default function ScopeClickAnimator() {
  const squareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const square = squareRef.current;
    if (!square) return;

    const scope = createScope({
      mediaQueries: { isSmall: "(max-width: 200px)" },
    }).add((self) => {
      self.add("onClick", (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { isSmall } = self.matches;

        animate(square, {
          rotate: isSmall ? "+=360" : 0,
          x: isSmall ? 0 : clientX - window.innerWidth / 2,
          y: isSmall ? 0 : clientY - window.innerHeight / 2,
          duration: isSmall ? 750 : 400,
        });
      });

      // Cursor style update
      utils.set(document.body, {
        cursor: self.matches.isSmall ? "alias" : "crosshair",
      });
    });

    document.addEventListener("click", scope.methods.onClick);

    // Cleanup
    return () => {
      document.removeEventListener("click", scope.methods.onClick);
      utils.set(document.body, { cursor: "default" });
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        ref={squareRef}
        className="square w-24 h-24 bg-purple-500 rounded shadow-xl"
        style={{ transform: "translate(0px, 0px)" }}
      />
    </div>
  );
}
