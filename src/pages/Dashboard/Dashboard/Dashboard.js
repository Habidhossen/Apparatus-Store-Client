import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import auth from "../../../Firebase/firebase.init";
import useAdmin from "../../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth); // get user info from useAuthState
  const [admin] = useAdmin(user); //from admin hook

  return (
    <div class="drawer drawer-mobile">
      <input id="side-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content bg-gray-50">
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="side-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 sm:bg-transparent text-base-content">
          <li>
            <Link to="">My Profile</Link>
          </li>

          {admin ? (
            <>
              <li>
                <Link to="add-product">Add a Product</Link>
              </li>
              <li>
                <Link to="manage-product">Manage Products</Link>
              </li>
              <li>
                <Link to="manage-order">Manage all Orders</Link>
              </li>
              <li>
                <Link to="make-admin">Make Admin</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="order">My Order</Link>
              </li>
              <li>
                <Link to="review">Add a Review</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      {/* React toast */}
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
