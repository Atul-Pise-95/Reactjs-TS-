import React, { Component } from "react";
import Child from "./child";
class Parent extends React.Component {
  state = {
    provience: "MH",
  };
  handlechange = (e) => {
    this.setState({ provience: e.target.value });
  };
  render() {
    return (
      <div>
        <select onChange={this.handlechange}>
          <option value="Mh">Maharashtra</option>
          <option value="MP">MP</option>
          <option value="PJ">Punjab</option>
          <option value="GJ">Gujrat</option>
          <option value="UP">Up</option>
        </select>
        {this.state.provience != "UP" && (
          <Child provience={this.state.provience} />
        )}
      </div>
    );
  }
}

export default Parent;
