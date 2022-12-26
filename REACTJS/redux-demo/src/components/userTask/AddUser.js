import React, { useEffect, useState } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { selectUsers, addUser } from "./UserSlice";

const AddUser = () => {
  const [user, setUser] = useState({
    id: 0,
    name: "",
    mobile: "",
    email: "",
    password: "",
  });
  const users = useSelector(selectUsers);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    const id =
      users?.reduce((maxId, user) => (maxId < user.id ? user.id : maxId), 0) +
      1;
    setUser({ ...user, id });
  }, [users]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User: ", user);
    dispatch(addUser(user));
    setUser({ ...users, name: "", mobile: "", email: "", password: "" });
  };

  return (
    <>
      <Container>
        <h2 style={{ textAlign: "center" }}>Add User</h2>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ width: "80%", margin: "auto" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                readonly
                label="ID"
                name="id"
                value={user.id}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Name"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Mobile"
                name="mobile"
                value={user.mobile}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Password"
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Create
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default AddUser;
