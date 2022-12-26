import React from "react";
const APIPro = () => {
  return (
    <section>
      <div
        style={{
          boxShadow: "2px 2px 5px grey",
          padding: 12,
          width: 600,
          display: "block",
          margin: "auto",
          marginTop: 20,
          backgroundColor: "palegreen",
        }}
      >
        <input type="text" style={{ width: 400, padding: 8 }} />
        <button style={{ padding: 8, backgroundColor: "cyan" }}>Search</button>
      </div>
    </section>
  );
};

export default APIPro;
