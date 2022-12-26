import React, { Component } from "react";
import { CityContext } from "./ContextDemo";
class E extends React.Component {
  render() {
    return (
      <>
        <CityContext.Consumer>
          {(city) => <h2>E Component-{city}</h2>}
        </CityContext.Consumer>
      </>
    );
  }
}

export default E;
