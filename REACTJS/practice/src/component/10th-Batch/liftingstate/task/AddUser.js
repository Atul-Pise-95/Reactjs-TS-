import React, { useState } from "react";
import { Container, Grid, Box, TextField, Button } from "@mui/material";
const AddUser = ({ getUser }) => {
  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });
  const handleCahnge = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User: ", user);
    getUser(user);
  };

  return (
    <Container>
      <h2>Add User</h2>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              varient="outlined"
              fullWidth
              label="Name"
              name="name"
              value={user?.name}
              onChange={handleCahnge}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              varient="outlined"
              fullWidth
              label="Mobile"
              name="mobile"
              value={user?.mobile}
              onChange={handleCahnge}
            />
          </Grid>{" "}
          <Grid item xs={12}>
            <TextField
              varient="outlined"
              fullWidth
              label="Email"
              name="email"
              value={user?.email}
              onChange={handleCahnge}
            />
          </Grid>{" "}
          <Grid item xs={12}>
            <TextField
              varient="outlined"
              fullWidth
              label="Password"
              name="password"
              value={user?.password}
              onChange={handleCahnge}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit">
              Register
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default AddUser;
