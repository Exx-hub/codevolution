import React, { useState } from "react";
import useDocumentTitle from "../customHooks/useDocumentTitle";

function DocTitleTwo() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("mounted / re-rendered from 2");
  //   document.title = `Count ${count}`;
  // }, [count]);

  // will convert to custom hook. pass this function to a new function and call that
  // funtion here instead as a hook. dont forget to import that custom hook
  // to be used here

  useDocumentTitle(count);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <div>
        <button onClick={handleIncrement}>Count - {count}</button>
      </div>
    </div>
  );
}

export default DocTitleTwo;
