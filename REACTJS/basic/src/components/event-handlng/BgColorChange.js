import React, { useState } from "react";
const BgColorChange = () => {
  const [position, setPosition] = useState({ x: 10, y: 20 });
  const handleMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;
    setPosition({ x, y });
  };
  const { x, y } = position;
  return (
    <section
      style={{ height: "100vh", backgroundColor: `rgb(100,${x},${y})` }}
      onMouseMove={handleMouseMove}
    >
      <h2>Bg color Change</h2>
    </section>
  );
};

export default BgColorChange;
