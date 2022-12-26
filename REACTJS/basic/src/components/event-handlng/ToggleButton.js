import React, { useState } from "react";
const ToggleButton = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <h2>Hide</h2>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show && <p>{"Welcome".repeat(100)}</p>}
    </>
  );
};

export default ToggleButton;
