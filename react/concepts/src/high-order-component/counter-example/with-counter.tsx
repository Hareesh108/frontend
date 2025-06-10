import React, { useState, ComponentType } from "react";

interface InjectedProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const withCounter = <P extends InjectedProps>(
  WrappedComponent: ComponentType<P>
) => {
  const EnhancedComponent = (props: Omit<P, keyof InjectedProps>) => {
    const [count, setCount] = useState(0);

    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => prev - 1);

    return (
      <WrappedComponent
        {...(props as P)}
        count={count}
        increment={increment}
        decrement={decrement}
      />
    );
  };

  return EnhancedComponent;
};

export default withCounter;
