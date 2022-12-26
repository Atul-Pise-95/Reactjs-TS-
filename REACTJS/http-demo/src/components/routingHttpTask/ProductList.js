import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { Routes, Route, Link } from "react-router-dom";
const ProductList = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
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
        backgroundColor: "cyan",
        width: "25%",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <h2>
        <b>Product List</b>
      </h2>

      <section style={{ display: "flex", flexDirection: "column" }}>
        {Array.isArray(state) &&
          state.map((m, i) => (
            <ul style={{ listStyle: "none", cursor: "pointer", color: "blue" }}>
              <li key={m + i}>
                <b>{m}</b>
              </li>
            </ul>
          ))}
        {/* <Routes>
          <Route path="Electronics" element={<Button>Electronics</Button>} />
          <Route path="Jwelery" element={<Button>Jewelery</Button>} />
          <Route path="MClothing" element={<Button>Men's clothing</Button>} />
          <Route to="LClothing" element={<Button>Women's clothing</Button>} />
        </Routes> */}
      </section>
    </div>
  );
};

export default ProductList;
