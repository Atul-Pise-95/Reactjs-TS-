import React from "react";
export class Services extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "100vw",
          height: "100px",
          backgroundColor: "green",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            width: "100px",
            height: "50px",
            backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "30px",
          }}
        >
          service 1
        </h2>
        <h2
          style={{
            width: "100px",
            height: "50px",
            backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "30px",
          }}
        >
          service 2
        </h2>
        <h2
          style={{
            width: "100px",
            height: "50px",
            backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "30px",
          }}
        >
          service 3
        </h2>
        <h2
          style={{
            width: "100px",
            height: "50px",
            backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "30px",
          }}
        >
          service 4
        </h2>
      </div>
    );
  }
}
