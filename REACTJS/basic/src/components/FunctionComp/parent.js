import React, { useState } from "react";
import Child from "./child";
const Parent = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <br />
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "show"}</button>
      <h2>Parent Component</h2>
      {show && <Child name="Topper Skills" />}
    </>
  );
};
export default Parent;
