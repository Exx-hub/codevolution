import React, { useReducer } from "react";

const initialState = 0;
const reducer = (currState, action) => {
  switch (action) {
    case "increment":
      return currState + 1;
    case "decrement":
      return currState - 1;
    case "reset":
      return initialState;
  }
};

function MultiReducerCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <div>Counter One is {count}</div>
        <button onClick={() => dispatch("increment")}>increment</button>
        <button onClick={() => dispatch("decrement")}>decrement</button>
        <button onClick={() => dispatch("reset")}>reset</button>
      </div>

      <div>
        <div>Counter Two is {countTwo}</div>
        <button onClick={() => dispatchTwo("increment")}>increment</button>
        <button onClick={() => dispatchTwo("decrement")}>decrement</button>
        <button onClick={() => dispatchTwo("reset")}>reset</button>
      </div>
    </div>
  );
}

export default MultiReducerCounter;
