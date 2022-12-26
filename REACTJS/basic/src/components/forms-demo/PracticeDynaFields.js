import React, { useState } from "react";
const PracticeDynaFields = () => {
  const [user, setUser] = useState({
    name: "",
    mobiles: ["", ""],
    email: "",
  });
  const handleClick = () => {
    setUser({ ...user, mobiles: [...user.mobiles, ""] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2>Practice Dynamic Fields</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" name="name" />
        <label>Mobile: </label>
        {user?.mobiles?.map((mob, i) => {
          <div key={mob + i}>
            <input type="text" name={i} />
          </div>;
        })}
        <label>Email: </label>
        <input type="text" name="email" />
      </form>
    </div>
  );
};

export default PracticeDynaFields;
