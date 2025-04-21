"use client";

import { useEffect } from "react";
import { animate, stagger, utils } from "animejs";

export default function Stagger() {
  useEffect(() => {
    const $squares = document.querySelectorAll(".square");

    function animateGrid() {
      animate($squares, {
        scale: [{ to: [0, 1.25] }, { to: 0 }],
        boxShadow: [
          { to: "0 0 1rem 0 currentColor" },
          { to: "0 0 0rem 0 currentColor" },
        ],
        delay: stagger(100, {
          grid: [11, 4],
          from: utils.random(0, 11 * 4),
        }),
        onComplete: animateGrid, // loop the animation
      });
    }

    animateGrid();
  }, []);

  // 11 rows x 4 columns = 44 squares
  const numRows = 11;
  const numCols = 4;
  const totalSquares = numRows * numCols;

  return (
    <div className="grid grid-cols-4 gap-2 p-6 place-items-center h-screen">
      {Array.from({ length: totalSquares }).map((_, i) => (
        <div
          key={i}
          className="square w-8 h-8 bg-purple-600 rounded-md"
          style={{ transition: "box-shadow 0.2s ease" }}
        />
      ))}
    </div>
  );
}
