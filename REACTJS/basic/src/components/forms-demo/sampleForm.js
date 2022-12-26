import React, { useState } from "react";
const SampleForm = () => {
  const [user, setUser] = useState({ agree: false });
  const hamdleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted...", user);
  };
  return (
    <>
      <h3>Sample Form - {user?.name}</h3>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" name="name" onChange={hamdleChange} />
        <br />
        <label>Mobile: </label>
        <input type="text" name="mobile" onChange={hamdleChange} />
        <br />
        <label>Gender: </label>
        <input
          type="radio"
          name="gender"
          value="male"
          id="male"
          onChange={hamdleChange}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          value="female"
          id="female"
          onChange={hamdleChange}
        />
        <label htmlFor="female">Female</label>
        <br />
        <select name="city" onChange={hamdleChange}>
          <option value="Pune">Pune</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Nashik">Nashik</option>
          <option value="Delhi">Delhi</option>
        </select>
        <br />
        <input
          type="checkbox"
          name="agree"
          id="agree"
          onChange={() =>
            setUser((state) => ({ ...user, agree: !state.agree }))
          }
        />
        <label htmlFor="agree">
          <mark>I agree the terms and conditions</mark>
        </label>
        <br />
        <input type="submit" />
      </form>
    </>
  );
};

export default SampleForm;
