import React from "react";
import { NavLink } from "react-router-dom";
import Style from "./UsrList.module.css";
const UserList = () => {
  return (
    <div style={{ textDecoration: "none" }}>
      <h2>List</h2>
      <NavLink
        to="/mobiles"
        className={({ isActive }) =>
          `${Style.navlink} ${isActive ? Style.active : ""}`
        }
      >
        Mobiles
      </NavLink>
      <br />
      <NavLink
        to="/laptops"
        className={({ isActive }) =>
          `${Style.navlink} ${isActive ? Style.active : ""}`
        }
      >
        Laptops
      </NavLink>
      <br />
      <NavLink
        to="/led-tv"
        className={({ isActive }) =>
          `${Style.navlink} ${isActive ? Style.active : ""}`
        }
      >
        LED-TV
      </NavLink>
      <br />
      <NavLink
        to="/watches"
        className={({ isActive }) =>
          `${Style.navlink} ${isActive ? Style.active : ""}`
        }
      >
        Watches
      </NavLink>
      <br />
      <NavLink
        to="/shoes"
        className={({ isActive }) =>
          `${Style.navlink} ${isActive ? Style.active : ""}`
        }
      >
        Shoes
      </NavLink>
      <br />
    </div>
  );
};

export default UserList;
