import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const handleChange = (event) => {
    setName({
      ...name,
      [event.target.name]: event.target.value,
    });

    //     setName((prevName) => {
    //       return {
    //         ...prevName,
    //         [event.target.name]: event.target.value,
    //       };
    //     });
    // i dont know why this doesnt work yet -------------------
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="firstName"
          value={name.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={name.lastName}
          onChange={handleChange}
        />
        <h2>Your first name is - {name.firstName}</h2>
        <h2>Your last name is - {name.lastName}</h2>
      </form>
      {JSON.stringify(name)}
    </div>
  );
}

export default HookCounterThree;
