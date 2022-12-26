import React, { useState } from "react";
// class A extends React.Component {
//   state = {
//     count: 0,
//   };
//   increment = () => {
//     this.setState({ Count: this.state.count + 1 });
//   };
//   decrement = () => {
//     this.setState({ Count: this.state.count + 1 });
//   };
//   render() {
//     return (
//       <>
//         <h1>I Have{this.state.count} bikes.</h1>
//         <button onClick={this.increment}>Buy</button>
//         <button onClick={this.decrement}>Buy</button>
//       </>
//     );
//   }
// }
// export default A;

//function component
const B = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>I Have{count} cars.</h1>
      <button onClick={increment}>Buy</button>
      <button onClick={decrement}>sell</button>
    </>
  );
};
export default B;
