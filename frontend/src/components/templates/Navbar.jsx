import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../../context/AuthProvider";
const Navbar = () => {
  const [authUser, setAuthUser] = useAuth();
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/courses">Courses</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>

      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar rounded-lg fixed top-0 bg-[rgb(29,35,42)] px-14 z-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn  lg:hidden ">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <a className="px-3 font-semibold  text-sm md:text-2xl hover:text-zinc-700 cursor-pointer duration-300">
            Pathshalaa
          </a>
        </div>
        <div className="navbar-end   ">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>

          {/* Search Bar */}
          <label className="input outline-none hidden border md:flex items-center bg-zinc-700 gap-2 xl:mr-20 ">
            <input
              type="text"
              className="grow outline-none"
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
            {
              authUser ? <Logout/>:
            <div
              className="md:px-3 py-2 ml-14 text-xs md:text-lg md:ml-2 hover:bg-zinc-500 rounded-lg"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              <a className="cursor-pointer px-3 py-2 ">Login</a>
            </div>
         
            }
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
