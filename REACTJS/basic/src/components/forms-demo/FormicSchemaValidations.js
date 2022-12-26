import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import TextField from "@mui/material/TextField";

let schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is Required")
    .min("Enter atleast 3 characters "),
  age: yup.number().required().positive().integer(),
  email: yup.string().email("Enter Vali Email"),
  mobile: yup.string().matches(/^[0-9]{10}$/, "Enter 10 digits only"),
});

const FormikSchemaValidation = () => {
  return (
    <>
      <h2>Formik Schema Validation</h2>
      <Formik
        validationSchema={schema}
        initialValues={{
          name: "",
          mobile: "",
          age: 0,
          email: "",
          dob: "2022-06-07",
        }}
        onSubmit={(values) => {
          console.log("values:", values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleBlur,
          handleReset,
        }) => (
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={values?.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p style={{ color: "red" }}>
              {touched?.name && errors?.name ? errors?.name : ""}
            </p>
            <br />
            <label>Mobile:</label>
            <input
              type="tel"
              name="mobile"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p style={{ color: "red" }}>
              {touched?.mobile && errors?.mobile ? errors?.mobile : ""}
            </p>
            <br />
            <TextField
              type="text"
              varient="outlined"
              label="Mobile"
              value={values?.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors?.mobile ? true : false}
              helperText={errors?.mobile}
            />
            <br />
            <label>Email:</label>
            <input type="email" name="email" onChange={handleChange} />
            <br />
            <label>Age:</label>
            <input type="number" name="age" onChange={handleChange} />
            <br />
            <input type="submit" value="Register" />
            <button onClick={handleReset}>Clear</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FormikSchemaValidation;
