import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import img from "../assets/Asset1.png";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
      <li>
        <NavLink to={"/contract"}>Contract Us</NavLink>
      </li>
      <li>
        <NavLink to={"/profile"}>User Info</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 px-2 lg:px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            {navLinks}
          </ul>
        </div>
        <a className="text-xl">
          <img className="w-34 h-16" src={img} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <p className="inline-flex items-center gap-2">
            {user.photoURL ? (
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={user.photoURL} alt="user_profile" />
                </div>
              </div>
            ) : (
              <img
                className="w-12"
                src="https://png.pngtree.com/png-clipart/20231104/original/pngtree-happy-corporate-business-professional-one-man-clipart-white-background-png-image_13504468.png"
                alt=""
              />
            )}
            <button
              onClick={() => signOutUser()}
              className="btn text-white bg-red-500 px-6 font-bold montserrat hover:bg-gray-800"
            >
              Sign Out
            </button>
          </p>
        ) : (
          <Link
            to={"/login"}
            className="btn text-white bg-red-500 px-6 font-bold montserrat hover:bg-gray-800"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
