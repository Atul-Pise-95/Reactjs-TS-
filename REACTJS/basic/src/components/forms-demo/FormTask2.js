import React, { useState } from "react";
const FormTask2 = () => {
  const [user, setUser] = useState({ name: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleMobileChange = (e) => {
    const { value } = e.target;
    const str = "";
    const str1 = value.replace(/^\(0\d{1,2}\)\d{3}-\d{4}$/);
    setUser({ name: str });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted... ", user);
  };
  return (
    <>
      <h2>FormTask2</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={user?.name}
          onChange={handleChange}
        />
        <br />
        <label>Mobile: </label>
        <input
          type="tel"
          name="mobile"
          value={user?.mobile}
          onChange={addHyphen}
        />
        <br />
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={user?.email}
          onChange={handleChange}
        />
        <br />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={user?.password}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Register" />
      </form>
    </>
  );
};

export default FormTask2;
