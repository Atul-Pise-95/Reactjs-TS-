import React, { useState, useEffect, createContext } from "react";
import ProductForm from "./ProductForm";
import ProduuctList from "./ProductList";
import axios from "axios";
import BrandList from "./BrandList";
export const ProductContext = createContext();
const ProductApp = () => {
  const [val, setVal] = useState([]);
  const loadUsers = (brand) => {
    let url = `http://localhost:8080/products`;
    if (brand) url = `http://localhost:8080/products?brand=${brand}`;
    axios
      .get(url)
      .then((response) => {
        setVal(response.data);
      })
      .catch((err) => {
        console.log("Error: ", err);
        console.log(val);
      });
  };

  const handleBrandChange = (e) => {
    const { value: brand } = e.target;
    if (brand != "all") {
      loadUsers(brand);
    } else {
      loadUsers();
    }
  };
  useEffect(() => {
    loadUsers();
  }, []);

  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:8080/products/${id}`)
      .then(() => {
        loadUsers();
        alert("Deleted...");
      })
      .catch(() => {
        alert("Could not deleted.");
      });
  };
  return (
    <main>
      <ProductForm loadUsers={loadUsers} />
      <BrandList handleChange={handleBrandChange} />
      <ProductContext.Provider value={{ deleteProduct }}>
        <ProduuctList products={val} />
      </ProductContext.Provider>
    </main>
  );
};

export default ProductApp;
