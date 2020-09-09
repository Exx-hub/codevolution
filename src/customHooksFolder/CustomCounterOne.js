import React, { useState } from "react";

function CustomCounterOne() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  // if using custom hook useCounter, this is the code
  // replace state and methods above with

  // const [count, handleIncrement,handleDecrement, handleReset] = useCounter()

  return (
    <div>
      <h2>Count is: {count}</h2>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}

export default CustomCounterOne;
