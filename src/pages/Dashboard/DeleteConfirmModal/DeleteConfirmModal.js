import React from "react";

const DeleteConfirmModal = ({ deletingOrder, setDeletingOrder }) => {
  const { _id } = deletingOrder;

  const handleOrderDelete = () => {
    console.log(_id);
    // fetch(`https://secret-dusk-46242.herokuapp.com/doctor/${email}`, {
    //   method: "DELETE",
    //   headers: {
    //     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.deletedCount) {
    //       toast.success(`Doctor: ${name} is deleted.`);
    //       setDeletingDoctor(null);
    //       refetch();
    //     }
    //   });
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

export default DeleteConfirmModal;
