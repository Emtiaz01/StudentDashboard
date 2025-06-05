import React from "react";

const AdminSettings = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Settings</h1>
      <p className="text-gray-600 mb-6">Configure system settings and preferences here.</p>

      <div className="space-y-6">
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-medium mb-2">System Preferences</h2>
          <label className="block mb-2">
            <span className="text-gray-700">Enable Notifications</span>
            <input type="checkbox" className="ml-2" defaultChecked />
          </label>
          <label className="block">
            <span className="text-gray-700">Auto-save Data</span>
            <input type="checkbox" className="ml-2" />
          </label>
        </div>

        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-medium mb-2">Admin Account</h2>
          <label className="block mb-2">
            <span className="text-gray-700">Change Email</span>
            <input type="email" className="mt-1 p-2 border rounded w-full" placeholder="admin@example.com" />
          </label>
          <label className="block">
            <span className="text-gray-700">Change Password</span>
            <input type="password" className="mt-1 p-2 border rounded w-full" placeholder="••••••••" />
          </label>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;