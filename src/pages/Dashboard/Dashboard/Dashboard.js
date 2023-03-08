import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  MdAdminPanelSettings,
  MdManageAccounts,
  MdManageSearch,
  MdOutlineAddBox,
  MdOutlineListAlt,
  MdOutlineRateReview,
  MdPostAdd,
  MdSpaceDashboard,
} from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import auth from "../../../Firebase/firebase.init";
import useAdmin from "../../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth); // get user info from useAuthState
  const [admin] = useAdmin(user); //from admin hook

  return (
    <div className="drawer drawer-mobile h-full">
      <input id="side-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-gray-50">
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="side-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 sm:bg-transparent text-base-content">
          <li>
            <Link className="nav-link" to="">
              <MdSpaceDashboard />
              Home
            </Link>
          </li>

          {admin ? (
            <>
              <li>
                <Link className="nav-link" to="add-product">
                  <MdOutlineAddBox /> Add a Product
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="add-blog">
                  <MdPostAdd /> Add a Blog
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="manage-product">
                  <MdManageSearch /> Manage Products
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="manage-blog">
                  <MdManageSearch /> Manage Blogs
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="manage-order">
                  <MdManageAccounts /> Manage all Orders
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="make-admin">
                  <MdAdminPanelSettings /> Make Admin
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link className="nav-link" to="order">
                  <MdOutlineListAlt /> My Order
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="review">
                  <MdOutlineRateReview /> Add a Review
                </Link>
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
