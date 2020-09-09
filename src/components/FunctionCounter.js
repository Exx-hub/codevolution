import React, { useState } from "react";

const FunctionCounter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <button onClick={handleIncrement}>FCount {count}</button>
    </div>
  );
};

export default FunctionCounter;
