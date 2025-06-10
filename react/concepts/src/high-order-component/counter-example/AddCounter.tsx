import React from "react";

interface AddCounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const AddCounter: React.FC<AddCounterProps> = ({
  count,
  increment,
  decrement,
}) => {
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default AddCounter;
