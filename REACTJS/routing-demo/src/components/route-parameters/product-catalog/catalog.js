import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Catagories from "./Catagories";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";
const Catalog = () => {
  return (
    <section style={{ display: "flex", minHeight: "90vh" }}>
      <div style={{ width: "25%", backgroundColor: "cyan" }}>
        <Catagories />
      </div>
      <div style={{ width: "73%", backgroundColor: "orange" }}>
        <Routes>
          <Route path="" element={<Navigate to="/all" />} />
          <Route path=":catagory" element={<ProductList />} />
          <Route path="details/:pid" element={<ProductDetails />} />
        </Routes>
      </div>
    </section>
  );
};

export default Catalog;
