import React, { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

const Parent = () => {
  const [ndata, setNdata] = useState([]);
  const load = (data) => {
    setNdata(data);
  };
  return (
    <>
      <h2>App-{ndata}</h2>
      <ChildA load={load} />
      <ChildB prop={ndata} />
    </>
  );
};

export default Parent;
