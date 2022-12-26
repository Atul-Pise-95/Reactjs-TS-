import { Box, Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
const ProductForm = ({ loadUsers }) => {
  const [val, setVal] = useState({
    model: "",
    price: "",
    brand: "",
    desc: "",
  });
  const handleChange = (e) => {
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
    <Box sx={{ backgroundColor: "palegreen", padding: 5 }}>
      <Grid container>
        <Grid item style={{ marginRight: 12 }}>
          <TextField
            varient="outlined"
            name="model"
            label="model"
            value={val.model}
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
            value={val.price}
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
            value={val.brand}
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
            value={val.desc}
            fullwidth="true "
            onChange={handleChange}
            style={{ backgroundColor: "white" }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Button
          variant="contained"
          color="primary"
          fullwidth="true"
          onClick={handleSubmit}
          disabled={!val.model || !val.price || !val.brand || !val.desc}
          sx={{ marginTop: "10px" }}
        >
          create
        </Button>
      </Grid>
    </Box>
  );
};

export default ProductForm;
