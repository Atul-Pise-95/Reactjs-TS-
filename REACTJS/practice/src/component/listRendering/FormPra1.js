import React, { useState } from "react";
const FormPra1 = () => {
  const [value1, setValue1] = useState({
    fName: "",
    lName: "",
  });
  const handleChange = () => {
    const value = e.target.value;
    const name = e.target.name;
    setValue1((previousValue) => {
      if (name === "fName") {
        return { fName: value, lname: previousValue };
      } else if (name === "fName") {
        return { fName: previousValue, lname: value };
      }
    });
  };

  const handleSubmit = () => {
    e.preventDefault();
  };
  return (
    <>
      <h2>
        Form Inputs {value1.fName} {value1.lName}
      </h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fName" onChange={handleChange} />
        <br />
        <input type="text" name="lName" onChange={handleChange} />
        <br />
        <button>Click</button>
      </form>
    </>
  );
};

export default FormPra1;
