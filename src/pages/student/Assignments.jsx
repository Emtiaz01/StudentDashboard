// src/pages/student/Assignments.jsx
import React from "react";

const Assignments = () => {
  const assignments = [
    { id: 1, title: "Math Homework 3", dueDate: "2025-06-15" },
    { id: 2, title: "Physics Lab Report", dueDate: "2025-06-20" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Upcoming Assignments</h1>

      <div className="bg-white p-6 rounded shadow max-w-3xl">
        <ul>
          {assignments.map((a) => (
            <li
              key={a.id}
              className="border-b last:border-b-0 py-4 flex justify-between items-center"
            >
              <span>{a.title}</span>
              <span className="text-gray-600">{a.dueDate}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Assignments;
