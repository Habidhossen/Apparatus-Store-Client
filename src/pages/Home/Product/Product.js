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
    <div className="card card-compact bg-base-100 shadow-sm rounded-md">
      <figure className="p-4">
        <img
          className="w-full transition duration-300 hover:scale-110"
          src={img}
          alt=""
        />
      </figure>

      <div className="card-body space-y-1">
        <div className="flex items-center gap-3">
          <del className="text-md text-text">${Number(price) + 100}</del>
          <h6 className="text-xl font-semibold text-primary">${price}</h6>
        </div>
        <h2 className="text-md font-bold text-heading">{name}</h2>
        <p className="text-sm text-text">{desc.slice(0, 100) + "..."}</p>

        <div className="card-actions">
          <Link
            to={`/purchase/${_id}`}
            className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-rose-600 transition duration-150 text-white text-xs font-semibold py-2 rounded"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
