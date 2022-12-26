import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Formik, FieldArray, Form } from "formik";

const ProductForm = () => {
  return (
    <Container maxWidth="md">
      <Formik
        initialValues={{
          category: "",
          brand: "",
          products: [
            {
              model: "",
              price: 0,
              desc: "",
            },
          ],
        }}
        onSubmit={(values) => {
          console.log("Products: ", values);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Grid container bgcolor="cyan" sx={{ padding: 5 }}>
              <Grid item md={6}>
                <TextField
                  fullWidth
                  label="Category"
                  name="category"
                  sx={{ backgroundColor: "#fff" }}
                  value={values?.category}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  fullWidth
                  label="Brand"
                  name="brand"
                  sx={{ backgroundColor: "#fff" }}
                  value={values?.brand}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <FieldArray
              name="products"
              render={({ push, remove }) => (
                <Box>
                  {values?.products?.map((prod, i) => (
                    <Grid
                      key={i}
                      container
                      bgcolor="palegreen"
                      sx={{ padding: 5 }}
                    >
                      <Grid item md={4}>
                        <TextField
                          fullWidth
                          sx={{ backgroundColor: "#fff" }}
                          label="Model"
                          name={`products[${i}].model`}
                          value={values.products[i]?.model}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item md={4}>
                        <TextField
                          fullWidth
                          label="Price"
                          name="price"
                          sx={{ backgroundColor: "#fff" }}
                          name={`products[${i}].price`}
                          value={values.products[i]?.price}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item md={4}>
                        <TextField
                          fullWidth
                          label="Description"
                          name="desc"
                          sx={{ backgroundColor: "#fff" }}
                          name={`products[${i}].desc`}
                          value={values?.products[i]?.desc}
                          onChange={handleChange}
                        />
                      </Grid>
                      {i != 0 && (
                        <Grid item md={1}>
                          <Button onClick={() => remove(i)}>X</Button>
                        </Grid>
                      )}
                    </Grid>
                  ))}
                  <Button
                    variant="contained"
                    onClick={() => push({ model: "", price: 0, desc: "" })}
                  >
                    Add +
                  </Button>
                </Box>
              )}
            />
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ProductForm;
