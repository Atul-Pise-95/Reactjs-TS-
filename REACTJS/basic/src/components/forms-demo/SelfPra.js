import React from "react";
import { Box, Button, Grid, Paper, TextField } from "@mui/material";
const Form = () => {
  return (
    <Box style={{ marginLeft: "35%" }}>
      <Paper
        sx={{
          width: "50%",
          border: "1px solid black",
        }}
      >
        <Box
          style={{
            marginLeft: "22%",
            padding: 20,
          }}
        >
          <h2 style={{ marginLeft: "25%" }}>Form</h2>
          <Grid xs={12} md={6}>
            <Grid item>
              <TextField
                id="standard-basic"
                label="Standard"
                variant="outlined"
                style={{ marginBottom: "15px" }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="standard-basic"
                label="Standard"
                variant="outlined"
                style={{ marginBottom: "15px" }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="standard-basic"
                label="Standard"
                variant="outlined"
                style={{ marginBottom: "15px" }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="standard-basic"
                label="Standard"
                variant="outlined"
                style={{ marginBottom: "15px" }}
              />
            </Grid>
            <Button variant="contained">Click</Button>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default Form;
