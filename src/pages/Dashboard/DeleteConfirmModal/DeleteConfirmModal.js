import React from "react";

const DeleteConfirmModal = ({ order }) => {
  <label for="order-delete" class="btn modal-button">
    open modal
  </label>;

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

          <h3 class="font-bold text-lg">DELETE</h3>
          <p class="py-4">Are you sure want to delete it?</p>
          <div class="modal-action">
            <label
              //   onClick={() => handleOrderDelete(order)}
              for="order-delete"
              class="btn btn-sm btn-error text-white"
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
