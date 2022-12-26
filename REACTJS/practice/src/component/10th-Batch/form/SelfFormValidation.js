import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";

const SelfFormValidation = () => {
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User: ", user);
  };
  const handleErrors = (prop, msg) => {
    setErrors((state) => ({ ...state, [prop]: msg }));
  };

  const ValidateUser = () => {
    if (!user?.name) {
      handleErrors("name", "Name is required!");
    } else if (user?.name?.length < 2) {
      handleErrors("Name must contain atleast 2 characters long!");
    } else if (user?.name?.legth > 45) {
      handleErrors("Name should not be exceeds more than 45 characters long!");
    } else if (!/^[a-zA-Z]+$/.test(user?.name)) {
      handleErrors("Only alphabets are allowed!");
    } else handleErrors("name");

    if (!/^[0-9]{10}/.test(user?.mobile)) {
      handleErrors(
        "mobile",
        "Mobile must contains 10 digits,alphabets are not allowed!"
      );
    } else handleErrors("mobile");
  };

  useEffect(() => {
    ValidateUser();
  }, [user]);
  return (
    <>
      <Container maxWidth="xs" sx={{ p: 5 }}>
        <Paper sx={{ p: 5 }}>
          <h2 style={{ display: "flex", justifyContent: "center" }}>
            <b>Form</b>
          </h2>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="name"
                  label="Name"
                  required
                  onChange={handleChange}
                  error={errors?.name ? true : false}
                  helperText={errors?.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="mobile"
                  label="Mobile"
                  required
                  onChange={handleChange}
                  error={errors?.mobile ? true : false}
                  helperText={errors?.mobile}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="email"
                  label="Email"
                  required
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="password"
                  label="Password"
                  required
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="dob"
                  label="DOB"
                  type="date"
                  required
                  onChange={handleChange}
                />
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default SelfFormValidation;
