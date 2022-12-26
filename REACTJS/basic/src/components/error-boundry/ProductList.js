import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import Product from "./Product";

const products = [
  {
    id: 1,
    model: "aaa",
    brand: "AAA",
    price: 11111,
    a,
  },
  {
    id: 2,
    model: "bbbb",
    brand: "BBBB",
    price: 222222,
  },
  {
    id: 3,
    model: "cccc",
    brand: "CCCC",
  },
  {
    id: 4,
    model: "dddd",
    brand: "DDDD",
    price: 4444,
  },
  {
    id: 5,
    model: "eee",
    brand: "EEEE",
    price: 5555,
  },
];

const ProductList = () => {
  return (
    <>
      <h2>Product Listing</h2>

      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {Array.isArray(products) &&
          products.map((prod) => (
            <ErrorBoundary key={prod.id}>
              <Product {...prod} />
            </ErrorBoundary>
          ))}
      </section>
    </>
  );
};

export default ProductList;
