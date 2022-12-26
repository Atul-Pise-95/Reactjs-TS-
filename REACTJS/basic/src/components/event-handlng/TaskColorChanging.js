import React, { useState } from "react";
const colr1 = "#FF0000";
const colr2 = "#0000FF";
const colr3 = "#008000";
const colr4 = "#FFFF00";
const cyan = "#00FFFF";
const ColorChanging = () => {
  const [change, setChange] = useState(cyan);
  const handleClick1 = () => {
    setChange(colr1);
  };
  const handleClick2 = () => {
    setChange(colr2);
  };
  const handleClick3 = () => {
    setChange(colr3);
  };
  const handleClick4 = () => {
    setChange(colr4);
  };
  return (
    <>
      <div
        style={{
          backgroundColor: change,
          width: 500,
          height: 400,
          display: "flex",
          margin: "auto",
        }}
      ></div>
      <section
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: 40,
        }}
      >
        <button onClick={handleClick1} style={{ backgroundColor: "red" }}>
          RED
        </button>
        <button onClick={handleClick2} style={{ backgroundColor: "blue" }}>
          BLUE
        </button>
        <button onClick={handleClick3} style={{ backgroundColor: "green" }}>
          Green
        </button>
        <button onClick={handleClick4} style={{ backgroundColor: "yellow" }}>
          YELLOW
        </button>
      </section>
    </>
  );
};

export default ColorChanging;
