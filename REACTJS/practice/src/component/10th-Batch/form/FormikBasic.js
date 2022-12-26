import React from "react";
import { Formik } from "formik";
const FormicBasic = () => {
  return (
    <>
      <h2>Basic Formic</h2>
      <Formik
        initialValues={{ name: "", mobile: "", email: "" }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        {({ values: user, handleChange, handleSubmit, handleReset }) => (
          <form onSubmit={handleSubmit}>
            <lanble>Name:</lanble>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
            <br />
            <lanble>Email:</lanble>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            <br />
            <lanble>Mobile:</lanble>
            <input
              type="mobile"
              name="mobile"
              value={user.mobile}
              onChange={handleChange}
            />
            <br />
            <input type="submit" value="Register" onSubmit={handleReset} />
          </form>
        )}
      </Formik>
    </>
  );
};

export default FormicBasic;
