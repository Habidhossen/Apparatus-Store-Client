import React from "react";
import { toast } from "react-toastify";

const DeleteOrder = ({ deletingOrder, setDeletingOrder, refetch }) => {
  const { _id, productName } = deletingOrder;

  const handleOrderDelete = () => {
    fetch(`https://apparatus-store-server.onrender.com/order/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Order: ${productName} is deleted successfully`, {
            theme: "colored",
            autoClose: 2000,
          });
          refetch();
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="order-delete" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="order-delete"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="font-bold text-lg">Delete Order</h3>
          <p className="py-4">Are you sure want to delete it?</p>
          <div className="modal-action">
            <label
              htmlFor="order-delete"
              className="btn btn-sm btn-neutral text-white font-normal capitalize"
            >
              No
            </label>
            <label
              onClick={handleOrderDelete}
              htmlFor="order-delete"
              className="btn btn-sm btn-error text-white font-normal capitalize"
            >
              Yes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteOrder;
