import React, { useState } from "react";
const IncDec = () => {
  const [state, setState] = useState(0);
  const inc = () => {
    setState(state + 1);
  };
  const dec = () => {
    if (state > 0) {
      setState(state - 1);
    } else {
      alert("Negative value not allowed");
      setState(0);
    }
  };
  return (
    <>
      <h2>Increment Decrement</h2>
      <h1>{state}</h1>
      <br />
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>decrement</button>
    </>
  );
};

export default IncDec;
