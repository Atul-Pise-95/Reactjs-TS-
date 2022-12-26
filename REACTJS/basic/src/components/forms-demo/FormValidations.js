import React, { useEffect, useState } from "react";
const FormValidations = () => {
  const [user, setUser] = useState({});
  const [error, SetError] = useState({});

  const handleClick = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
    }
    SetError({
      ...errors,
    });
  }, [user]);
  return (
    <>
      <h2>Form Validations</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" name="name" onClick={handleClick} required />
        <p style={{ color: "red" }}>{error?.name}</p>
        <br />

        <label>Mobile: </label>
        <input type="tel" name="mobile" onClick={handleClick} />
        <p style={{ color: "red" }}>{error?.mobile}</p>
        <br />

        <label>Email: </label>
        <input type="email" name="email" onClick={handleClick} />
        <br />

        <label>Password: </label>
        <input type="password" name="password" onClick={handleClick} />
        <br />
        <input type="submit" value="Resister" />
      </form>
    </>
  );
};

export default FormValidations;
