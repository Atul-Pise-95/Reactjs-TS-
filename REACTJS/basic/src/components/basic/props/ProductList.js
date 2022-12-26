import React from "react";
import Product from "./Product";
class ProductList extends React.Component {
  render() {
    return (
      <section>
        <h2>Product List</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Product title="product 1" price={1000} brand="aa" desc="sample 1">
            children content
          </Product>
          <Product
            title="product 2"
            price={2000}
            brand="bb"
            desc="sample 2"
          ></Product>
          <Product
            title="product 3"
            price={3000}
            brand="cc"
            desc="sample 3"
          ></Product>
          <Product
            title="product 4"
            price={4000}
            brand="dd"
            desc="sample 4"
          ></Product>
          <Product
            title="product 5"
            price={5000}
            brand="ee"
            desc="sample 5"
          ></Product>
          <Product
            title="product 6"
            price={6000}
            brand="ff"
            desc="sample 6"
          ></Product>
        </div>
      </section>
    );
  }
}

export default ProductList;
