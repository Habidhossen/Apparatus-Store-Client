import React from "react";

const DeleteConfirmModal = ({ order }) => {
  <label htmlFor="order-delete" className="btn modal-button">
    open modal
  </label>;

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

          <h3 className="font-bold text-lg">DELETE</h3>
          <p className="py-4">Are you sure want to delete it?</p>
          <div className="modal-action">
            <label
              //   onClick={() => handleOrderDelete(order)}
              htmlFor="order-delete"
              className="btn btn-sm btn-error text-white"
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
