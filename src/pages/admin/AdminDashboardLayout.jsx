// src/pages/admin/AdminDashboardLayout.jsx
import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const AdminDashboardLayout = () => {
  const navigate = useNavigate();
  const handleLogout = () => navigate("/");

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
        <nav className="space-y-2">
          <NavLink to="home" className="block hover:underline">Dashboard</NavLink>
          <NavLink to="students" className="block hover:underline">Manage Students</NavLink>
          <NavLink to="faculty" className="block hover:underline">Manage Faculty</NavLink>
          <NavLink to="settings" className="block hover:underline">Settings</NavLink>
        </nav>
        <button
          onClick={handleLogout}
          className="mt-8 bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboardLayout;