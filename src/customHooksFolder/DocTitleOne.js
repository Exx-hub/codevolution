import React, { useState } from "react";
import useDocumentTitle from "../customHooks/useDocumentTitle";

function DocTitleOne() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useDocumentTitle(count);

  return (
    <div>
      <div>
        <button onClick={handleIncrement}>Count - {count}</button>
      </div>
    </div>
  );
}

export default DocTitleOne;
