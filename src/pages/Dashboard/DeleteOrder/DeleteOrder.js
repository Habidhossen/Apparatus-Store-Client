import React from "react";
import { toast } from "react-toastify";

const DeleteOrder = ({ deletingOrder, setDeletingOrder, refetch }) => {
  const { _id, productName } = deletingOrder;

  const handleOrderDelete = () => {
    fetch(`https://guarded-reaches-73348.herokuapp.com/order/${_id}`, {
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
      <input type="checkbox" id="order-delete" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="order-delete"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 class="font-bold text-lg">Delete order</h3>
          <p class="py-4">Are you sure want to delete it?</p>
          <div class="modal-action">
            <label
              for="order-delete"
              class="btn btn-sm btn-neutral text-white font-normal capitalize"
            >
              No
            </label>
            <label
              onClick={handleOrderDelete}
              for="order-delete"
              class="btn btn-sm btn-error text-white font-normal capitalize"
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
