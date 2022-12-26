import React, { Component } from "react";
// import ProductList from "./ProductList";
// import UserList from "./UsersList";
import PropsImg from "./PropsImg";
class PropsDemo extends React.Component {
  render() {
    return (
      <div>
        {/* <ProductList />
        <UserList /> */}
        <h1>card</h1>
        <section style={{ display: "flex", flexWrap: "wrap" }}>
          <PropsImg
            price="10000"
            desc="Laptop"
            pic="https://apollo-singapore.akamaized.net/v1/files/7g268pzd4lot-IN/image;s=300x600;q=60"
          />
          <PropsImg
            price="20000"
            desc="Laptop"
            pic="https://apollo-singapore.akamaized.net/v1/files/63qby1n17ut71-IN/image;s=300x600;q=60"
          />
          <PropsImg
            price="30000"
            desc="Bike"
            pic="https://apollo-singapore.akamaized.net/v1/files/wqqsfq6imh9j1-IN/image;s=300x600;q=60"
          />
          <PropsImg
            price="40000"
            desc="Mobile"
            pic="https://apollo-singapore.akamaized.net/v1/files/hyjmr2va9ft01-IN/image;s=300x600;q=60"
          />
          <PropsImg
            price="50000"
            desc="Car"
            pic="https://apollo-singapore.akamaized.net/v1/files/i6txzcltqbr11-IN/image;s=300x600;q=60"
          />
        </section>
      </div>
    );
  }
}

export default PropsDemo;
