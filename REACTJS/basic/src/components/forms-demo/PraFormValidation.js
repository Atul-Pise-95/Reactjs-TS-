import React, { useEffect, useState } from "react";
const PraFormValidation = () => {
  const [user, setUser] = useState({});
  const [error, SetError] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    console.log("submitted...", user);
    e.preventDefault();
  };

  //
  useEffect(() => {
    const errors = {};
    if (!user?.name) {
      errors.name = "Name is required!";
    } else if (user?.name?.length < 3) {
      errors.name = "Name must be atleast 3 character long.";
    } else if (user?.name?.length > 45) {
      errors.name = "Name should not exceeds 45 character long.";
    } else if (!/^[a-zA-Z]+$/.test(user?.name)) {
      errors.name = "Name must be alphabets only.";
    }

    //mobile
    if (!/^[0-9]{10,12}$/.test(user?.mobile)) {
      errors.mobile = "Mobile should be 10 Character long.";
    } else if (
      user?.mobile?.charCodeAt() >= 48 &&
      user?.mobile?.charCodeAt() <= 57
    ) {
      errors.mobile = "Only numbers are allowed";
    }
    SetError({
      ...errors,
    });
  }, [user]);
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Form Validations</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          border: "1px solid black",
          width: 350,
          padding: "30px 30px 30px 30px",
          display: "block",
          margin: "auto",
          marginTop: 30,
          backgroundColor: "hotpink",
        }}
      >
        <label>Name: </label>
        <input type="text" name="name" onChange={handleChange} />
        <p style={{ color: "red" }}>{error?.name}</p>
        <br />
        <label>Mobile: </label>
        <input type="tel" name="mobile" onChange={handleChange} />
        <p style={{ color: "red" }}>{error?.mobile}</p>
        <br />
        <label>Email: </label>
        <input type="email" name="email" onChange={handleChange} />
        <br />
        <label>Password: </label>
        <input type="password" name="password" onChange={handleChange} />
        <br />
        <input
          type="submit"
          value="Resister"
          style={{ marginTop: 30, backgroundColor: "green" }}
        />
      </form>
    </>
  );
};

export default PraFormValidation;
