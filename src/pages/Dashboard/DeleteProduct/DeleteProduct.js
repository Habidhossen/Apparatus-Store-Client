import React from "react";
import { toast } from "react-toastify";

const DeleteProduct = ({ deletingProduct, refetch }) => {
  const { _id, name } = deletingProduct;

  const handleProductDelete = () => {
    console.log(_id);
    fetch(`http://localhost:5000/product/${_id}`, {
      method: "DELETE",
      // headers: {
      //   authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      // },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Product: ${name} is deleted successfully`, {
            theme: "colored",
            autoClose: 2000,
          });
          refetch();
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="product-delete" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="product-delete"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="font-bold text-lg">Delete product</h3>
          <p className="py-4">Are you sure want to delete it?</p>
          <div className="modal-action">
            <label
              htmlFor="product-delete"
              className="btn btn-sm btn-neutral text-white font-normal capitalize"
            >
              No
            </label>
            <label
              onClick={handleProductDelete}
              htmlFor="product-delete"
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

export default DeleteProduct;
