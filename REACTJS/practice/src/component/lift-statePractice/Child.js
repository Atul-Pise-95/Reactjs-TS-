import React, { useState } from "react";
const Child = ({ getUser }) => {
  const [user, setUser] = useState("");

  return (
    <>
      <h2>Child</h2>
      <input type="text" onChange={(e) => setUser(e.target.value)} />
      <button onClick={() => getUser(user)}>click</button>
    </>
  );
};

export default Child;
