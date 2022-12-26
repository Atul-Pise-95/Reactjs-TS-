import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
const MaterialLayout = () => {
  return (
    <>
      <Box>
        <Box Component="h2" sx={{ backgroundColor: "red" }}>
          Material layout
        </Box>
        <Box Component="section" sx={{ backgroundColor: ".main", height: 100 }}>
          This is a sample section
        </Box>
        <Box componet="form">
          <Box component="input" type="submit" value="register" />
        </Box>
      </Box>
      <Container maxWidth="sm" sx={{ backgroundColor: "secondary.main" }}>
        <Box>sample div Containers</Box>
        <Box component="p">sample Para Containers</Box>
        <Box component="p">sample Para Containers</Box>
        <Box component="p">sample Para Containers</Box>
      </Container>

      <Grid
        container
        spacing={2}
        rowSpacing={3}
        columnSpacing={5}
        direction="column"
      >
        <Grid item>
          <Box sx={{ backgroundColor: "primary.main" }}>
            Sample flex item using grid
          </Box>
        </Grid>
        <Grid item container>
          <Box sx={{ backgroundColor: "secondry.main" }}>
            Sample flex item using grid
          </Box>
          <Box sx={{ backgroundColor: "success.main" }}>
            Sample flex item using grid
          </Box>
          <Box sx={{ backgroundColor: "primary.main" }}>
            Sample flex item using grid
          </Box>
          <Box sx={{ backgroundColor: "error.main" }}>
            Sample flex item using grid
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ backgroundColor: "warning.main" }}>
            Sample flex item using grid
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ backgroundColor: "error.main" }}>
            Sample flex item using grid
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ backgroundColor: "success.main" }}>
            Sample flex item using grid
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ backgroundColor: "error.main" }}>
            Sample flex item using grid
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ backgroundColor: "warning.main" }}>
            Sample flex item using grid
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ backgroundColor: "success.main" }}>
            Sample flex item using grid
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ backgroundColor: "secondary.main" }}>
            Sample flex item using grid
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ backgroundColor: "error.main" }}>
            Sample flex item using grid
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ backgroundColor: "primary.main" }}>
            Sample flex item using grid
          </Box>
        </Grid>
      </Grid>

      <Stack direction="row" flex-wrap="wrap" spacing={4}>
        <Box sx={{ padding: 20, backgroundColor: "red" }}>One</Box>
        <Box sx={{ padding: 20, backgroundColor: "blue" }}>Two</Box>
        <Box sx={{ padding: 20, backgroundColor: "yellow" }}>Three</Box>
        <Box sx={{ padding: 20, backgroundColor: "green" }}>Four</Box>
        <Box sx={{ padding: 20, backgroundColor: "blue" }}>5</Box>
        <Box sx={{ padding: 20, backgroundColor: "yellow" }}>6</Box>
        <Box sx={{ padding: 20, backgroundColor: "green" }}>7</Box>
        <Box sx={{ padding: 20, backgroundColor: "magenta" }}>8</Box>
        <Box sx={{ padding: 20, backgroundColor: "chartreuse" }}>9</Box>
        <Box sx={{ padding: 20, backgroundColor: "bluevoilet" }}>10</Box>
      </Stack>
    </>
  );
};

export default MaterialLayout;
