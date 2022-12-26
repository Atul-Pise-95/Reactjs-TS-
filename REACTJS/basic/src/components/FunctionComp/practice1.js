import React, { Component, useState } from "react";
// class Demo extends Component {
//   state = {
//     count: 0,
//   };
//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   decrement = () => {
//     this.setState({ count: this.state.count - 1 });
//   };
//   render() {
//     return (
//       <>
//         <h1>Topper Skills count:{this.state.count}</h1>
//         <button onClick={this.increment}>++</button>
//         <button onClick={this.decrement}>--</button>
//       </>
//     );
//   }
// }
// export default Demo;

//function component:
const F = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Toppers Skills Count:{count}</h1>
      <button onClick={increment}>++</button>
      <button onClick={decrement}>--</button>
    </>
  );
};
export default F;
