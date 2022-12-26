import React from "react";
import "./productList.css";
const CategoryChild = ({ items, filter }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        border: "5px solid yellow",
        backgroundColor: "grey",
      }}
    >
      <h2 style={{ color: "magenta", marginLeft: 20, marginTop: 20 }}>
        <b>
          <i>Select Catagory</i>
        </b>
      </h2>
      <hr />
      {Array.isArray(items) &&
        items.map((cat, i) => (
          <div
            style={{
              width: "300px",
              paddingLeft: "40px",
            }}
          >
            <button
              key={cat + i}
              onClick={() => filter(cat)}
              style={{
                marginTop: 30,
                backgroundColor: "cyan",
                color: "white",
                width: "200px",
                height: 40,
              }}
            >
              {cat}
            </button>
          </div>
        ))}
    </div>
  );
};

export default CategoryChild;
