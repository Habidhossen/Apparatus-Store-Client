import React from "react";
import { Link } from "react-router-dom";

const Product = ({ singleProduct }) => {
  const {
    _id,
    name,
    img,
    desc,
    price,
    minimumOrderQuantity,
    availableQuantity,
  } = singleProduct;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="p-8">
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{desc}</p>
        <h3>
          Price: <span className="font-semibold">${price}</span> (Per unit
          price)
        </h3>
        <h3>
          Available Quantity:{" "}
          <span className="font-semibold">{availableQuantity}</span>
        </h3>
        <h3>
          Minimum Order Quantity:{" "}
          <span className="font-semibold">{minimumOrderQuantity}</span>
        </h3>
        <div className="card-actions justify-end">
          <Link to={`/purchase/${_id}`} className="btn btn-primary capitalize">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
