import React from "react";

const ManageProductsRow = ({ product }) => {
  console.log(product);
  const { name, img, price, availableQuantity, minimumOrderQuantity } = product;

  return (
    <tr className="hover">
      <th>
        <div className="avatar">
          <div className="w-8 rounded">
            <img src={img} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </th>
      <td>{name}</td>
      <td>{price}</td>
      <td>{availableQuantity}</td>
      <td>{minimumOrderQuantity}</td>

      <td>
        {/* <label
          htmlFor="order-delete"
          className="btn btn-xs btn-error capitalize text-white ml-2"
        >
          Cancel
        </label> */}
      </td>
    </tr>
  );
};

export default ManageProductsRow;
