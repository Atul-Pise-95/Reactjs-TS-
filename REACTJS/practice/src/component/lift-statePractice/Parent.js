import React, { useState } from "react";
import Child from "./Child";
const Parent = () => {
  const [state, setState] = useState([]);
  const getUser = (user) => {
    setState([...state, user]);
  };
  return (
    <>
      <h2>Parent</h2>
      <Child getUser={getUser} />
      <ul>
        {state.map((ap, i) => (
          <li key={ap + i}>{ap}</li>
        ))}
      </ul>
    </>
  );
};

export default Parent;
