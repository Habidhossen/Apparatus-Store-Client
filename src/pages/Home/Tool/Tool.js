import React from "react";
import { Link } from "react-router-dom";

const Tool = ({ singleTool }) => {
  const {
    _id,
    name,
    img,
    desc,
    price,
    minimumOrderQuantity,
    availableQuantity,
  } = singleTool;
  return (
    <div class="card card-compact bg-base-100 shadow-xl">
      <figure className="p-8">
        <img src={img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
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
        <div class="card-actions justify-end">
          <Link to={`/purchase/${_id}`} class="btn btn-primary capitalize">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tool;
