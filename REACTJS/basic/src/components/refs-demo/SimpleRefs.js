import React from "react";
const SimpleRefs = () => {
  const inputRefs = React.createRef();
  const handleClick = () => {
    inputRefs.current.focus();
  };
  //use callback refs
  let inputNode;
  const CBref = (element) => {
    inputNode = element;
  };
  const handleClick2 = () => {
    inputNode.focus();
  };
  return (
    <>
      <h2>SimpleRefs</h2>
      <input type="text" ref={inputRefs} />
      <button onClick={handleClick}>Focus</button>
      <hr />
      <input type="text" ref={CBref} />
      <button onClick={handleClick2}>Focus</button>
    </>
  );
};

export default SimpleRefs;
