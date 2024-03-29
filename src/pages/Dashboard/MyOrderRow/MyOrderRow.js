import React from "react";
import { Link } from "react-router-dom";

const MyOrderRow = ({ order, setDeletingOrder, refetch }) => {
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
          <span className="badge badge-accent text-white text-xs">Paid</span>
        ) : (
          <Link
            to={`/dashboard/payment/${_id}`}
            className="btn btn-xs btn-neutral capitalize text-white"
          >
            Payment
          </Link>
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

export default MyOrderRow;
