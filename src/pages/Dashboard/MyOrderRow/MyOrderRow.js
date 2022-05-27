import React from "react";

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
        <button className="btn btn-xs btn-success capitalize text-white">
          Payment
        </button>
        <label
          onClick={() => setDeletingOrder(order)}
          for="order-delete"
          className="btn btn-xs btn-error capitalize text-white ml-2"
        >
          Cancel
        </label>
      </td>
    </tr>
  );
};

export default MyOrderRow;
