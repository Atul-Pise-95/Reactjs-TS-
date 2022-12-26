import React, { useEffect, useState } from "react";
const Child = ({ name: title }) => {
  //const title=name;
  //const {name}=props;
  const [Count, setCount] = useState(0);
  //componentDidMount(){}
  //useEffect(callback,[dependencies])
  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  //componentDidUpdate(){}
  useEffect(() => {
    console.log("componentDidUpdate");
  }, [Count]);

  //componentWillUnmount(){}
  useEffect(() => {
    return () => {
      console.log("componentWillUnmount");
    };
  }, []);

  return (
    <>
      <h2>
        child component={title} {Count}
      </h2>
      <button onClick={() => setCount(Count + 1)}>++</button>
      <button onClick={() => setCount(Count - 1)}>--</button>
    </>
  );
};
export default Child;
