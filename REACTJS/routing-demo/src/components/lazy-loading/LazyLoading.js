import React, { lazy, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
// import Customer from "./Customer";
import LoadingPage from "./LoadingPage";
// import Order from "./Order";
// import Products from "./Products";

//static import

//dynamic import

// import("./Customer").then(m=>{
//     customer=m.default;
// })

const Customer = lazy(() => import("./Customer"));
const Products = lazy(() => import("./Products"));
const Order = lazy(() => import("./Order"));

const LazyLoading = () => {
  return (
    <>
      <h2>Lazy Loaading...</h2>
      <nav>
        <Link to="">Home</Link>
        <Link to="customer">Customer</Link>
        <Link to="products">Products</Link>
        <Link to="order">Order</Link>
      </nav>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Routes>
          <Route path="" element={<LoadingPage />} />
          <Route path="customer" element={<Customer />} />
          <Route path="products" element={<Products />} />
          <Route path="order" element={<Order />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default LazyLoading;
