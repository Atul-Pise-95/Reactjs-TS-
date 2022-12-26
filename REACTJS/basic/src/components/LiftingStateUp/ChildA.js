import React, { useState } from "react";

const ChildA = (props) => {
  const [data, setData] = useState([]);
  return (
    <>
      <h2>ChildA</h2>
      <form onSubmit="submit">
        <input type="text" onChange={(e) => setData(e.target.value)} />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            props.load(data);
          }}
        >
          Click
        </button>
      </form>
    </>
  );
};

export default ChildA;
