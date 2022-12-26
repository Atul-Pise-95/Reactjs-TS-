import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div
        style={{
          height: "40px",
          backgroundColor: "cyan",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Link to="">Home</Link>
        <Link to="Services">services</Link>
        <Link to="Products">Products</Link>
        <Link to="About">About</Link>
        <Link to="Contact">Contact</Link>
      </div>
    </>
  );
};

export default Header;
