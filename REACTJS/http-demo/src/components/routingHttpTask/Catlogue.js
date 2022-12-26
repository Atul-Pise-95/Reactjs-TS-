import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";
const Catlog = () => {
  const [electronics, setElectronics] = useState([]);
  const handle1Change = () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        setElectronics(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    handle1Change();
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <ProductList h={handle1Change} E={setElectronics} />
      <ProductDetails h={handle1Change} E={setElectronics} />
    </div>
  );
};

export default Catlog;
