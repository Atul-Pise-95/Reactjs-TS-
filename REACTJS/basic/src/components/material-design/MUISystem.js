import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
const H2 = styled("h2")();
const MUISystem = () => {
  return (
    <>
      <H2 sx={{ backgroundColor: "primary.main" }}>MUI System</H2>
      <Box component="h2" sx={{ backgroundColor: "primary.main" }}>
        MUI System
      </Box>
    </>
  );
};
export default MUISystem;
