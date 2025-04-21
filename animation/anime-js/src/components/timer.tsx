"use client";

import { useEffect, useRef } from "react";
import { createTimer } from "animejs";

export default function Timer() {
  const timeRef = useRef<HTMLSpanElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (timeRef.current && countRef.current) {
      const [$time, $count] = [timeRef.current, countRef.current];

      createTimer({
        duration: 1000, // 1 second per loop
        loop: true, // infinite looping
        frameRate: 30, // smooth updates
        onUpdate: (self) => {
          $time.innerHTML = self.currentTime.toFixed(0);
        },
        onLoop: (self) => {
          $count.innerHTML = self._currentIteration.toString();
        },
      });
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <div className="text-4xl font-semibold mb-4">
        Time:{" "}
        <span ref={timeRef} className="text-blue-600">
          0
        </span>{" "}
        ms
      </div>
      <div className="text-2xl text-gray-700">
        Loop Count:{" "}
        <span ref={countRef} className="text-green-600">
          0
        </span>
      </div>
    </div>
  );
}
