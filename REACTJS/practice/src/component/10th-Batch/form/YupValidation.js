import React from "react";
import { Formik } from "formik";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import * as yup from "yup";

const validateSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    // .matches(/^[aA=zZ]+$/, "Alphabets only")
    .min(3, "Name must be atleast 3 character")
    .max(20, "Name must be less than 20 characters"),

  mobile: yup
    .string("Must be digits only")
    .min(10, "Mobile must be 10 digit long")
    .max(10, "Mobile must be 12 digit long"),

  email: yup.string().email(),
});

const FormikYupValidation = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Formik
          validationSchema={validateSchema}
          initialValues={{ name: "", mobile: "", email: "" }}
          onSubmit={(values, { resetForm }) => {
            console.log("User:", values);
            resetForm();
          }}
        >
          {({
            values,
            handleSubmit,
            handleChange,
            handleBlur,
            handleReset,
            touched,
            dirty,
            errors,
          }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.name && errors.name ? true : false}
                    helperText={touched.name && errors.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Mobile"
                    name="mobile"
                    value={values.mobile}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.mobile && errors.mobile ? true : false}
                    helperText={touched.mobile && errors.mobile}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && errors.email ? true : false}
                    helperText={touched.email && errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={!dirty}
                  >
                    Register
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default FormikYupValidation;
