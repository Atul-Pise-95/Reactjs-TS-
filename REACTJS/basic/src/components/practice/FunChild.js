import React, { forwardRef, useImperativeHandle } from "react";
const FunChild = ({ greet }, ref) => {
  const display = (msg) => {
    alert(`display of function child ${msg}`);
  };
  useImperativeHandle(ref, () => ({ display }));
  return (
    <>
      <h2>Function Child</h2>
      <button onClick={() => greet("Function")}>Function child</button>
    </>
  );
};

export default forwardRef(FunChild);
