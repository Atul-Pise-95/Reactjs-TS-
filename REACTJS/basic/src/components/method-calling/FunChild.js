import React, { useImperativeHandle, forwardRef } from "react";
const FunChild = ({ greet }, ref) => {
  const display = (msg) => {
    alert(`display() of child ${msg}`);
  };

  useImperativeHandle(ref, () => ({ display }));
  return (
    <>
      <h2>Function child Component</h2>
      <button onClick={() => greet("Function")}>Call Parent Method</button>
    </>
  );
};

export default forwardRef(FunChild);
