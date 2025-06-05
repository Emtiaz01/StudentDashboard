import React from "react";

const Sidebar = ({ role, activePage, setActivePage }) => {
  const links = [
    { name: "Dashboard", key: "dashboard" },
    { name: "Courses", key: "courses" },
    { name: "Profile", key: "profile" },
    { name: "Settings", key: "settings" },
  ];

  // For demo, we’ll just show all pages for Student role
  // You can customize links based on role here

  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4">
      <h1 className="text-xl font-bold mb-6">Student Dashboard</h1>
      <nav className="flex flex-col gap-3">
        {links.map(link => (
          <button
            key={link.key}
            onClick={() => setActivePage(link.key)}
            className={`text-left px-3 py-2 rounded ${
              activePage === link.key ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
          >
            {link.name}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
