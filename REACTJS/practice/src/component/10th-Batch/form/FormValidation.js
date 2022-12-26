import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const FormValidation = () => {
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

  const updateErrors = (prop, msg) => {
    setErrors((state) => ({ ...state, [prop]: msg }));
  };

  const validateUser = () => {
    if (!user.name) {
      updateErrors("name", "Name is required");
    } else if (user?.name?.length < 3) {
      updateErrors("name", "Name must be atleast 3 characters long !");
    } else if (user?.name?.length > 45) {
      updateErrors(
        "name",
        "Name should not be exceeds more than 45 characters!"
      );
    } else if (!/^[a-zA-Z]+$/.test(user?.name)) {
      errors.name = "Name must be alphabets only.";
    } else updateErrors("name");

    if (!/^[0-9]{10}$/.test(user?.mobile))
      updateErrors("mobile", "Mobile must be 10 digits");
    else updateErrors("mobile");

    if (!user?.email) {
      updateErrors("email", "Email is required!");
    } else {
      updateErrors("email");
    }
    if (!user?.password) {
      updateErrors("password", "Password is required!");
    } else if (user?.password?.length < 8) {
      updateErrors(
        "password",
        "Password shoud contain atleast 8 characters long!"
      );
    } else {
      updateErrors("password");
    }
  };

  useEffect(() => {
    validateUser();
  }, [user]);

  return (
    <Container maxWidth="sm" sx={{ p: 5 }}>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Name"
              name="name"
              onChange={handleChange}
              error={errors?.name ? true : false}
              helperText={errors?.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Mobile"
              name="mobile"
              onChange={handleChange}
              error={errors?.mobile ? true : false}
              helperText={errors?.mobile}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              type="email"
              name="email"
              required
              onChange={handleChange}
              error={errors?.email ? true : false}
              helperText={errors?.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Password"
              name="password"
              type="password"
              required
              onChange={handleChange}
              error={errors?.password ? true : false}
              helperText={errors?.password}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="filled"
              label="DOB"
              name="dob"
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
    </Container>
  );
};

export default FormValidation;
