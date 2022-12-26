import { Formik, validateYupSchema } from "formik";
import React from "react";

const SimpleValidationFormik = () => {
  return (
    <>
      <h2>Simple Validation Formik</h2>

      <Formik
        initialValues={{ name: "", mobile: "", email: "" }}
        validate={(values) => {
          let errors = {};

          if (!values?.name) errors.name = "Name is equired";
          else if (values?.name?.length < 3)
            errors.name = "Name sholud atleast 3 characters";

          if (!values.mobile) errors.mobile = "Mobile is Required";
          else if (!/^[0-9]{10,12}$/.test(values?.mobile))
            errors.mobile = "Enter 10 digits only";

          return errors;
        }}
        onSubmit={(values) => {
          console.log("Values:", values);
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
            <label>Email:</label>
            <input type="email" name="email" onChange={handleChange} />
            <br />
            <input type="submit" value="Register" />
            <button onClick={handleReset}>Clear</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default SimpleValidationFormik;
