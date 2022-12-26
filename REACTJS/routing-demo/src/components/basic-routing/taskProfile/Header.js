import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "yellow",
        display: "flex",
        justifyContent: "space-around",
        padding: 5,
      }}
    >
      <span style={{ display: "flex" }}>
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          style={{ width: 70, height: 70, borderRadius: 50 }}
        />
        <h2>
          <b>
            <i>Atul Pise</i>
          </b>
        </h2>
      </span>
      <section style={{ marginTop: 30, fontSize: 18 }}>
        <Link to="" style={{ marginRight: 20, textDecoration: "none" }}>
          HomePage
        </Link>
        <Link to="about" style={{ marginRight: 20, textDecoration: "none" }}>
          About
        </Link>
        <Link
          to="qualification"
          style={{ marginRight: 20, textDecoration: "none" }}
        >
          Qualification
        </Link>
        <Link
          to="experience"
          style={{ marginRight: 20, textDecoration: "none" }}
        >
          Experience
        </Link>
        <Link to="contact" style={{ marginRight: 20, textDecoration: "none" }}>
          Contact
        </Link>
      </section>
    </div>
  );
};

export default Header;
