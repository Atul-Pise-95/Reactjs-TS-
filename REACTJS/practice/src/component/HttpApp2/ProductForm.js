import React, { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import axios from "axios";
const ProductForm = ({ loadUsers }) => {
  const [val, setVal] = useState({
    model: "",
    brand: "",
    price: "",
    desc: "",
  });
  const handleClick = (e) => {
    const { name, value } = e.target;
    setVal({ ...val, [name]: value });
  };
  const handleSubmit = () => {
    console.log(val);
    axios
      .post("http://localhost:8080/products", val)
      .then(() => {
        loadUsers();
        setVal({
          model: "",
          brand: "",
          price: "",
          desc: "",
        });
        alert("Prooduct created.");
      })
      .catch(() => {
        alert("Product not created....");
      });
  };
  return (
    <Box sx={{ backgroundColor: "cyan", padding: 4 }}>
      <Grid container>
        <Grid item>
          <TextField
            label="model"
            name="model"
            value={val.model}
            variant="outlined"
            onChange={handleClick}
            style={{ backgroundColor: "white" }}
          />
        </Grid>

        <Grid item>
          <TextField
            label="brand"
            name="brand"
            value={val.brand}
            variant="outlined"
            onChange={handleClick}
            style={{ backgroundColor: "white" }}
          />
        </Grid>
        <Grid item>
          <TextField
            label="price"
            name="price"
            value={val.price}
            variant="outlined"
            onChange={handleClick}
            style={{ backgroundColor: "white" }}
          />
        </Grid>
        <Grid item>
          <TextField
            label="desc"
            name="desc"
            value={val.desc}
            variant="outlined"
            onChange={handleClick}
            style={{ backgroundColor: "white" }}
          />
        </Grid>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!val.model || !val.brand || !val.price || !val.desc}
        >
          Create
        </Button>
      </Grid>
    </Box>
  );
};

export default ProductForm;
