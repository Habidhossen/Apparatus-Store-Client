import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import DeleteConfirmModal from "../DeleteConfirmModal/DeleteConfirmModal";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="side-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-gray-50">
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="side-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <Link to="">My Profile</Link>
          </li>
          <li>
            <Link to="order">My Order</Link>
          </li>
          <li>
            <Link to="review">Add a Review</Link>
          </li>
          {/* below item is only for admin */}
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
        </ul>
      </div>
      {/* React toast */}
      <ToastContainer />

      {/* Delete Modal */}
      <DeleteConfirmModal />
    </div>
  );
};

export default Dashboard;
