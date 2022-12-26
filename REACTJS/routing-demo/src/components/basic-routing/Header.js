import React from "react";
import { NavLink } from "react-router-dom";
import Style from "./Header.module.css";
const Header = () => {
  return (
    <>
      <header
        style={{
          display: "flex",
          backgroundColor: "magenta",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <figure>
          <img src="logo192.png" style={{ width: 120 }} />
        </figure>
        <nav>
          <NavLink
            to=""
            style={{ marginRight: 10 }}
            end
            className={({ isActive }) => `
          ${Style.navlink} ${isActive ? Style.active : ""}`}
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            style={{ marginRight: 10 }}
            className={({ isActive }) => `
           ${Style.navlink} ${isActive ? Style.active : ""}`}
          >
            About
          </NavLink>
          <NavLink
            to="services"
            style={{ marginRight: 10 }}
            className={({ isActive }) => `
          ${Style.navlink} ${isActive ? Style.active : ""}`}
          >
            Services
          </NavLink>
          <NavLink
            to="products"
            style={{ marginRight: 10 }}
            className={({ isActive }) => `
          ${Style.navlink} ${isActive ? Style.active : ""}`}
          >
            Products
          </NavLink>
          <NavLink
            to="contact"
            style={{ marginRight: 10 }}
            className={({ isActive }) => `
          ${Style.navlink} ${isActive ? Style.active : ""}`}
          >
            Contact
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
