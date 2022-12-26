import React, { useRef } from "react";
import ClassChild from "./ClassChild";
import FunChild from "./FunChild";

const Parent = () => {
  const classRef = React.createRef();
  const funRef = useRef({});
  const greet = (name) => {
    alert(`Hello ${name}`);
  };
  return (
    <>
      <button onClick={() => classRef.current.print("Calling from Parent")}>
        Call class Child Method
      </button>
      <button onClick={() => funRef.current.display("Calling from Parent")}>
        Call Function Child Method
      </button>
      <hr />
      <ClassChild greet={greet} ref={classRef} />
      <hr />
      <FunChild greet={greet} ref={funRef} />
    </>
  );
};

export default Parent;
