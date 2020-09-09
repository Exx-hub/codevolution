import React, { useContext } from "react";
import { CountContext, ClickContext } from "./AppContext";

function ComponentZ() {
  const count = useContext(CountContext);
  const click = useContext(ClickContext);

  return (
    <div>
      <h1>Comp z</h1>
      <p>{count}</p>
      <button onClick={click}>hook context click me</button>
    </div>
  );
}

export default ComponentZ;

//        <UserContext.Consumer>
//         {(obj) => {
//           return <div>{obj.name}</div>;
//         }}
//         </UserContext.Consumer>
