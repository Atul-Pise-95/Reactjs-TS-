import React from "react";
class ListRendering2 extends React.Component {
  state = {
    city: "",
    cities: [],
  };
  addCity = () => {
    if (!this.state.cities.includes(this.state.city))
      this.setState((state) => ({ cities: [...state.cities, state.city] }));
  };

  removeCity = (city) => {
    const cities = [...this.state.cities];
    const arr = cities.filter((c) => c != city);
    this.setState({ cities: arr });
  };
  render() {
    return (
      <>
        <h2>City List</h2>
        <input
          type="text"
          onChange={(e) => this.setState({ city: e.target.value })}
        />
        <button onClick={this.addCity}>Add City</button>
        <hr />
        <ul>
          {this.state.cities.map((city, i) => (
            <li key={i}>
              {city}-<button onClick={() => this.removeCity(city)}>X</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ListRendering2;
