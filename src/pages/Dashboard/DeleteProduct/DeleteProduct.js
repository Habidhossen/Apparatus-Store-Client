import React from "react";
import { toast } from "react-toastify";

const DeleteProduct = ({ deletingProduct, refetch }) => {
  const { _id, name } = deletingProduct;

  const handleProductDelete = () => {
    console.log(_id);
    fetch(`https://guarded-reaches-73348.herokuapp.com/product/${_id}`, {
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
      <input type="checkbox" id="product-delete" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="product-delete"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 class="font-bold text-lg">Delete product</h3>
          <p class="py-4">Are you sure want to delete it?</p>
          <div class="modal-action">
            <label
              for="product-delete"
              class="btn btn-sm btn-neutral text-white font-normal capitalize"
            >
              No
            </label>
            <label
              onClick={handleProductDelete}
              for="product-delete"
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

export default DeleteProduct;
