import React, { useState } from "react";
const SimpleForm = () => {
  const [state, setState] = useState({});
  const handlehange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        onChange={handlehange}
        placeholder="Name"
      />
      <br />
      <input
        type="text"
        name="mobile"
        onChange={handlehange}
        placeholder="Mobile"
      />
      <br />
      <input type="email" name="email" onChange={handlehange} />
      <br />
      <input type="Password" name="password" onChange={handlehange} />
      <br />
      <select onChange={handlehange}>
        <option>City</option>
        <option>Pune</option>
        <option>Mumbai</option>
      </select>
      <button>Submit</button>
    </form>
  );
};

export default SimpleForm;
