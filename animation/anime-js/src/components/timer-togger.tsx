"use client";

import { useEffect, useRef } from "react";
import { engine, createTimer, utils } from "animejs";

export default function TimerToggle() {
  const timeSRef = useRef<HTMLDivElement>(null);
  const timeMsRef = useRef<HTMLDivElement>(null);
  const msButtonRef = useRef<HTMLButtonElement>(null);
  const sButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const $timeS = timeSRef.current!;
    const $timeMs = timeMsRef.current!;
    const $ms = msButtonRef.current!;
    const $s = sButtonRef.current!;

    // Create timer in seconds
    createTimer({
      duration: 1,
      loop: true,
      onUpdate: (self) => {
        $timeS.innerHTML = utils.roundPad(self.iterationCurrentTime, 2);
      },
    });

    // Create timer in milliseconds
    createTimer({
      duration: 1000,
      loop: true,
      onUpdate: (self) => {
        $timeMs.innerHTML = utils.roundPad(self.iterationCurrentTime, 2);
      },
    });

    const toggleSetting = () => {
      const isUsingSeconds = engine.timeUnit === "s";
      engine.timeUnit = isUsingSeconds ? "ms" : "s";
      $ms.disabled = isUsingSeconds;
      $s.disabled = !isUsingSeconds;
    };

    $ms.addEventListener("click", toggleSetting);
    $s.addEventListener("click", toggleSetting);

    // Cleanup
    return () => {
      $ms.removeEventListener("click", toggleSetting);
      $s.removeEventListener("click", toggleSetting);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 text-center">
      <h1 className="text-2xl font-bold">Anime.js Timer Toggle</h1>

      <div className="flex gap-6 text-lg">
        <div>
          <div className="font-medium">Seconds Timer</div>
          <div ref={timeSRef} className="time-s text-blue-600 text-3xl">
            0.00
          </div>
        </div>
        <div>
          <div className="font-medium">Milliseconds Timer</div>
          <div ref={timeMsRef} className="time-ms text-red-600 text-3xl">
            0.00
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        <button
          ref={msButtonRef}
          className="toggle px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
        >
          Use ms
        </button>
        <button
          ref={sButtonRef}
          className="toggle px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
          disabled
        >
          Use s
        </button>
      </div>
    </div>
  );
}
