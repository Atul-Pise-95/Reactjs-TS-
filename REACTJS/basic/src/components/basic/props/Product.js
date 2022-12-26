import React from "react";
import PropTypes from "prop-types";
class Product extends React.Component {
  render() {
    const { title, brand, price, desc, children } = this.props;
    return (
      <div
        style={{
          border: "1px solid #000",
          margin: 3,
          padding: 5,
          width: 200,
          backgroundColor: "chartreuse",
        }}
      >
        <h4>{title}</h4>
        <h4>Brand:{brand}</h4>
        <h4>Price:{price}</h4>
        <p>
          {desc}-{children}
        </p>
      </div>
    );
  }
}
Product.propTypes = {
  title: PropTypes.string.isRequired,
  brand: PropTypes.string,
  price: PropTypes.number,
  des: PropTypes.string,
};

export default Product;
