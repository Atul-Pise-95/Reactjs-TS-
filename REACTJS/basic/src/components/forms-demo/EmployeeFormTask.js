import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik, FieldArray, Form } from "formik";

const EmployeeFormTask = () => {
  return (
    <Container maxWidth="md">
      <Formik
        initialValues={{
          compony: "",
          employee: "",
          lists: [
            {
              Id: "",
              Name: "",
              Age: "",
              Mobile: "",
            },
          ],
        }}
        onSubmit={(values) => {
          console.log("lists: ", values);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Grid container bgcolor="Chartreuse" sx={{ padding: 5 }}>
              <Grid item md={6}>
                <TextField
                  fullWidth
                  label="Compony"
                  name="compony"
                  sx={{ backgroundColor: "#fff" }}
                  value={values?.compony}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  fullWidth
                  label="Employee"
                  name="employee"
                  sx={{ backgroundColor: "#fff" }}
                  value={values?.employee}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <FieldArray
              name="lists"
              render={({ push, remove }) => (
                <Box>
                  {values?.lists?.map((prod, i) => (
                    <Grid
                      key={i}
                      container
                      bgcolor="palegreen"
                      sx={{ padding: 5 }}
                    >
                      <Grid item md={2}>
                        <TextField
                          fullWidth
                          sx={{ backgroundColor: "#fff" }}
                          label="Id"
                          name={`lists[${i}].Id`}
                          value={values.lists[i]?.Id}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item md={4}>
                        <TextField
                          fullWidth
                          label="Name"
                          name="name"
                          sx={{ backgroundColor: "#fff" }}
                          name1={`lists[${i}].name`}
                          value={values.lists[i]?.name}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item md={2}>
                        <TextField
                          fullWidth
                          label="Age"
                          name="age"
                          sx={{ backgroundColor: "#fff" }}
                          name1={`lists[${i}].age`}
                          value={values.lists[i]?.age}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item md={3}>
                        <TextField
                          fullWidth
                          label="Mobile"
                          name="mobile"
                          sx={{ backgroundColor: "#fff" }}
                          name2={`lists[${i}].mobile`}
                          value={values?.lists[i]?.mobile}
                          onChange={handleChange}
                        />
                      </Grid>
                      {i != 0 && (
                        <Grid item md={1}>
                          <Button
                            onClick={() => remove(i)}
                            sx={{
                              backgroundColor: "red",
                              marginLeft: "5px",
                              marginTop: "10px",
                            }}
                          >
                            Delete
                          </Button>
                        </Grid>
                      )}
                    </Grid>
                  ))}
                  <Button
                    variant="contained"
                    sx={{ display: "block", margin: "auto", marginTop: "20px" }}
                    onClick={() =>
                      push({ Id: "", Name: "", Age: "", Mobile: "" })
                    }
                  >
                    Add +
                  </Button>
                </Box>
              )}
            />
            <Button
              type="submit"
              sx={{
                display: "block",
                margin: "auto",
                marginTop: "20px",
                backgroundColor: "green",
                color: "yellow",
              }}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default EmployeeFormTask;
