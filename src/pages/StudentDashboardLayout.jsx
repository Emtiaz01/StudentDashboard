// src/pages/StudentDashboardLayout.jsx
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const StudentDashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Here you can clear auth tokens or user data if you have any
    navigate("/"); // redirect to login page
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-8">Student Dashboard</h2>

        <nav className="flex flex-col space-y-4 text-gray-700 flex-grow">
          <Link
            to="/student/dashboard/home"
            className="hover:bg-blue-100 px-3 py-2 rounded"
          >
            Home
          </Link>
          <Link
            to="/student/dashboard/profile"
            className="hover:bg-blue-100 px-3 py-2 rounded"
          >
            Profile
          </Link>
          <Link
            to="/student/dashboard/courses"
            className="hover:bg-blue-100 px-3 py-2 rounded"
          >
            Courses
          </Link>
          <Link
            to="/student/dashboard/assignments"
            className="hover:bg-blue-100 px-3 py-2 rounded"
          >
            Assignments
          </Link>
        </nav>

        <button
          onClick={handleLogout}
          className="mt-auto text-left text-red-600 hover:underline"
        >
          Logout
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-grow p-8 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default StudentDashboardLayout;
