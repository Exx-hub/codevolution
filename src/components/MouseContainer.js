import React, { useState } from "react";
import HookMouse from "./HookMouse";
import ClassMouse from "./ClassMouse";

function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay((prevDisplay) => !prevDisplay)}>
        Toggle
      </button>
      {display && <HookMouse />}
    </div>
  );
}

export default MouseContainer;
