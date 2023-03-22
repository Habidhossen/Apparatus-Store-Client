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
            className="btn btn-primary btn-xs text-white text-xs capitalize"
          >
            Make Admin
          </button>
        ) : (
          <span className="badge badge-success text-white text-xs font-semibold">
            Already an Admin
          </span>
        )}
      </td>
    </tr>
  );
};

export default UsersRow;
