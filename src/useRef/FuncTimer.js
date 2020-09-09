import React, { useState, useEffect, useRef } from "react";

function FuncTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    console.log("func timer mounted / re-rendered");

    // const interval = setInterval(
    //   () => setTimer((prevTimer) => prevTimer + 1),
    //   1000
    // );

    //above replaced with below

    intervalRef.current = setInterval(
      () => setTimer((prevTimer) => prevTimer + 1),
      1000
    );

    return () => {
      console.log("unmounted");
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleClick = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      Function Timer - {timer}
      <div>
        <button onClick={handleClick}>Clear timer</button>
      </div>
    </div>
  );
}

export default FuncTimer;
