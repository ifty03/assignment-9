import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-center h-24 font-semibold bg-slate-900 text-white items-center">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-red-600 border-b-2 mx-1 md:mx-3"
              : "mx-1 md:mx-3 hover:text-orange-500"
          }
          to="/home"
        >
          HOME
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-red-600 border-b-2 mx-1 md:mx-3"
              : "mx-1 md:mx-3 hover:text-orange-500"
          }
          to="/review"
        >
          REVIEWS
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-red-600 border-b-2 mx-1 md:mx-3"
              : "mx-1 md:mx-3 hover:text-orange-500"
          }
          to="/dashboard"
        >
          DASHBOARD
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-red-600 border-b-2 mx-1 md:mx-3"
              : "mx-1 md:mx-3 hover:text-orange-500"
          }
          to="/blogs"
        >
          BLOGS
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-red-600 border-b-2 mx-1 md:mx-3"
              : "mx-1 md:mx-3 hover:text-orange-500"
          }
          to="/about"
        >
          ABOUT
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
