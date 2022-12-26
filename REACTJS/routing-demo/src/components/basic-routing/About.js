import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Overview from "./about/Overview";
import Team from "./about/Team";
const About = () => {
  return (
    <>
      <h2>About Components</h2>
      <Link to="">Overview</Link>
      <Link to="team">Team</Link>
      <hr />
      <Routes>
        <Route path="" element={<Overview />} />
        <Route path="team" element={<Team />} />
      </Routes>
    </>
  );
};

export default About;
