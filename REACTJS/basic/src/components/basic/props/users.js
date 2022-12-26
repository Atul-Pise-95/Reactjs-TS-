import React from "react";
class Users extends React.Component {
  render() {
    const { name, mobile, email } = this.props;
    return (
      <div
        style={{
          border: "1px solid #000",
          width: 200,
          margin: 3,
          padding: 5,
          backgroundColor: "cyan",
        }}
      >
        <h4>Name:{name}</h4>
        <h4>Mobile:{mobile}</h4>
        <h4>Email:{email}</h4>
      </div>
    );
  }
}

export default Users;
