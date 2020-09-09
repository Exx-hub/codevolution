import { useState } from "react";

function useCounter(initialCount = 0, value) {
  // two parameters used when invocation. can be left blank
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + value);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - value);
  };

  const handleReset = () => {
    setCount(initialCount);
  };

  return [count, handleIncrement, handleDecrement, handleReset];
}

export default useCounter;

// these will be the reusable variables and methods for other components
// to use. just need to call function and destructure variables
