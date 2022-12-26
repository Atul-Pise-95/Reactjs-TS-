import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "./ProductForm";
import ProductList from "./ProductLiist";
import BrandList from "./BrandList";
export const ProductContext = createContext();
const HttpApp2 = () => {
  const [list, setList] = useState([]);
  const loadUsers = (brand) => {
    let url = "http://localhost:8080/products";
    if (brand) url = `http://localhost:8080/products?brand=${brand}`;
    axios
      .get(url)
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };
  useEffect(() => {
    loadUsers();
  }, []);
  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:8080/products/${id}`)
      .then(() => {
        loadUsers();
        alert("Product Deleted.");
      })
      .catch(() => {
        alert("Product Could Not Deleted...");
      });
  };
  const handleChange = (e) => {
    const { value: brand } = e.target;
    if (brand != "all") {
      loadUsers(brand);
    } else {
      loadUsers();
    }
  };
  return (
    <main>
      <ProductForm loadUsers={loadUsers} />
      <BrandList handleChange={handleChange} />
      <ProductContext.Provider value={{ deleteProduct }}>
        <ProductList list={list} />
      </ProductContext.Provider>
    </main>
  );
};

export default HttpApp2;
