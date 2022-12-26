import React from "react";
import Abc from "./abc";
class Abcd extends React.Component {
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
          <option value="MH">Maharashtra</option>
          <option value="GJ">Gujrat</option>
          <option value="MP">MP</option>
          <option value="UP">UP</option>
          <option value="PJ">Punjab</option>
        </select>
        <Abc provience={this.state.provience} />
      </div>
    );
  }
}
export default Abcd;
