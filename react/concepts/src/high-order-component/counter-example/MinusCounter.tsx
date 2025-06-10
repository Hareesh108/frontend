import React from "react";

interface MinusCounterProps {
  count: number;
  decrement: () => void;
}

const MinusCounter: React.FC<MinusCounterProps> = ({ count, decrement }) => {
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default MinusCounter;
