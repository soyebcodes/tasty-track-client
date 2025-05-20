import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import {
  FaUserCircle,
  FaUtensils,
  FaHome,
  FaPlus,
  FaListUl,
} from "react-icons/fa";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="navbar bg-white w-11/12 mx-auto text-gray-800 px-4 font-medium">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-600 font-semibold underline"
                    : "hover:text-orange-500"
                }
              >
                <FaHome className="mr-2" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-recipes"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-600 font-semibold underline"
                    : "hover:text-orange-500"
                }
              >
                <FaListUl className="mr-2" /> All Recipes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-recipe"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-600 font-semibold underline"
                    : "hover:text-orange-500"
                }
              >
                <FaPlus className="mr-2" /> Add Recipe
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-recipes"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-600 font-semibold underline"
                    : "hover:text-orange-500"
                }
              >
                <FaUtensils className="mr-2" /> My Recipes
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink
          to="/"
          className="text-2xl font-bold flex items-center gap-2 text-amber-700"
        >
          <FaUtensils className="text-3xl text-red-500" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-600 to-orange-400">
            Savor Food
          </span>
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600 font-semibold underline"
                  : "hover:text-orange-500"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-recipes"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600 font-semibold underline"
                  : "hover:text-orange-500"
              }
            >
              All Recipes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-recipe"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600 font-semibold underline"
                  : "hover:text-orange-500"
              }
            >
              Add Recipe
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-recipes"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600 font-semibold underline"
                  : "hover:text-orange-500"
              }
            >
              My Recipes
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-3">
            <div
              className="tooltip tooltip-bottom"
              data-tip={user.displayName || "Anonymous"}
            >
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full ring-2 ring-orange-400"
                />
              ) : (
                <FaUserCircle className="text-3xl text-orange-400" />
              )}
            </div>
            <button
              onClick={handleLogout}
              className="btn btn-md bg-red-600 text-white hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "btn btn-md bg-amber-700 text-white"
                : "btn btn-md bg-amber-600 text-white hover:bg-amber-700"
            }
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
