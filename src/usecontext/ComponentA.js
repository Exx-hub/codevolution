import React from "react";
import { UserContext } from "./AppContext";

function ComponentA() {
  return (
    <UserContext.Consumer>
      {(obj) => {
        return (
          <div>
            <h1>Comp A</h1>
            {obj.count}
            <br />
            <button onClick={obj.handleClick}>Change Count</button>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}

export default ComponentA;
