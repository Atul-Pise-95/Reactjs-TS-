import React, { useState } from "react";
const FormPra2 = () => {
  const [val, setVal] = useState({
    fname: "",
    lname: "",
    email: "",
    pass: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventdefault();
  };
  return (
    <>
      <h1>
        Hi {val.fname} {val.lname}
      </h1>
      <p>{val.email}</p>
      <p>{val.pass}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fname"
          value={val.fname}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="lname"
          value={val.lname}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="email"
          value={val.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="pass"
          value={val.pass}
          onChange={handleChange}
        />
        <br />
        <button>Click</button>
      </form>
    </>
  );
};

export default FormPra2;
