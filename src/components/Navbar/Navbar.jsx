import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import {
  FaUserCircle,
  FaMoon,
  FaSun,
  FaHome,
  FaListUl,
  FaInfoCircle,
  FaPhone,
  FaLifeRing,
} from "react-icons/fa";
import logoLight from "../../assets/logo.png";
import logoDark from "../../assets/logo-dark.png";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  const navigate = useNavigate();

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDark]);

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-orange-600 font-semibold underline"
      : "text-base-content hover:text-orange-500";

  return (
    <div className="navbar w-11/12 mx-auto px-4 bg-base-100 text-base-content sticky top-0 z-50 shadow-md font-medium">
      {/* Left: Logo + Mobile Nav */}
      <div className="navbar-start">
        {/* Mobile dropdown */}
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
              <NavLink to="/" className={linkClass}>
                <FaHome className="mr-2" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/all-recipes" className={linkClass}>
                <FaListUl className="mr-2" /> All Recipes
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={linkClass}>
                <FaInfoCircle className="mr-2" /> About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={linkClass}>
                <FaPhone className="mr-2" /> Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/support" className={linkClass}>
                <FaLifeRing className="mr-2" /> Support
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink to="/dashboard" className={linkClass}>
                  <FaUserCircle className="mr-2" /> Dashboard
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold flex items-center gap-2 text-amber-700"
        >
          {/* Light mode logo */}
          <img
            src={logoLight}
            alt="logo"
            className="w-24 h-24 block dark:hidden"
          />

          {/* Dark mode logo */}
          <img
            src={logoDark}
            alt="logo"
            className="w-24 h-24 hidden dark:block"
          />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-600 to-orange-400"></span>
        </NavLink>
      </div>

      {/* Center: Large screen menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
          <li>
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/all-recipes" className={linkClass}>
              All Recipes
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClass}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/support" className={linkClass}>
              Support
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink to="/dashboard" className={linkClass}>
                Dashboard
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      {/* Right: Theme + Auth */}
      <div className="navbar-end flex items-center gap-4">
        {/* Theme toggle */}
        <button
          className="btn btn-sm btn-circle"
          onClick={() => setIsDark((prev) => !prev)}
          aria-label="Toggle Theme"
        >
          {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon />}
        </button>

        {/* Auth buttons */}
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
