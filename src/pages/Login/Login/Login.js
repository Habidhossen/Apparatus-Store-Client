import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-12">
        <div class="card-body">
          <h1 className="text-center text-xl font-bold mb-4">
            Login to your account
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                class="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span class="label-text-alt text-red-500 mt-2">
                  Email is required
                </span>
              )}
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                class="input input-bordered"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span class="label-text-alt text-red-500 mt-2">
                  Password is required
                </span>
              )}

              <label class="text-sm mt-3">
                Don't have an account?
                <Link className="btn-link" to="/signup">
                  {" "}
                  Register
                </Link>
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
            </div>
          </form>
          <div class="divider">OR</div>
          <button class="btn btn-outline btn-secondary">
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
