import React from "react";

const AdminHome = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
      <p className="text-gray-600 text-lg">
        Welcome to the Admin Dashboard. Navigate through the menu to manage users, view reports, and configure system preferences.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Total Students</h3>
          <p className="text-3xl mt-2 text-blue-600">1,200</p>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Total Faculty</h3>
          <p className="text-3xl mt-2 text-green-600">75</p>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Active Courses</h3>
          <p className="text-3xl mt-2 text-purple-600">58</p>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;