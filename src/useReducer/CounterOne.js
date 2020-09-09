import React, { useReducer } from "react"; // step one import usereducer

const initialState = 0;
const reducer = (currState, action) => {
  // step 3 define reducer and intial state
  switch (action) {
    case "increment":
      return currState + 1;
    case "decrement":
      return currState - 1;
    case "reset":
      return initialState;
    default:
      return currState;
  }
}; // reducer function return new state value

function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialState);
  // step 2 call usereducer

  return (
    <div>
      <div>Count is: {count}</div>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
}

export default CounterOne;
