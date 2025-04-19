"use client";

import { useEffect, useRef } from "react";
import { createTimeline } from "animejs";

export default function Timeline() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const timelineRef = useRef<any>(null);

  useEffect(() => {
    const tl = createTimeline({ defaults: { duration: 750 } });
    timelineRef.current = tl;

    tl.label("start")
      .add(".square", { x: "15rem" }, 500)
      .add(".circle", { x: "15rem" }, "start")
      .add(".triangle", { x: "15rem", rotate: "1turn" }, "<-=500");
  }, []);

  const handleReset = () => {
    if (timelineRef.current) {
      timelineRef.current.restart();
    }
  };

  return (
    <div className="flex flex-col justify-center items-start gap-6 h-screen px-10">
      <div className="square w-20 h-20 bg-red-500" />
      <div className="circle w-20 h-20 bg-blue-500 rounded-full" />
      <div
        className="triangle"
        style={{
          width: 0,
          height: 0,
          borderLeft: "2.5rem solid transparent",
          borderRight: "2.5rem solid transparent",
          borderBottom: "5rem solid green",
        }}
      />

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
