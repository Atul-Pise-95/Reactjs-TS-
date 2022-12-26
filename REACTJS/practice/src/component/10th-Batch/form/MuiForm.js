import { Box, Button, Container, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
const MuiForm = () => {
  const [state, setState] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <Container>
      <Box>
        <Grid container>
          <Grid item xs={12} maxWidth="500px">
            <TextField
              variant="outlined"
              fullWidth
              label="Name"
              name="name"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} maxWidth="500px">
            <TextField
              variant="outlined"
              fullWidth
              label="Email"
              name="email"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} maxWidth="500px">
            <TextField
              variant="outlined"
              fullWidth
              label="Mobile"
              name="mobile"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} maxWidth="500px">
            <TextField
              variant="outlined"
              fullWidth
              label="Password"
              name="password"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} maxWidth="500px">
            <Button variant="contained" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MuiForm;
