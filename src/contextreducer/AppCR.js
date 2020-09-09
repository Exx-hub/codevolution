import React, { useReducer } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export const CountContext = React.createContext();
export const DispatchContext = React.createContext();

const initialState = 0;
const reducer = (currState, action) => {
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
};

function AppCR() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <CountContext.Provider value={count}>
        <h1>Global Count - {count}</h1>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </DispatchContext.Provider>
  );
}

export default AppCR;
