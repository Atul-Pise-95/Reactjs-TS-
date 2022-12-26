import React from "react";
import CityContext from "./CityContext";
class E extends React.Component {
  render() {
    return (
      <>
        <h2>E Component, Title-{this.props.title}</h2>
        <CityContext.Consumer>
          {(city) => {
            return <h4>E Component,city-{city}</h4>;
          }}
        </CityContext.Consumer>
      </>
    );
  }
}

export default E;
