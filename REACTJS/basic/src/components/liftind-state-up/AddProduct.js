import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const AddProduct = ({ getProduct }) => {
  const [product, setProduct] = useState({ model: "", brand: "", price: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    getProduct(product);
    setProduct({
      model: "",
      brand: "",
      price: "",
    });
  };
  return (
    <Container>
      <Paper>
        <Box sx={{ backgroundColor: "cyan", padding: 3 }}>
          <h2>Add Product</h2>

          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={3}>
              <TextField
                sx={{ backgroundColor: "#fff" }}
                variant="outlined"
                fullWidth
                label="Model"
                name="model"
                value={product.model}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                sx={{ backgroundColor: "#fff" }}
                variant="outlined"
                fullWidth
                label="Brand"
                name="brand"
                value={product.brand}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                sx={{ backgroundColor: "#fff" }}
                variant="outlined"
                fullWidth
                type="number"
                label="Price"
                name="price"
                value={product.price}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Button
                variant="contained"
                onClick={handleSubmit}
                disabled={!product?.model || !product?.brand || !product?.price}
              >
                Create
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default AddProduct;
