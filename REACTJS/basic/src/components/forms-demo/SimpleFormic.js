import { Formik } from "formik";
import React from "react";
const SimpleFormik = () => {
  return (
    <>
      <h2>Simple Formik</h2>

      <Formik
        initialValues={{ name: "", mobile: "", email: "" }}
        onSubmit={(values) => {
          console.log("Values:", values);
        }}
      >
        {({ values, handleChange, handleSubmit, handleBlur, handleReset }) => (
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={values?.name}
              onChange={handleChange}
            />
            <br />
            <label>Mobile:</label>
            <input type="tel" name="mobile" onChange={handleChange} />
            <br />
            <TextField
              type="text"
              varient="outlined"
              label="Mobile"
              value={value?.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors?.mobile}
              helperText={errors?.mobile}
            />
            <br />
            <label>Email:</label>
            <input type="email" name="email" onChange={handleChange} />
            <br />
            <input type="submit" value="Register" />
          </form>
        )}
      </Formik>
    </>
  );
};

export default SimpleFormik;
