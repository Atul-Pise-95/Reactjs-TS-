import React from "react";
import Container from "@mui/material/Container";
import { DataGrid } from "@mui/x-data-grid";
const ListProducts = ({ products }) => {
  const columns = [
    { field: "model", width: 150 },
    { field: "brand", width: 150 },
    { field: "price", width: 150 },
  ];

  return (
    <Container sx={{ height: "90vh", backgroundColor: "palegreen" }}>
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => row.model + row.price}
      />
    </Container>
  );
};

export default ListProducts;
