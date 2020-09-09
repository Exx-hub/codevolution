import React, { useContext } from "react";
import { CountContext, DispatchContext } from "./AppCR";

function ComponentA() {
  const count = useContext(CountContext);
  const dispatch = useContext(DispatchContext);

  return (
    <div>
      <h1>CompA {count}</h1>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
}

export default ComponentA;
