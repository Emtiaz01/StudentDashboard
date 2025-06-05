import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";

const FacultyDashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session / token or any stored data
    localStorage.clear();
    // Redirect to login page
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
        <div className="space-x-6">
          <NavLink
            to="/faculty/dashboard/home"
            className={({ isActive }) =>
              isActive ? "underline font-semibold" : "hover:underline"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/faculty/dashboard/courses"
            className={({ isActive }) =>
              isActive ? "underline font-semibold" : "hover:underline"
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/faculty/dashboard/students"
            className={({ isActive }) =>
              isActive ? "underline font-semibold" : "hover:underline"
            }
          >
            Students
          </NavLink>
          <NavLink
            to="/faculty/dashboard/profile"
            className={({ isActive }) =>
              isActive ? "underline font-semibold" : "hover:underline"
            }
          >
            Profile
          </NavLink>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white font-semibold transition"
        >
          Logout
        </button>
      </nav>

      {/* Content */}
      <main className="flex-grow bg-gray-50 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default FacultyDashboardLayout;
