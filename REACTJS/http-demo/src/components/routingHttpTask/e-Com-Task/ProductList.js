import axios from "axios";
import React, { useState, useEffect } from "react";
import Product from "./Product";
import { useParams } from "react-router-dom";
const ProductList = () => {
  const [products, setProducts] = useState([]);

  const { category } = useParams();

  console.log("Category", category);
  useEffect(() => {
    if (category == "all") {
      axios
        .get(`https://fakestoreapi.com/products`)
        .then((response) => {
          setProducts(response.data);
          console.log(products);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(`https://fakestoreapi.com/products/category/${category}`)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [category]);
  return (
    <>
      <h2>Product List</h2>
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.isArray(products) &&
          products.map((prod) => <Product key={prod.id} {...prod} />)}
      </section>
    </>
  );
};

export default ProductList;
