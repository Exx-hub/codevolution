import React, { useReducer } from "react";

const initialState = { firstCounter: 0, secondCounter: 10 };
const reducer = (currState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...currState,
        firstCounter: currState.firstCounter + action.value,
      };
    case "decrement":
      return {
        ...currState,
        firstCounter: currState.firstCounter - action.value,
      };
    case "increment2":
      return {
        ...currState,
        secondCounter: currState.secondCounter + action.value,
      };
    case "decrement2":
      return {
        ...currState,
        secondCounter: currState.secondCounter - action.value,
      };
    case "reset":
      return initialState;
    default:
      return currState;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>FirstCounter is: {count.firstCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        decrement 5
      </button>
      <div>SecondCounter is: {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
        incrementTwo
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        decrementTwo
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 5 })}>
        incrementTwo 5
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 5 })}>
        decrementTwo 5
      </button>
      <div>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      </div>
    </div>
  );
}

export default CounterTwo;
