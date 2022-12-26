import React from "react";
import { PureComponent } from "react";
class CityListClass extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.items[0] == nextProps.items[0]) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    console.log("CityListClass...");

    return (
      <div>
        <h2>CityListClass</h2>
        <ul>
          {this.props.items.map((city, i) => {
            return <li key={city + i}>{city}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default CityListClass;
