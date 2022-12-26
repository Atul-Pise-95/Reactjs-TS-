import React, { useState, useEffect, createContext } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import axios from "axios";
import Dropdown from "./Dropdown";
export const ProductContext = createContext();
const HttpAppDemo = () => {
  const [val, setVal] = useState([]);
  const loadUsers = (brand) => {
    let url = "http://localhost:8080/products";
    if (brand) url = `http://localhost:8080/products?brand=${brand}`;
    axios
      .get(url)
      .then((res) => {
        setVal(res.data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:8080/products/${id}`)
      .then(() => {
        loadUsers();
        alert("Product Deleted...");
      })
      .catch(() => {
        alert("Product could not deleted.");
      });
  };
  const handleBrandChange = (e) => {
    const { value: brand } = e.target;
    if (brand != "All") {
      loadUsers(brand);
    } else {
      loadUsers();
    }
  };
  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <>
      <ProductForm loadUsers={loadUsers} />
      <div
        style={{
          backgroundColor: "orange",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Dropdown handleBrandChange={handleBrandChange} />
      </div>
      <ProductContext.Provider value={{ deleteProduct }}>
        <ProductList val={val} />
      </ProductContext.Provider>
    </>
  );
};

export default HttpAppDemo;
