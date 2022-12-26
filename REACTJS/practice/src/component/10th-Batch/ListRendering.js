import React from "react";
const ListRendering = () => {
  const nums = [10, 20, 30, 40, 50];
  return (
    <>
      <h2>ListRendering</h2>
      <ul>
        {nums.map((val, i) => {
          return <li key={i}>{val}</li>;
        })}
      </ul>
    </>
  );
};

export default ListRendering;
