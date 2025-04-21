"use client";

import { useEffect, useRef } from "react";
import { animate, createTimer, utils } from "animejs";

export default function Lerpe() {
  const inputRef = useRef<HTMLDivElement>(null);
  const lerpedRef = useRef<HTMLDivElement>(null);
  const lerped15Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const $input = inputRef.current;
    const $lerped = lerpedRef.current;
    const $lerped15fps = lerped15Ref.current;

    if (!$input || !$lerped || !$lerped15fps) return;

    // Main rotation animation
    animate($input, {
      rotate: "1000turn",
      modifier: utils.snap(0.25),
      duration: 4000000,
      loop: true,
      ease: "linear",
    });

    // Lerp at 60fps
    createTimer({
      onUpdate: () => {
        const sourceRotate = utils.get($input, "rotate", false);
        const lerpedRotate = utils.get($lerped, "rotate", false);
        utils.set($lerped, {
          rotate: utils.lerp(lerpedRotate, sourceRotate, 0.075) + "turn",
        });
      },
    });

    // Lerp at 15fps
    createTimer({
      frameRate: 15,
      onUpdate: (clock) => {
        const sourceRotate = utils.get($input, "rotate", false);
        const lerpedRotate = utils.get($lerped15fps, "rotate", false);
        utils.set($lerped15fps, {
          rotate:
            utils.lerp(lerpedRotate, sourceRotate, 0.0725, clock) + "turn",
        });
      },
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8 text-center">
      <div className="text-xl font-semibold">Anime.js Rotate with Lerp</div>

      <div className="flex gap-12">
        <div
          ref={inputRef}
          className="w-20 h-20 bg-blue-500 rounded-full"
          style={{ transform: "rotate(0turn)" }}
        />
        <div
          ref={lerpedRef}
          className="w-20 h-20 bg-green-500 rounded-full"
          style={{ transform: "rotate(0turn)" }}
        />
        <div
          ref={lerped15Ref}
          className="w-20 h-20 bg-red-500 rounded-full"
          style={{ transform: "rotate(0turn)" }}
        />
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <div>🔵 Main Rotation</div>
        <div>🟢 Lerp (60fps)</div>
        <div>🔴 Lerp (15fps)</div>
      </div>
    </div>
  );
}
