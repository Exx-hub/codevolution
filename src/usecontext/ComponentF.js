import React from "react";
import { UserContext } from "./AppContext";

function ComponentF() {
  return (
    <UserContext.Consumer>
      {(obj) => {
        return <div>comp F {obj.count}</div>;
      }}
    </UserContext.Consumer>
  );
}

export default ComponentF;
