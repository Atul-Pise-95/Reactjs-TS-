import React from "react";
const cityList = {
  MH: ["Pune", "Mumbai", "Satara"],
  GJ: ["Gandhinagar", "Surat", "Bhavnagar"],
  MP: ["Bhopal"],
  Up: ["Lukhnao", "Gorakhapur"],
  PJ: ["amrutsar", "Chandigadh"],
};
class Abc extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    const provience = nextProps?.provience;
    const cityArr = cityList[provience];
    if (Array.isArray(cityArr)) return { cities: cityArr };
    return null;
  }
  render() {
    return (
      <div>
        <h2>City List</h2>
        <ul>
          {this.state.cities &&
            this.state.cities.map((city, i) => {
              return <li key={this.city + i}>{city}</li>;
            })}
        </ul>
      </div>
    );
  }
}

export default Abc;
