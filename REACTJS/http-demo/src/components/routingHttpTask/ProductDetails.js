import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";
const ProductDetails = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/users")
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      style={{
        backgroundColor: "orange",
        width: "75%",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <h2>
        <b>Product Details</b>
      </h2>

      <section style={{ display: "flex", flexDirection: "column" }}>
        {Array.isArray(state) &&
          state.map((m, i) => <Product key={m + i} state={state} />)}
      </section>
    </div>
  );
};

export default ProductDetails;
