import React, { createRef, useRef } from "react";
import ClassChild from "./ClassChild";
import FunChild from "./FunChild";
const Parent = () => {
  const classRef = React.createRef();
  const funRef = useRef({});
  const greet = (Name) => {
    alert(`Hello ${Name}`);
  };
  return (
    <>
      <h2>Parent</h2>
      <button
        onClick={() => classRef.current.print("calling from class Child")}
      >
        class child method calling from parent
      </button>
      <button
        onClick={() => funRef.current.display("Calling from Function Child")}
      >
        Function child method calling from parent
      </button>
      <hr />
      <ClassChild greet={greet} ref={classRef} />
      <br />
      <FunChild greet={greet} ref={funRef} />
    </>
  );
};

export default Parent;
