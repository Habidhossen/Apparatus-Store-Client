import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../Firebase/firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth); // get user info from useAuthState

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // send data to the server
    fetch("https://apparatus-store-server.onrender.com/review", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => data);
    toast.success("Review added successfully", {
      theme: "colored",
      autoClose: 2000,
    });
    reset();
  };

  return (
    <section className="mt-10">
      <div className="card w-96 mx-auto shadow-sm bg-base-100">
        <div className="card-body">
          <h1 className="text-center text-xl font-bold mb-4">Reviews</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
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
                <span className="label-text">Ratings</span>
              </label>
              <select
                {...register("rating")}
                className="select select-bordered font-normal"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option selected>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Reviews</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Write here"
                {...register("msg", { required: true })}
              ></textarea>
              {errors.msg && (
                <span className="label-text-alt text-red-500 mt-2">
                  Review is Required
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent text-white">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddReview;
