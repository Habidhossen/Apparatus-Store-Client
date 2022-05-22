import React, { useEffect } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import Loading from "../../Shared/Loading/Loading";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email, data.password);
  };

  // use navigate hook
  const navigate = useNavigate();
  const location = useLocation();
  // get user current location
  let from = location.state?.from?.pathname || "/";

  // if create user
  useEffect(() => {
    if (user) {
      Navigate(from, { replace: true });
    }
  }, [user]);

  // loading
  if (loading) {
    return <Loading />;
  }
  // declare a variable for store error message
  let errorMessage = "";
  // error message
  if (error) {
    errorMessage = <p className="text-danger">Error: {error?.message}</p>;
  }

  return (
    <div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-12">
        <div className="card-body">
          <h1 className="text-center text-xl font-bold mb-4">
            Sign up for free
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="label-text-alt text-red-500 mt-2">
                  Name is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="label-text-alt text-red-500 mt-2">
                  Email is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="label-text-alt text-red-500 mt-2">
                  Password is required
                </span>
              )}

              <label className="text-sm mt-3">
                Already have an account?
                <Link className="btn-link" to="/login">
                  {" "}
                  Login now
                </Link>
              </label>
            </div>
            {errorMessage}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Signup</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
