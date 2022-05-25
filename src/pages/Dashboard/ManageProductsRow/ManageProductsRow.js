import React from "react";

const ManageProductsRow = ({ product }) => {
  console.log(product);
  const { name, img, price, availableQuantity, minimumOrderQuantity } = product;

  return (
    <tr className="hover">
      <th>
        <div class="avatar">
          <div class="w-8 rounded">
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
          for="order-delete"
          className="btn btn-xs btn-error capitalize text-white ml-2"
        >
          Cancel
        </label> */}
      </td>
    </tr>
  );
};

export default ManageProductsRow;
