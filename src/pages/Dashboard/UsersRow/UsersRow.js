import React from "react";
import { toast } from "react-toastify";

const UsersRow = ({ user, refetch }) => {
  const { name, email, role } = user;

  //   handleMakeAdmin
  const makeAdmin = () => {
    fetch(`https://apparatus-store-server.onrender.com/user/admin/${email}`, {
      method: "PUT",
    })
      .then((response) => response.json())
      .then((data) => {
        refetch();
        toast.success("Successfully made an admin", {
          theme: "colored",
          autoClose: 2000,
        });
      });
  };

  return (
    <tr className="hover">
      <th>{name}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" ? (
          <button
            onClick={makeAdmin}
            className="btn btn-neutral btn-xs text-white text-xs capitalize"
          >
            Make Admin
          </button>
        ) : (
          <span className="badge badge-success text-white text-xs font-semibold">
            Already an Admin
          </span>
        )}

        {/* {paid ? (
          <span className="badge badge-info text-white text-xs">Paid</span>
        ) : (
          <Link
            to={`/dashboard/payment/${_id}`}
            className="btn btn-xs btn-success capitalize text-white"
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
        )} */}
      </td>
    </tr>
  );
};

export default UsersRow;
