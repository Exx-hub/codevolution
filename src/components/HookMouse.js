import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (event) => {
    console.log("mouse event");
    setX(event.clientX);
    setY(event.clientY);
  };

  useEffect(() => {
    console.log("useEffect called / mounted");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("unmounted");
      window.removeEventListener("mousemove", logMousePosition);
    }; // cleanup code. can return a function which removes the eventlistener
  }, []);
  // use empty array as a 2nd parameter to useEffect to specify that
  // you only want it to run once.
  // componentdidmount equivalent

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
}

export default HookMouse;
