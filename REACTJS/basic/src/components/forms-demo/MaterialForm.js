import React, { useState } from "react";
import { Container } from "@mui/system";
import { Button, Paper, TextField } from "@mui/material";
import { Grid } from "@mui/material";

const MaterialForm = () => {
  const [user, setUser] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User: ", user);
  };
  return (
    <>
      <Container
        sx={{ width: 400, backgroundColor: "palegoldenrod", marginTop: 5 }}
      >
        {/* <form onSubmit={handleSubmit}> */}
        <Paper>
          <Grid sx={{ padding: 5, paddingLeft: 8 }}>
            <h3 style={{ color: "blue" }}>
              <b>
                <i>Registration Form</i>
              </b>
            </h3>
            <hr />
            <TextField
              id="outlined-basic"
              label="Name"
              name="name"
              varient="outlined"
              onChange={handleChange}
            />
            <br />
            <TextField
              id="outlined-basic"
              label="Mobile"
              name="mobile"
              varient="outlined"
              onChange={handleChange}
              sx={{ marginTop: 4 }}
            />
            <br />
            <TextField
              id="outlined-basic"
              label="Email"
              name="email"
              varient="outlined"
              onChange={handleChange}
              sx={{ marginTop: 4 }}
            />
            <br />
            <TextField
              id="outlined-basic"
              label="Password"
              name="password"
              varient="outlined"
              onChange={handleChange}
              sx={{ marginTop: 4 }}
            />
            <br />

            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{ marginTop: 4 }}
            >
              Register
            </Button>
          </Grid>
        </Paper>
        {/* </form> */}
      </Container>
    </>
  );
};

export default MaterialForm;
