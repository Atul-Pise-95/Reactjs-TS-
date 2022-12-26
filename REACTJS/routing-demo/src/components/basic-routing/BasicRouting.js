import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import Products from "./Products";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import PageNotFound from "./PageNotFound";
import Footer from "./Footer";
import Develpement from "./services/Development";
import Marketing from "./services/Marketing";
import Branding from "./services/Branding";

const BasicRouting = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* http://localhost:3000/ */}
        <Route path="" element={<Home />} />
        {/* http://localhost:3000/about */}
        <Route path="about/*" element={<About />} />
        {/* http://localhost:3000/services */}
        <Route path="services" element={<Services />}>
          <Route path="" element={<Develpement />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="branding" element={<Branding />} />
        </Route>
        {/* http://localhost:3000/contact */}
        <Route path="products" element={<Products />} />
        {/* http://localhost:3000/contact */}
        <Route path="contact" element={<Contact />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
        <Route path="*" element={<Navigate to="" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default BasicRouting;
