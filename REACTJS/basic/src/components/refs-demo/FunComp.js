import React, { forwardRef } from "react";
const FunComp = forwardRef((props, ref) => {
  return (
    <>
      <h2>Function Component</h2>
      <input type="text" placeholder="Function Component" ref={ref} />
    </>
  );
});

export default FunComp;
