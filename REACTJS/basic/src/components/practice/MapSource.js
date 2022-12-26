import React, { useImperativeHandle, forwardRef } from "react";
const MapSource = (ref) => {
  const sCard = [
    { name: "atul", age: 27 },
    { name: "aakash", age: 26 },
    { name: "vishal", age: 29 },
  ];
  const simple = () => {
    alert("hi");
  };
  useImperativeHandle(ref, () => ({ simple }));
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      {sCard.map((val) => {
        return (
          <div
            style={{
              border: "1px solid red",
              width: 200,
              height: 100,
            }}
          >
            <h2>Name:{val.name}</h2>
            <h2>Age:{val.age}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default forwardRef(MapSource);
