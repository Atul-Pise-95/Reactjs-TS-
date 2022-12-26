import React, { createRef } from "react";
import FunComp from "./FunComp";
import ClassComp from "./ClassComp";
const RefToComp = () => {
  const funRef = createRef();
  const classRef = createRef();

  const handleClick = () => {
    console.log("FunRef: ", funRef.current);
    console.log("ClassRef: ", classRef.current);
  };

  return (
    <>
      <ClassComp ref={classRef} />
      <hr />
      <FunComp ref={funRef} />
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => classRef.current.focusInput()}>
        Focus class child input
      </button>
      <button onClick={() => funRef.current.focus()}>
        Focus Function child input
      </button>
    </>
  );
};

export default RefToComp;

//cheack output in console function component is null class component is object.
