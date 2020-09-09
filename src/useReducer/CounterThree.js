import React, { useReducer } from "react";

const initialState = { firstCounter: 0 };
const reducer = (currState, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: currState.firstCounter + 1 };
    case "decrement":
      return { firstCounter: currState.firstCounter - 1 };
    case "reset":
      return initialState;
    default:
      return currState;
  }
};

function CounterReducerThree() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>ComplexCounter - Count is {count.firstCounter}</div>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}

export default CounterReducerThree;
