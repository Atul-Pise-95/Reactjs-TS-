import React, { useEffect } from "react";
import { useState } from "react";

export const ProductList1 = ({ Pic, Price, Discr, Ratings }) => {
  return (
    <div
      style={{
        border: "1px solid magenta",
        padding: 10,
        width: 230,
        height: 250,
        borderRadius: 15,
        backgroundColor: "white",
      }}
    >
      <img src={Pic} style={{ width: "100%", height: 120, marginBottom: 20 }} />
      <h4>Price:{Price}</h4>
      <h5>Discr:{Discr}</h5>
      <h6>Ratings:{Ratings}</h6>
    </div>
  );
};

const ListRenderingT2 = ({ getProd }) => {
  const [users, setUsers] = useState([
    {
      Price: "₹ 12000",
      Discr: "Mobile",
      Ratings: "⭐⭐⭐⭐",
      Pic: "https://apollo-singapore.akamaized.net/v1/files/a5vmnh1u4oxm1-IN/image;s=300x600;q=60",
    },
    {
      Price: "₹ 17000",
      Discr: "Laptop",
      Ratings: "⭐⭐⭐",
      Pic: "https://apollo-singapore.akamaized.net/v1/files/zz2ltub0efm83-IN/image;s=300x600;q=60",
    },
    {
      Price: "₹ 12000",
      Discr: "Mobile",
      Ratings: "⭐⭐⭐⭐",
      Pic: "https://apollo-singapore.akamaized.net/v1/files/a5vmnh1u4oxm1-IN/image;s=300x600;q=60",
    },
    {
      Price: "₹ 800",
      Discr: "Watch",
      Ratings: "⭐⭐⭐⭐",
      Pic: "https://apollo-singapore.akamaized.net/v1/files/1fk4cffesv591-IN/image;s=300x600;q=60",
    },
    {
      Price: "₹ 27000",
      Discr: "Bike",
      Ratings: "⭐⭐⭐⭐⭐",
      Pic: "https://apollo-singapore.akamaized.net/v1/files/12yhd3vd4vtf1-IN/image;s=300x600;q=60",
    },
    {
      Price: "₹ 800",
      Discr: "Watch",
      Ratings: "⭐⭐⭐⭐",
      Pic: "https://apollo-singapore.akamaized.net/v1/files/1fk4cffesv591-IN/image;s=300x600;q=60",
    },
    {
      Price: "₹ 17000",
      Discr: "Laptop",
      Ratings: "⭐⭐⭐",
      Pic: "https://apollo-singapore.akamaized.net/v1/files/zz2ltub0efm83-IN/image;s=300x600;q=60",
    },
    {
      Price: "₹ 120000",
      Discr: "Car",
      Ratings: "⭐⭐⭐⭐",
      Pic: "https://apollo-singapore.akamaized.net/v1/files/jl1prwjmtnu52-IN/image;s=300x600;q=60",
    },
    {
      Price: "₹ 27000",
      Discr: "Bike",
      Ratings: "⭐⭐⭐⭐⭐",
      Pic: "https://apollo-singapore.akamaized.net/v1/files/12yhd3vd4vtf1-IN/image;s=300x600;q=60",
    },
    {
      Price: "₹ 120000",
      Discr: "Car",
      Ratings: "⭐⭐⭐⭐",
      Pic: "https://apollo-singapore.akamaized.net/v1/files/jl1prwjmtnu52-IN/image;s=300x600;q=60",
    },
  ]);

  const loadProducts = () => {
    console.log(users);
    // getProd(users);
  };
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      {/* <section
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          border: "1px solid yellow",
          padding: "20px",
        }}
      >
        {users.map((user) => {
          return (
            <>
              <ProductList1 key={user.Discr} {...user} />
            </>
          );
        })}
      </section> */}
    </>
  );
};

export default ListRenderingT2;
