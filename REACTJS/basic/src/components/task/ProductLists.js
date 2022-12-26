import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import ListRenderingT2, { ProductList1 } from "./ProductDisplay";
import "./productList.css";
const ProductLists = () => {
  const [data, setData] = useState([]);
  const getProd = (prod) => {
    setData([...data, prod]);
  };
  return (
    <>
      <Box>
        <Grid
          sx={{
            width: "250px",
            marginRight: "25px",
            height: "88vh",
            display: "flex",
            flexDirection: "column",
            color: "red",
            border: "1px dotted magenta",
          }}
        >
          <h2>Product List</h2>
          <button
            style={{
              color: "white",
              backgroundColor: "blue",
              width: "140px",
              marginLeft: "20%",
              marginTop: "19px",
            }}
          >
            All Products
          </button>
          <button
            style={{
              color: "white",
              backgroundColor: "blue",
              width: "140px",
              marginLeft: "20%",
              marginTop: "19px",
            }}
          >
            Laptop
          </button>
          <button
            style={{
              color: "white",
              backgroundColor: "blue",
              width: "140px",
              marginLeft: "20%",
              marginTop: "19px",
            }}
          >
            LCD TVs
          </button>
          <button
            style={{
              color: "white",
              backgroundColor: "blue",
              width: "140px",
              marginLeft: "20%",
              marginTop: "19px",
            }}
          >
            Mobiles
          </button>
          <button
            style={{
              color: "white",
              backgroundColor: "blue",
              width: "140px",
              marginLeft: "20%",
              marginTop: "19px",
            }}
          >
            Smart Watches
          </button>
          <button
            style={{
              color: "white",
              backgroundColor: "blue",
              width: "140px",
              marginLeft: "20%",
              marginTop: "19px",
            }}
          >
            HeadPhones
          </button>
          <button
            style={{
              color: "white",
              backgroundColor: "blue",
              width: "140px",
              marginLeft: "20%",
              marginTop: "19px",
            }}
          >
            Cars
          </button>
          <button
            style={{
              color: "white",
              backgroundColor: "blue",
              width: "140px",
              marginLeft: "20%",
              marginTop: "19px",
            }}
          >
            Bikes
          </button>
          <button
            style={{
              color: "white",
              backgroundColor: "blue",
              width: "140px",
              marginLeft: "20%",
              marginTop: "19px",
            }}
          >
            {" "}
            Dresses
          </button>
          <button
            style={{
              color: "white",
              backgroundColor: "blue",
              width: "140px",
              marginLeft: "20%",
              marginTop: "19px",
            }}
          >
            Shoes
          </button>
        </Grid>
      </Box>
      <div>
        <ListRenderingT2 getProd={getProd} />
      </div>
      <section
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          border: "1px solid yellow",
          padding: "20px",
        }}
      >
        {data.map((user) => {
          return (
            <>
              <ProductList1 key={user.Discr} {...user} />
            </>
          );
        })}
      </section>
    </>
  );
};

export default ProductLists;
