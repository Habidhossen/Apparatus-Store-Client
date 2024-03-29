import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../../../assets/styles/style.css";
import auth from "../../../Firebase/firebase.init";
import SubNavbar from "./SubNavbar";

const Navbar = () => {
  // get user info from useAuthState
  const [user] = useAuthState(auth);

  // get current route location or pathname
  const currentLocation = useLocation().pathname;

  // is Route Url Dashboard or not
  const isDashboard = currentLocation.includes("/dashboard");

  // handle logout
  const logout = () => {
    signOut(auth);
  };

  const menuItems = (
    <>
      <li>
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/all-products">
          Products
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/all-blogs">
          News
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink className="nav-link" to="/dashboard">
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        <NavLink className="nav-link" to="/about">
          About us
        </NavLink>
      </li>
      <li>
        {user ? (
          <button
            onClick={logout}
            className="flex items-center justify-center gap-2 bg-primary hover:bg-rose-600 transition duration-150 text-white text-sm font-semibold px-7 py-2 rounded"
          >
            Logout
          </button>
        ) : (
          <NavLink
            className="flex items-center justify-center gap-2 bg-accent hover:bg-teal-600 transition duration-150 text-white text-md font-semibold px-8 py-2 rounded"
            to="/login"
          >
            Login
          </NavLink>
        )}
      </li>
    </>
  );

  return (
    <>
      {currentLocation === "/" && (
        <div className="px-20">
          <SubNavbar />
          <hr />
        </div>
      )}

      <div className="navbar sticky top-0 z-50 bg-white py-3 lg:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link className="nav-brand" to="/">
            <span>Apparatus</span> Store
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        {isDashboard && (
          <div className="navbar-end lg:hidden">
            <label htmlFor="side-drawer" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
