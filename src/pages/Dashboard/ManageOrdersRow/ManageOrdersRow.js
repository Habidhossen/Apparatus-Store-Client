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
          <span className="badge badge-warning text-white text-xs">
            Pending
          </span>
        ) : (
          <span className="badge badge-info text-white text-xs">Unpaid</span>
        )}

        {paid || (
          <label
            onClick={() => setDeletingOrder(order)}
            htmlFor="order-delete"
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
