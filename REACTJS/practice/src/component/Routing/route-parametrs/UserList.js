import React from "react";
import { Link } from "react-router-dom";
const UserList = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "cyan",
        width: "20%",
        textAlign: "center",
        listStyle: "none",
      }}
    >
      <h2>UserList</h2>
      <Link to="/India">India</Link>
      <Link to="/Srilanka">Srilanka</Link>
      <Link to="/Bangladesh">Bangladesh</Link>
      <Link to="/Tibet">Tibet</Link>
      <Link to="/Nepal">Nepal</Link>
    </div>
  );
};

export default UserList;
