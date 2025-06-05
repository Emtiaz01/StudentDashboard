import React from "react";

const Navbar = ({ user }) => {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h2 className="text-lg font-semibold">Welcome, {user.name}</h2>
      <div>
        <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;
