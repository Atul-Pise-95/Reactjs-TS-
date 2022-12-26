import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import "./rail.css";
let schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is Required")
    .min(3, "Enter atleast 3 characters "),
  age: yup.number().required().positive().integer(),
  email: yup.string().email("Enter Vali Email"),
  mobile: yup.string().matches(/^[0-9]{10}$/, "Enter 10 digits only"),
});

const RailwayReservation = () => {
  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={{
          name: "",
          mobile: "",
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
          <form
            onSubmit={handleSubmit}
            style={{
              border: "1px solid black",
              marginLeft: "100px",
              marginTop: "30px",
              padding: "50px",
              width: "500px",
              backgroundColor: "palegreen",
            }}
          >
            <h3 style={{ color: "blue" }}>
              <b>
                <i>Railway Reservation Form</i>
              </b>
            </h3>
            <hr />
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
            <div style={{ display: "flex" }}>
              <input type="text" placeholder="➤ From" onChange={handleChange} />
              <span style={{ fontSize: 32 }}>⇄</span>

              <input type="text" placeholder="🌏 To" onChange={handleChange} />
            </div>
            <br />
            <br />
            <input type="date" name="date" onChange={handleChange} />
            <br />
            <br />
            <select
              name="sit"
              label="General"
              onChange={handleChange}
              style={{ marginTop: 30 }}
            >
              <option>Ladies</option>
              <option>Gents</option>
              <option>Handicaped</option>
              <option>Local</option>
            </select>
            <br />
            <br />
            <select name="classes" label="General" onChange={handleChange}>
              <option>First class</option>
              <option>Second Class</option>
              <option>Third Class</option>
              <option>AC</option>
            </select>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "30px",
              }}
            >
              <input
                type="submit"
                value="Reserve"
                style={{
                  backgroundColor: "green",
                  padding: 5,
                  borderRadius: 15,
                }}
              />
              <button
                onClick={handleReset}
                style={{ backgroundColor: "red", padding: 5, borderRadius: 15 }}
              >
                Clear
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default RailwayReservation;
