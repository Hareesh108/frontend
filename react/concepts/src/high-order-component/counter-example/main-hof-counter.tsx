import React from "react";
import withCounter from "./with-counter";
import AddCounter from "./AddCounter";
import MinusCounter from "./MinusCounter";

const EnhancedAdd = withCounter(AddCounter);
const EnhancedMinus = withCounter(MinusCounter);

const MainHOFCounter: React.FC = () => {
  return (
    <div>
      <h1>HOC Counter Example (TypeScript)</h1>
      <EnhancedAdd />
      <EnhancedMinus />
    </div>
  );
};

export default MainHOFCounter;
