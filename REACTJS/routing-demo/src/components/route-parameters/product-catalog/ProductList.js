import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "./Data";
import Product from "./Prooduct";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { catagory } = useParams();
  useEffect(() => {
    if (catagory == "all") {
      const arr = Object.values(Data).flat(2);
      if (arr) setProducts(arr);
    } else {
      const arr = Data[catagory];
      if (arr) setProducts(arr);
    }
  }, [catagory]);
  return (
    <section style={{ display: "flex", flexWrap: "wrap" }}>
      {Array.isArray(products) &&
        products.map((prod, i) => <Product key={prod.id} {...prod} />)}
    </section>
  );
};

export default ProductList;
