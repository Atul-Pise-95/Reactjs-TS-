import React, { Component } from "react";
class EvenNums extends Component {
  render() {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
      <>
        <h2>EvenNums</h2>
        <ul>
          {nums
            .filter((n) => n % 2 == 0)
            .map((val) => {
              return <li>{val}</li>;
            })}
        </ul>
      </>
    );
  }
}

export default EvenNums;
