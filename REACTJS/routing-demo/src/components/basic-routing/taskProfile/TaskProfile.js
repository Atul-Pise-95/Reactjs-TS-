import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Experiene from "./Experience";
import Qualification from "./Qualification";
import Header from "./Header";
import HomePage from "./Home";
import Footer from "./Fotter";
const TaskProfile = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="qualification" element={<Qualification />} />
        <Route path="experience" element={<Experiene />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default TaskProfile;
