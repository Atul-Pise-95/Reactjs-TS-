import React, { useState } from "react";
const ControlledComp = () => {
  const [user, setUser] = useState({ name: "", mobile: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleNameChange = (e) => {
    const { name, value } = e.target;

    const str = value.replace(/[\s]+/g, "-");

    setUser({ name: str });
  };
  const handleMobileChange = (e) => {
    const { value } = e.target;

    // remove all the spaces
    const strs = value.replace(/[\s-]+/g, "");
    let str = "";
    for (let i = 0; i < strs.length; i += 3) {
      if (i == 0) {
        str += `${strs.substr(i, 3)}`;
      } else {
        str += `-${strs.substr(i, 3)}`;
      }
    }

    setUser({ mobile: str });
  };

  const handleAltMobileChange = (e) => {
    const { value } = e.target;

    // (91)1234-567-899

    const lastCh = value[value.length - 1];

    if (lastCh == ")") {
      value?.length <= 4 && setUser({ ...user, amobile: "" });
    } else if (lastCh?.charCodeAt() >= 48 && lastCh?.charCodeAt() <= 57) {
      const strs = value.replace(/[\s-()]+/g, "");
      // (56)3456-345-634
      const cc = strs.slice(0, 2);
      const remaining = strs.slice(2);

      const ss = `${remaining.slice(0, 4)}${
        remaining.length > 4 ? "-" : ""
      }${remaining.slice(4, 7)}${
        remaining?.length > 7 ? "-" : ""
      }${remaining.slice(7, 10)}`;
      setUser({ ...user, amobile: `(${cc})${ss}` });
    } else {
      const sstr = value.slice(0, value.length - 1);
      setUser({ ...user, amobile: sstr });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <p>
        If you manages the value of a form control then it is called controlled
        component
      </p>
      <p>The form control should have single source of truth</p>

      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={user?.name}
          onChange={handleNameChange}
        />
        <br />
        <label>Mobile: </label>
        <input
          type="tel"
          name="mobile"
          value={user?.mobile}
          onChange={handleMobileChange}
        />
        <br />
        <label>Alt Mobile: </label>
        <input
          type="tel"
          name="amobile"
          value={user?.amobile}
          onChange={handleAltMobileChange}
        />
        <br />
        <label>Email: </label>
        <input type="email" name="email" onChange={handleChange} />

        <br />
        <label>Password: </label>
        <input type="password" name="password" onChange={handleChange} />
        <br />
        <input type="submit" value="Register" />
      </form>
    </>
  );
};

export default ControlledComp;
