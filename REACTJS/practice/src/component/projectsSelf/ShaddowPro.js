import React, { useState } from "react";
import "./range.module.css";
const ShaddowPro = () => {
  const [hor, setHor] = useState(10);
  const [ver, setVer] = useState(10);
  const [blur, setBlur] = useState(13);
  const [colr, setColr] = useState("#000");

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: 150,
      }}
    >
      <div>
        <label>Horizontal</label>
        <br />
        <input
          type="range"
          min="-200"
          max="200"
          value={hor}
          onChange={(e) => setHor(e.target.value)}
        />
        <br />
        <br />
        <label>Vertical</label>
        <br />
        <input
          type="range"
          min="-200"
          max="200"
          value={ver}
          onChange={(e) => setVer(e.target.value)}
        />
        <br />
        <br />
        <label>Blur</label>
        <br />
        <input
          type="range"
          value={blur}
          onChange={(e) => setBlur(e.target.value)}
        />
        <br />
        <br />
        <label>color</label>
        <br />
        <input
          type="color"
          value={colr}
          onChange={(e) => setColr(e.target.value)}
        />
        <br />
      </div>
      <div
        style={{
          width: 300,
          height: 300,
          backgroundColor: "cyan",
          boxShadow: `${hor}px ${ver}px ${blur}px ${colr}`,
        }}
      >
        <h2>ShaddowPro</h2>
      </div>
    </section>
  );
};

export default ShaddowPro;
