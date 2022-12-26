import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
const ProductForm = ({ loadUsers }) => {
  const [product, setProduct] = useState({
    model: "",
    price: "",
    brand: "",
    desc: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const handleSubmit = () => {
    // console.log(product);
    axios
      .post("http://localhost:8080/products", product)
      .then(() => {
        loadUsers();
        setProduct({
          model: "",
          price: "",
          brand: "",
          desc: "",
        });
        alert("Product created successfully");
      })
      .catch(() => {
        alert("Error Occurs.....");
      });
  };

  return (
    <Box style={{ backgroundColor: "cyan", display: "flex", padding: 10 }}>
      <Grid container>
        <Grid item style={{ marginRight: 12 }}>
          <TextField
            varient="outlined"
            name="model"
            label="model"
            value={product.model}
            fullwidth="true "
            onChange={handleChange}
            style={{ backgroundColor: "white" }}
          />
        </Grid>
        <Grid item style={{ marginRight: 12 }}>
          <TextField
            varient="outlined"
            name="price"
            label="price"
            value={product.price}
            fullwidth="true "
            onChange={handleChange}
            style={{ backgroundColor: "white" }}
          />
        </Grid>
        <Grid item style={{ marginRight: 12 }}>
          <TextField
            varient="outlined"
            name="brand"
            label="brand"
            value={product.brand}
            fullwidth="true "
            onChange={handleChange}
            style={{ backgroundColor: "white" }}
          />
        </Grid>
        <Grid item style={{ marginRight: 12 }}>
          <TextField
            varient="outlined"
            name="desc"
            label="desc"
            value={product.desc}
            fullwidth="true "
            onChange={handleChange}
            style={{ backgroundColor: "white" }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Button
          varient="contained"
          color="primary"
          fullwidth="true "
          onClick={handleSubmit}
          style={{ backgroundColor: "yellow" }}
          disabled={
            !product.model || !product.price || !product.brand || !product.desc
          }
        >
          create
        </Button>
      </Grid>
    </Box>
  );
};

export default ProductForm;
