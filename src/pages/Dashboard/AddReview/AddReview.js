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
    fetch("https://guarded-reaches-73348.herokuapp.com/review", {
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
    <section className="mt-16">
      <div class="card w-96 mx-auto shadow-sm bg-base-100">
        <div class="card-body">
          <h1 className="text-center text-xl font-bold mb-4">Reviews</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Your Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                class="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="label-text-alt text-red-500 mt-2">
                  Name is Required
                </span>
              )}
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Ratings</span>
              </label>
              <select
                {...register("rating")}
                class="select select-bordered font-normal"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option selected>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Reviews</span>
              </label>
              <textarea
                class="textarea textarea-bordered"
                placeholder="Write here"
                {...register("msg", { required: true })}
              ></textarea>
              {errors.msg && (
                <span className="label-text-alt text-red-500 mt-2">
                  Review is Required
                </span>
              )}
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-info text-white">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddReview;
