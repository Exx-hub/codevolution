import React, { useContext } from "react";
import { CountContext, DispatchContext } from "./AppCR";

function ComponentD() {
  const count = useContext(CountContext);
  const dispatch = useContext(DispatchContext);

  return (
    <div>
      <div>CompD {count}</div>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
}

export default ComponentD;
