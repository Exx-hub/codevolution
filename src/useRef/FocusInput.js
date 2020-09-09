import React, { useRef, useEffect } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("mounted / re-rendered");
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    alert(inputRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default FocusInput;
