import React from "react";
import { NavLink, Outlet, Link } from "react-router";

const DashboardLayout = () => {
  const activeClass = ({ isActive }) =>
    isActive
      ? "text-white font-semibold bg-orange-500 px-3 py-2 rounded"
      : "hover:text-orange-600";

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-base-200 shadow-md px-4 py-3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xl font-bold text-orange-600">Dashboard</div>

          {/* nav links */}
          <ul className="flex flex-wrap items-center gap-4 text-sm font-medium">
            <li>
              <NavLink to="/dashboard" end className={activeClass}>
                Overview
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/all-recipes" className={activeClass}>
                All Recipes
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/my-recipes" className={activeClass}>
                My Recipes
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/add-recipe" className={activeClass}>
                Add Recipe
              </NavLink>
            </li>
          </ul>

          <Link
            to="/"
            className="btn btn-sm btn-outline btn-primary mt-2 md:mt-0"
          >
            ← Home
          </Link>
        </div>
      </nav>

      <main className="flex-1 p-4 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
