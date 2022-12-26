import React from "react";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Products from "./Products";
import About from "./about/About";
import Contact from "./Contacts";
import Footer from "./Footer";
import PageNotFound from "./PageNotFound";
const BasicRouting = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="Services" element={<Services />} />
        <Route path="Products" element={<Products />} />
        <Route path="About/*" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default BasicRouting;
