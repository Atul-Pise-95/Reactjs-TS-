import React from "react";
import ProductLists from "./ProductLists";
import { Box } from "@mui/material";
import ListRenderingT2 from "./ProductDisplay";

const TaskDemo = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        paddingBottom: "19px",
        color: "blue",
        textAlign: "center",
      }}
    >
      <h2>
        <b>
          <i>Products</i>
        </b>
      </h2>
      <Box
        md={12}
        sx={{
          display: "flex",
          posision: "absolute",
          marginLeft: "25px",
          paddingLeft: 0,
        }}
      >
        <ProductLists md={4} />
        <ListRenderingT2 md={8} sx={{ display: "flex", flexWrap: "wrap" }} />
      </Box>
    </Box>
  );
};

export default TaskDemo;
