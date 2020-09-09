import React, { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  // const incrementAge = () => {
  //   setAge((prevAge) => prevAge + 1);
  // };

  // above equals to this when using useCallback. 2nd param is dependency
  const incrementAge = useCallback(() => {
    setAge((prevAge) => prevAge + 1);
  }, [age]);

  // const incrementSalary = () => {
  //   setSalary((prevSalary) => prevSalary + 1000);
  // };

  // same for this one
  const incrementSalary = useCallback(() => {
    setSalary((prevSalary) => prevSalary + 1000); // useCallback caches the function setsalary that return a value for the state
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default ParentComponent;
