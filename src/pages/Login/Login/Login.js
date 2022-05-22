import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-12">
        <div class="card-body">
          <h1 className="text-center text-xl font-bold mb-4">
            Login to your account
          </h1>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              class="input input-bordered"
            />
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
