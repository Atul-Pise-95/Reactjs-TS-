import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState(0);
  const handleIncrement = () => {
    setData(data + 1);
  };

  const handleDecrement = () => {
    setData(data - 1);
  };
  return (
    <>
      <h2>App Component-{data}</h2>
      <button onClick={handleIncrement} disabled={data == 10 ? true : false}>
        ++
      </button>
      <br />
      <button onClick={handleDecrement} disabled={data == 0 ? true : false}>
        --
      </button>
    </>
  );
};

export default App;
