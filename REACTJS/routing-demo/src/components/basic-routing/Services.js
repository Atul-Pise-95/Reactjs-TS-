import React from "react";
import { Link, Outlet } from "react-router-dom";
const Services = () => {
  return (
    <>
      <h2>Services</h2>
      <nav>
        <Link to="">Development</Link>
        <Link to="marketing">Marketing</Link>
        <Link
          to="branding"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Branding
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Services;
