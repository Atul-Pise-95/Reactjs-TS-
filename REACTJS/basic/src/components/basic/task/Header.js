import React from "react";
export class Header extends React.Component {
  render() {
    return (
      <header
        style={{
          backgroundColor: "orange",
          display: "flex",
          justifyContent: "space-around",
          width: "100vw",
        }}
      >
        <h2
          style={{
            width: "90px",
            height: "50px",
            backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "30px",
          }}
        >
          Logo
        </h2>
        <h2
          style={{
            width: "1100px",
            height: "50px",
            backgroundColor: "magenta",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          nav
        </h2>
        {/*Logo*/}
        {/*nav*/}
      </header>
    );
  }
}
