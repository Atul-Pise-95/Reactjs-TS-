import React from "react";
class ClassCompEvent extends React.Component {
  state = {
    name: "Topper Skills",
  };

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert(`Hi ${this.state.name}`);
  }
  handleClick3() {
    alert(`Greet ${this.state.name}`);
  }
  handleClick2 = () => {
    alert(`Hello ${this.state.name}`);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>say Hi</button>
        <button onClick={this.handleClick2}>say Hello</button>
        <button onClick={() => this.handleClick3()}>say Greet</button>
      </div>
    );
  }
}

export default ClassCompEvent;
