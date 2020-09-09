import React from "react";
import useInput from "../customHooks/useInput";

function UserFormTwo() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindlastName, resetlastName] = useInput("");

  const handleClick = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}!`);
    resetFirstName();
    resetlastName();
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <div>
          <label>First Name</label>
          <input type="text" {...bindFirstName} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" {...bindlastName} />
        </div>
        <button>Submit</button>
      </form>
      {firstName} {lastName}
    </div>
  );
}

export default UserFormTwo;
