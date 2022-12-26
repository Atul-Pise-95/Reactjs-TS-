import React from "react";

const ProductListChild = ({ items }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: 20,
          border: "5px solid chartreuse",
          backgroundColor: "black",
        }}
      >
        {items.map((values) => {
          const { Price, brand, model, pic1 } = values;

          return (
            <div className="col-md-4 mb-4">
              <div className="card" style={{ width: 250, height: 400 }}>
                <img
                  src={pic1}
                  className="card-img-top"
                  alt="..."
                  style={{ width: 248, height: 200 }}
                />
                <div className="card-body">
                  <p className="card-text">Price:{Price}</p>
                  <p className="card-text">Brand:{brand}</p>
                  <p className="card-text">model:{model}</p>
                  <a href="#" className="btn btn-warning px-4">
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductListChild;
