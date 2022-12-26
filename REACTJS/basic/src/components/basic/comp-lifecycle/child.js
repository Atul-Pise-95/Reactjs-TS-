import React, { Component } from "react";

const cityList = {
  MH: ["Pune", "Mumbai", "Kolhapur", "Nashik", "nagpur", "Buldhana", "Satara"],
  GJ: ["Surat", "Baroda", "Bhavnagar", "gandhinagar"],
  PJ: ["Amritsar", "Chandigad", "ludhiyana", "Bhatinda"],
  MP: ["Bhopal", "Indore", "Sagar", "Chinwada", "Ujjain"],
  UP: ["Ayodhya", "Varanasi", "kanpur", "lukhnow", "Prayagraj"],
};

class Child extends React.Component {
  state = {
    count: 0,
    cities: [],
    name: "",
    temp: "",
    timer: 0,
  };

  // The constructor is used to intilize the object properties
  // - it gets executed at the time of object creation
  // - it gets executed only once
  // - THere are two use cases of constructor, if you dont require these use cases
  // the dont use the constructor
  //     1. to intilize the state
  //     2. to bind the event handler functions
  constructor() {
    super();
    console.log("constructor");
    // this.state = {
    //   count: 0,
    // };

    // this.increment = this.increment.bind(this);
  }

  increment(value = 1) {
    // console.log("this: ", this);
    this.setState({ count: this.state.count + value });
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // this method gets executed just before the render() methods always
  // this method is used to modify the state based on the received props
  // this method should return an object that will be merged with state or null

  static getDerivedStateFromProps(nextProps, prevState) {
    const provience = nextProps?.provience;
    console.log("getDerivedStateFromProps");
    const cityArr = cityList[provience];
    if (Array.isArray(cityArr)) return { cities: cityArr };
    return null;
  }

  // this method will executes every from second time rendering
  // this method controls whether to update the component or not
  // this method returns a boolean value
  // if it returned true then component will update
  // if it returns false then component will not update

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    // if (this.state.name == nextState.name) return false;
    return true;
  }

  // this method is used to generate the UI
  // Whenever you want to generate/update the UI render() must be called
  // the render() methods gets executed every time before the rendering
  // render method can return following values
  //   - string
  //   - number
  //   - boolean
  //   - array
  //   - fragments
  //   - React element (JSX)

  //   Note: render() method cannot return an object

  render() {
    const obj = { name: "Topper Skills" };
    console.log("render");

    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.setState({ temp: e.target.value })}
        />

        <button onClick={() => this.setState({ name: this.state.temp })}>
          set name
        </button>
        <h2>
          My name is {this.state.name} - {this.state.timer}
        </h2>
        <br />
        <button onClick={() => this.increment(10)}>++</button>
        <button onClick={this.decrement}>--</button>
        <h2>
          Child - {this.state.count} {obj.name}
        </h2>

        <h2>City List</h2>
        <ul>
          {this.state.cities &&
            this.state.cities.map((city, i) => {
              return <li key={city + i}>{city}</li>;
            })}
        </ul>
      </div>
    );
  }

  // this method is used to perform one time operations after mounting the component
  // this method executes only once
  // you can perform initilizations like starting the timer, fetch the data from
  // to be used in the UI, etc.
  componentDidMount() {
    console.log("componentDidMount");
    const increment = () => {
      this.setState((state) => ({ timer: state.timer + 1 }));
      console.log("timer: ", this.state.timer);
    };
    this.timerId = setInterval(increment, 1000);
  }

  // this method is used to hold some values of the DOM before updation
  // the value returned by this method will available in the third parameter
  // of componentDidUpdate method

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return 100;
  }
  // Update the DOM with new UI

  // wheneven component renders this method gets executed after the DOM updation
  // this method is used to do some updation operations

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate: ", snapshot);
  }

  // this method will gets executed just before removing the component
  // from the DOM
  // This method is used to perform clean up operations like closing connections
  // clearing timers,etc.

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timerId);
  }
}

export default Child;
