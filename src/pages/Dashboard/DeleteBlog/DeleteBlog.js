import React from "react";
import { toast } from "react-toastify";

const DeleteBlog = ({ deletingBlog, refetch }) => {
  const { _id, title } = deletingBlog;

  const handleBlogDelete = () => {
    console.log(_id);
    fetch(`http://localhost:5000/blog/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Blog: ${title} is deleted successfully`, {
            theme: "colored",
            autoClose: 2000,
          });
          refetch();
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="blog-delete" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="blog-delete"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="font-bold text-lg">Delete Blog</h3>
          <p className="py-4">Are you sure want to delete it?</p>
          <div className="modal-action">
            <label
              htmlFor="blog-delete"
              className="btn btn-sm btn-neutral text-white font-normal capitalize"
            >
              No
            </label>
            <label
              onClick={handleBlogDelete}
              htmlFor="blog-delete"
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

export default DeleteBlog;
