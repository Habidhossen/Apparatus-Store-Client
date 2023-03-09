import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddBlog = () => {
  // get current date and formatted too
  const date = new Date().toDateString().split(" ");
  const currentDate = date[2] + " " + date[1] + " " + date[3];

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // get input
    const img = data.img;
    const title = data.title;
    const desc = data.desc;
    const date = currentDate;
    const blogData = { img, title, desc, date };

    // send data to the server
    fetch("https://apparatus-store-server.onrender.com/blog", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(blogData),
    })
      .then((response) => response.json())
      .then((data) => data);
    toast.success("Blog added successfully", {
      theme: "colored",
      autoClose: 2000,
    });
    reset();
  };

  return (
    <section className="mt-10">
      <div className="card w-96 mx-auto shadow-sm bg-base-100">
        <div className="card-body">
          <h1 className="text-center text-lg font-bold mb-4">Add Blog</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Blog Title</span>
              </label>
              <input
                type="text"
                placeholder="Enter blog title"
                className="input input-bordered"
                {...register("title", { required: true })}
              />
              {errors.name && (
                <span className="label-text-alt text-red-500 mt-2">
                  Blog title is Required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Blog Image</span>
              </label>
              <input
                type="text"
                placeholder="Enter image link"
                className="input input-bordered"
                {...register("img", { required: true })}
              />
              {errors.img && (
                <span className="label-text-alt text-red-500 mt-2">
                  Image link is Required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Description</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Description here"
                {...register("desc", { required: true })}
              ></textarea>
              {errors.desc && (
                <span className="label-text-alt text-red-500 mt-2">
                  Description is Required
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent text-white">Add</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddBlog;
