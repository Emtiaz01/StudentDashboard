// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate(`/${selectedRole}/dashboard`);
    } else {
      alert("Please enter email and password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1650&q=80"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Login Card */}
      <div className="relative z-10 bg-white bg-opacity-90 backdrop-blur p-8 rounded-xl shadow-xl w-full max-w-md text-center">
        {!selectedRole ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Choose Login Role</h2>
            <div className="space-y-4">
              <button
                onClick={() => handleRoleSelect("student")}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Student Login
              </button>
              <button
                onClick={() => handleRoleSelect("faculty")}
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
              >
                Faculty Login
              </button>
              <button
                onClick={() => handleRoleSelect("admin")}
                className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
              >
                Admin Login
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-4 capitalize text-gray-800">
              {selectedRole} Login
            </h2>
            <form onSubmit={handleLogin} className="space-y-4 text-left">
              <input
                type="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded"
              />
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole(null)}
                className="w-full mt-2 text-sm text-gray-600 hover:underline"
              >
                🔙 Back to role selection
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
