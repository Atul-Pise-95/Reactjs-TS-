import React, { useState } from "react";
const FuncCompEventH = () => {
  const [name] = useState("Topper Skills");
  const handleclick = () => {
    alert(`Bye ${name}`);
  };
  return (
    <>
      <h2>Function component Event Handling</h2>
      <button onClick={handleclick}>Say Bye</button>
    </>
  );
};

export default FuncCompEventH;
