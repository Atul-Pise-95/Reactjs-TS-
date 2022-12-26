import React from "react";
class ConditionalRendering extends React.Component {
  state = {
    isLogIn: false,
  };
  handeLogin = () => {
    this.setState((state) => ({ isLogIn: !state.isLoIn }));
  };
  render() {
    let message = "";
    if (this.state.isLogIn) message = <h2>welcome Topperskills</h2>;
    else message = <h2>welcome Guest</h2>;
    return (
      <>
        <h2>ConditionalRendering</h2>
        <button onClick={this.handeLogin}>
          {this.state.isLogIn ? "Logout" : "Login"}
        </button>
      </>
    );
  }
}

export default ConditionalRendering;
