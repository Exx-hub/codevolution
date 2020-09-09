import React, { useState } from "react";

const FunctionCounterTwo = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount((prevCount) => {
      return prevCount - 1;
    });
  };

  //   const handleIncrement = () => {
  //     setCount((prevCount) => prevCount + 1);
  //   };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      {count}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default FunctionCounterTwo;
