import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../Firebase/firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth); // get user info from useAuthState

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // send data to the server
    fetch("https://guarded-reaches-73348.herokuapp.com/user", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => data);
    toast.success("Profile updated successfully", {
      theme: "colored",
      autoClose: 2000,
    });
    reset();
  };

  return (
    <section>
      <div class="card w-96 mx-auto shadow-sm bg-base-100 mt-2">
        <div class="card-body">
          <h1 className="text-center text-xl font-bold mb-4">My Profile</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
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
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                value={user?.email}
                class="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="label-text-alt text-red-500 mt-2">
                  Email is Required
                </span>
              )}
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Phone</span>
              </label>
              <input
                type="text"
                placeholder="Phone"
                class="input input-bordered"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <span className="label-text-alt text-red-500 mt-2">
                  Phone is Required
                </span>
              )}
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Education</span>
              </label>
              <input
                type="text"
                placeholder="Education"
                class="input input-bordered"
                {...register("education", { required: true })}
              />
              {errors.education && (
                <span className="label-text-alt text-red-500 mt-2">
                  Education is Required
                </span>
              )}
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Location</span>
              </label>
              <input
                type="text"
                placeholder="Location"
                class="input input-bordered"
                {...register("location", { required: true })}
              />
              {errors.location && (
                <span className="label-text-alt text-red-500 mt-2">
                  Location is Required
                </span>
              )}
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Linkedin</span>
              </label>
              <input
                type="text"
                placeholder="Linkedin profile link"
                class="input input-bordered"
                {...register("linkedin", { required: true })}
              />
              {errors.linkedin && (
                <span className="label-text-alt text-red-500 mt-2">
                  Linkedin is Required
                </span>
              )}
            </div>

            <div class="form-control mt-6">
              <button class="btn btn-success text-white">Update Profile</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
