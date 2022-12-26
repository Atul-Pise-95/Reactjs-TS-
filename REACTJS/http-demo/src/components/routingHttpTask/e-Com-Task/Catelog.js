import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Categories from "./Categories";

import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";

const Catelog = () => {
  return (
    <>
      <section style={{ display: "flex", backgroundColor: "orange" }}>
        <div style={{ backgroundColor: "palegreen", width: "20%" }}>
          <Categories />
        </div>
        <div style={{ width: "75%" }}>
          <Routes>
            <Route path="" element={<Navigate to="all" />} />
            <Route path=":category" element={<ProductList />} />
            <Route path="details/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </section>
    </>
  );
};

export default Catelog;
