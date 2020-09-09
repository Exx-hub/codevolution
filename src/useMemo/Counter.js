import React, { useState, useMemo } from "react";
import CounterOne from "../useReducer/CounterOne";

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne((prevcount) => prevcount + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    // takes two params, 1st the function then the dependency
    let i = 0;
    while (i < 1000000000) i++;
    return counterOne % 2 === 0; // use memo caches the value true / false
  }, [counterOne]);

  //   const isEven = () => {
  //     let i = 0;
  //     while (i < 400000000) i++;
  //     return counterOne % 2 === 0;
  //   }

  // converted to use memo to prevent slowdown of app

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count one - {counterOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count two - {counterTwo}</button>
        <span>{counterTwo % 2 === 0 ? "Even" : "Odd"}</span>
      </div>
    </div>
  );
}

export default Counter;
