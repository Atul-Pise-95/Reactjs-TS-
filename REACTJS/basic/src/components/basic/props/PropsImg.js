import React from "react";

const PropsImg = (props) => {
  return (
    <>
      <section>
        <div
          style={{
            border: "1px solid black",
            padding: 8,
            width: 300,
            height: 300,
            margin: 15,
          }}
        >
          <img
            src={props.pic}
            style={{
              display: "block",
              margin: "auto",
              width: 200,
              height: 200,
            }}
          />
          <h2>Price:{props.price}</h2>
          <p>Desciption:{props.desc}</p>
        </div>
      </section>
    </>
  );
};

export default PropsImg;
