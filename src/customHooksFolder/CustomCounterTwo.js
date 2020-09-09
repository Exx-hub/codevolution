import React from "react";
import useCounter from "../customHooks/useCounter";

function CustomCounterTwo() {
  const [count, handleIncrement, handleDecrement, handleReset] = useCounter(
    50,
    2
  );
  // these are the variables destructured and re-used
  // arguments can be included in useCounter. here 50 and 2 are passed as parameters
  // intitial count is 0 as provided in the useCounter as default parameter

  return (
    <div>
      <h2>Count is: {count}</h2>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}

export default CustomCounterTwo;
