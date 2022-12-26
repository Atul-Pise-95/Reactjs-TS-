import React, { useState } from "react";
const TextDisplay = () => {
  const [val, setVal] = useState("");
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    setText(val);
  };
  return (
    <>
      <h2>Text Display {text}</h2>
      <input text="text" value={val} onChange={handleChange} />
      <br />
      <input text="text" value={val} onChange={handleChange} />
      <br />
      <button onClick={handleSubmit}>hi</button>
    </>
  );
};

export default TextDisplay;
