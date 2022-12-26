import axios from "axios";
import React, { useEffect, useState } from "react";
const BrandList = ({ handleChange }) => {
  const [brand, setBrand] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/products")
      .then((res) => {
        const products = res.data;
        const arr = products?.map((m) => m.brand);
        const brandArr = Array.from(new Set(arr));
        setBrand(brandArr);
      })
      .catch(console.log);
  });
  return (
    <select onChange={handleChange}>
      <option value="all">All</option>
      {Array.isArray(brand) &&
        brand.map((m, i) => (
          <option key={m + i} value={m}>
            {m}
          </option>
        ))}
    </select>
  );
};

export default BrandList;
