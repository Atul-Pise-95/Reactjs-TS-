import React, { Component } from "react";
import Child1 from "./Chuld1";

class Parent1 extends Component {
  render() {
    return (
      <div>
        <Child1 state="Maharashtra" capital="Mumbai" />
        <Child1 state="MP" capital="Bhopal" />
        <Child1 state="Gujrat" capital="Surat" />
        <Child1 state="Rajastan" capital="Jaipur" />
      </div>
    );
  }
}

export default Parent1;
