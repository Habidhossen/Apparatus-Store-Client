import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // send data to the server
    fetch("https://guarded-reaches-73348.herokuapp.com/product", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => data);
    toast.success("Product added successfully", {
      theme: "colored",
      autoClose: 2000,
    });
    reset();
  };

  return (
    <section className="mt-16">
      <div className="card w-96 mx-auto shadow-sm bg-base-100">
        <div className="card-body">
          <h1 className="text-center text-xl font-bold mb-4">Add Product</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="label-text-alt text-red-500 mt-2">
                  Name is Required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Image</span>
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
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Enter price"
                className="input input-bordered"
                {...register("price", { required: true })}
              />
              {errors.price && (
                <span className="label-text-alt text-red-500 mt-2">
                  Price is Required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Available quantity"
                className="input input-bordered"
                {...register("availableQuantity", { required: true })}
              />
              {errors.availableQuantity && (
                <span className="label-text-alt text-red-500 mt-2">
                  Available quantity is Required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Minimum Order Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Minimum order quantity"
                className="input input-bordered"
                {...register("minimumOrderQuantity", { required: true })}
              />
              {errors.minimumOrderQuantity && (
                <span className="label-text-alt text-red-500 mt-2">
                  Minimum order quantity is Required
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
              <button className="btn btn-info text-white">Add</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
