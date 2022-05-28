import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../../Firebase/firebase.init";
import Loading from "../../Shared/Loading/Loading";

const MyProfile = () => {
  const [user] = useAuthState(auth); // get user info from useAuthState

  const email = user?.email;

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // get data from DB
  const { data, isLoading, refetch } = useQuery("user", () =>
    fetch(
      `https://guarded-reaches-73348.herokuapp.com/user?email=${email}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  // handle submit button
  const onSubmit = (data) => {
    // send data to the server
    fetch(`https://guarded-reaches-73348.herokuapp.com/user/${email}`, {
      method: "PUT",
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
      <div className="card w-96 mx-auto shadow-sm bg-base-100 mt-2">
        <div className="card-body">
          <h1 className="text-center text-xl font-bold mb-4">My Profile</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
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
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={user?.email}
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="label-text-alt text-red-500 mt-2">
                  Email is Required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                // defaultValue={data.phone ? data.phone : "phone"}
                placeholder="Phone"
                className="input input-bordered"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <span className="label-text-alt text-red-500 mt-2">
                  Phone is Required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Education</span>
              </label>
              <input
                type="text"
                placeholder="Education"
                className="input input-bordered"
                {...register("education", { required: true })}
              />
              {errors.education && (
                <span className="label-text-alt text-red-500 mt-2">
                  Education is Required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                placeholder="Location"
                className="input input-bordered"
                {...register("location", { required: true })}
              />
              {errors.location && (
                <span className="label-text-alt text-red-500 mt-2">
                  Location is Required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Linkedin</span>
              </label>
              <input
                type="text"
                placeholder="Linkedin profile link"
                className="input input-bordered"
                {...register("linkedin", { required: true })}
              />
              {errors.linkedin && (
                <span className="label-text-alt text-red-500 mt-2">
                  Linkedin is Required
                </span>
              )}
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-success text-white">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
