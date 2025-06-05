// src/pages/student/Home.jsx
import React from "react";
import { useUser } from "../../context/UserContext";

const Home = () => {
  const { user } = useUser();

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-xl shadow-md">
      <h1 className="text-4xl font-bold mb-4">
        Welcome Back, <span className="text-blue-600">{user.name}</span>!
      </h1>
      <p className="text-gray-700 mb-8">
        Here’s a quick overview of your student dashboard.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Courses</h2>
          <p className="text-gray-700">
            You are currently enrolled in <strong>{user.courses?.length || 0}</strong> courses.
          </p>
        </div>

        <div className="bg-green-100 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Upcoming Assignments</h2>
          <p className="text-gray-700">
            You have <strong>{user.assignments?.filter(a => !a.completed).length || 0}</strong> pending assignments.
          </p>
        </div>

        <div className="bg-yellow-100 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Profile Status</h2>
          <p className="text-gray-700">
            Your profile is <strong>{user.isProfileComplete ? "complete" : "incomplete"}</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
