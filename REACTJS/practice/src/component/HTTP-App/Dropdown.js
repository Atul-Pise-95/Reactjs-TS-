import axios from "axios";
import React, { useEffect, useState } from "react";
const Dropdown = ({ handleBrandChange }) => {
  const [brand, setBrad] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/products")
      .then((res) => {
        const product = res.data;
        const arr = product?.map((prod) => prod.brand);
        const brandArr = Array.from(new Set(arr));
        setBrad(brandArr);
      })
      .catch(console.log);
  });
  return (
    <select onChange={handleBrandChange}>
      <option value="All">All</option>
      {Array.isArray(brand) &&
        brand.map((m, i) => (
          <option key={m + i} value={m}>
            {m}
          </option>
        ))}
    </select>
  );
};

export default Dropdown;
