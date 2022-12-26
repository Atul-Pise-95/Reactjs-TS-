import React from "react";
class ClassChild extends React.Component {
  print(msg) {
    alert(`print from class Child ${msg}`);
  }
  render() {
    return (
      <div>
        <h2>class Child component</h2>
        <button onClick={() => this.props.greet("class")}>
          Call parent method
        </button>
      </div>
    );
  }
}

export default ClassChild;
