import React from "react";

const ManageOrdersRow = ({ order, setDeletingOrder, refetch }) => {
  const {
    _id,
    productName,
    customerName,
    email,
    phone,
    address,
    orderQuantity,
    totalPrice,
    paid,
  } = order;

  return (
    <tr className="hover">
      <th>{productName}</th>
      <td>{customerName}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{address}</td>
      <td>{orderQuantity}</td>
      <td>{totalPrice}</td>
      <td>
        {paid ? (
          <span class="badge badge-warning text-white text-xs">Pending</span>
        ) : (
          <span class="badge badge-info text-white text-xs">Unpaid</span>
        )}

        {paid || (
          <label
            onClick={() => setDeletingOrder(order)}
            for="order-delete"
            className="btn btn-xs btn-error capitalize text-white ml-2"
          >
            Cancel
          </label>
        )}
      </td>
    </tr>
  );
};

export default ManageOrdersRow;
