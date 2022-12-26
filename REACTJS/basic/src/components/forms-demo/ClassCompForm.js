import React, { useState } from "react";
class ClassCompForm extends React.Component {
  state = {
    user: {},
  };
  hamdleChange = (e) => {
    const { name, value } = e.target;
    this.setUser((state) => ({
      ...state,
      user: { ...state.user, [name]: value },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("User: ", this.state.user);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input type="text" name="name" onChange={this.handleChange} />
          <br />
          <label>Mobile: </label>
          <input type="text" name="mobile" onChange={this.handleChange} />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default ClassCompForm;
