import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import Loading from "../../Shared/Loading/Loading";

const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  // use navigate hook
  const navigate = useNavigate();
  const location = useLocation();
  // get user current location
  let from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  // if get user
  useEffect(() => {
    if (googleUser || emailUser) {
      navigate(from, { replace: true });
    }
  }, [googleUser, emailUser]);

  // loading
  if (googleLoading || emailLoading) {
    return <Loading />;
  }
  // declare a variable for store error message
  let errorMessage = "";
  // error message
  if (googleError || emailError) {
    errorMessage = (
      <p className="text-error text-sm">
        Error: {googleError?.message || emailError?.message}
      </p>
    );
  }

  return (
    <div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-12">
        <div className="card-body">
          <h1 className="text-center text-xl font-bold mb-4">
            Login to your account
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
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
                type="password"
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
                Don't have an account?
                <Link className="btn-link" to="/signup">
                  {" "}
                  Register
                </Link>
              </label>
            </div>
            {errorMessage}
            <div className="form-control mt-6">
              <button className="flex items-center justify-center gap-2 bg-primary hover:bg-rose-600 transition duration-150 text-white text-md font-semibold px-8 py-3 rounded-lg">
                Login
              </button>
            </div>
          </form>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline btn-accent capitalize"
          >
            <FcGoogle className="text-xl mr-4" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
