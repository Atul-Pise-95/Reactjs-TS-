import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Overview from "./Overview";
import Team from "./Team";
const About = () => {
  return (
    <>
      <h1>About</h1>
      <Link to="">OverView</Link>
      <Link to="Team">Team</Link>
      <Routes>
        <Route path="" element={<Overview />} />
        <Route path="Team" element={<Team />} />
      </Routes>
    </>
  );
};

export default About;
