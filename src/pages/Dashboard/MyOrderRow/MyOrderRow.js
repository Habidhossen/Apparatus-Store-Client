import React from "react";

const MyOrderRow = ({ order }) => {
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

  console.log(order);
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
        <button className="btn btn-xs btn-error capitalize text-white ml-2">
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default MyOrderRow;
