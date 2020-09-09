import React from "react";
import { UserContext } from "./AppContext";

function ComponentD() {
  return (
    <UserContext.Consumer>
      {(obj) => {
        return <div>Comp D {obj.name}</div>;
      }}
    </UserContext.Consumer>
  );
}

export default ComponentD;
