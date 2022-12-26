import React, { Component } from "react";
class TotalVisitors extends React.Component {
  //state
  state = { count: 0 };
  render() {
    const addVisitor = () => {
      //this.state.count=this.state.count+1;
      this.setState((state) => {
        return { count: state.count + 1 };
      });
      this.setState((state) => {
        return { count: state.count + 1 };
      });
      this.setState((state) => {
        return { count: state.count + 1 };
      });
      this.setState((state) => {
        return { count: state.count + 1 };
      });
      console.log("Count: ", this.state.count);
    };
    return (
      <div>
        <button onClick={addVisitor}>New+</button>
        <h2>Total Visitors:{this.state.count}</h2>
      </div>
    );
  }
}

export default TotalVisitors;
