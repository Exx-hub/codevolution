import React, { useState, useEffect } from "react";

function UseEff() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("mounted / re-rendered from hook");
    document.title = `Title: Clicked ${count} times`;
  }, [count]);
  // specifying [count] as a parameter tells the useEffect to run or re-render
  // only when the given parameter is changed. in this example, when count is changed
  //componentdidupdate

  const handleClick = () => {
    console.log("button clicked which will trigger update and re-render");
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Hook</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name}
      <button onClick={handleClick}>Clicked {count} times</button>
    </div>
  );
}

export default UseEff;
