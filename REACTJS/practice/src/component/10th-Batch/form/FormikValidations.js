import React from "react";
import { Formik } from "formik";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
const FormikValidation = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Formik
          validate={({ name, mobile, email }) => {
            let errors = {};

            if (!name) errors.name = "Name is required";

            if (!mobile) errors.mobile = "Mobile is required";
            else if (!/^[0-9] {10}$/.test(mobile))
              errors.mobile = "Mobile must be 10 digits";

            return errors;
          }}
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
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    // error={touched.email && errors.email ? true : false}
                    // helperText={touched.email && errors.email}
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

export default FormikValidation;
