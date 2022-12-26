import React, { Component } from "react";
class ClassChild extends Component {
  print(msg) {
    alert(`print from Class Child ${msg}`);
  }
  render() {
    return (
      <>
        <h2>ClassChild</h2>
        <button onClick={() => this.props.greet("Class")}>Class Child</button>
      </>
    );
  }
}

export default ClassChild;
