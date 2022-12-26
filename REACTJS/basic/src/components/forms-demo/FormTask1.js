import React, { useState } from "react";
const FormTask1 = () => {
  const [user, setUser] = useState({ agree: false });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submitted...", user);
    let students = JSON.parse(localStorage.getItem("students"));
    if (!students) students = [];
    students.push(user);
    localStorage.setItem("students", JSON.stringify(students));
    alert("Your form is Registered successfully!");
  };
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid black",
          width: 450,
          borderRadius: 15,
          background: "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)",
          alignItems: "center",
        }}
      >
        <h3>
          <b>
            <i>⭐ Student Registration Form ⭐</i>
          </b>
        </h3>
        <br />
        <form onSubmit={handleSubmit}>
          <label style={{ marginBottom: 30 }}>Name:&nbsp;&nbsp;&nbsp; </label>
          <input type="text" name="name" onChange={handleChange} />
          <br />
          <label style={{ marginBottom: 30 }}>Mobile:&nbsp;&nbsp; </label>
          <input type="text" name="Mobile" onChange={handleChange} />
          <br />
          <label style={{ marginBottom: 30 }}>
            Email:&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          </label>
          <input type="email" name="email" onChange={handleChange} />
          <br />
          <label style={{ marginBottom: 30 }}>
            Date Of Birth: &nbsp;&nbsp; cd{" "}
          </label>
          <input type="date" name="DOB" onChange={handleChange} />
          <br />
          <select
            name="Select Course"
            style={{ marginBottom: 30 }}
            onChange={handleChange}
          >
            <option value="SSC">SSC</option>
            <option value="HSC">HSC</option>
            <option value="ART">ART</option>
            <option value="COMMERCE">COMMERCE</option>
            <option value="SCIENCE">SCIENCE</option>
            <option value="OTHER">OTHER</option>
          </select>
          <br />
          <select
            name="city"
            style={{ marginBottom: 30 }}
            onChange={handleChange}
          >
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Nashik">Nashik</option>
            <option value="Aurangabad">Aurangabad</option>
            <option value="Satara">Satara</option>
            <option value="Sangli">Sangli</option>
            <option value="Kolhapur">Kolhapur</option>
            <option value="Beed">Beed</option>
          </select>
          <br />
          <label style={{ marginBottom: 30 }}>Gender:&nbsp;&nbsp;&nbsp; </label>
          <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            onChange={handleChange}
          />
          <label htmlFor="male">Male&nbsp;&nbsp;&nbsp;</label>
          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            onChange={handleChange}
          />
          <label htmlFor="male">female</label>
          <br />

          <input
            type="checkbox"
            name="agree"
            onChange={() =>
              setUser((state) => ({ ...user, agree: !state.agree }))
            }
            style={{ marginBottom: 30 }}
          />
          <label>&nbsp;&nbsp; I Agree For Terms And Conditiions.</label>
          <br />

          <button
            type="submit"
            style={{ marginBottom: 30, backgroundColor: "green" }}
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormTask1;
