import React from "react";

interface AddCounterProps {
  count: number;
  increment: () => void;
}

const AddCounter: React.FC<AddCounterProps> = ({ count, increment }) => {
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default AddCounter;
