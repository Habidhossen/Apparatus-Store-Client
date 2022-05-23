import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content bg-gray-50">
        {/* <!-- Page content here --> */}
        <h1 className="text-3xl font-bold text-gray-800 mt-2 ml-2">
          Dashboard
        </h1>
        <Outlet />
        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <Link to="">My Profile</Link>
          </li>
          <li>
            <Link to="order">My Order</Link>
          </li>
          <li>
            <Link to="review">Add a Review</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;