import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";

const FormTask = () => {
  const [state, setState] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    let student = JSON.parse(localStorage.getItem("user"));
    if (!student) student = [];
    student.push(state);
    localStorage.setItem("user", JSON.stringify(student));
  };
  return (
    <Container>
      <Box maxWidth="600px">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={state.name}
              varient="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Mobile"
              name="mobile"
              value={state.mobile}
              varient="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={state.email}
              varient="outlined"
              onChange={handleChange}
            />
          </Grid>{" "}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              value={state.password}
              varient="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Skills"
              name="skills"
              value={state.skills}
              varient="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default FormTask;
