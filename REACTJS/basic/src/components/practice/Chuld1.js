import React, { Component } from "react";
class Child1 extends Component {
  render() {
    return (
      <div style={{ border: "1px solid red", backgroundColor: "cyan" }}>
        <h2>state:{this.props.state}</h2>
        <h2>Capital:{this.props.capital}</h2>
      </div>
    );
  }
}

export default Child1;
