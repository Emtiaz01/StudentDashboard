// src/pages/student/Courses.jsx
import React from "react";

const Courses = () => {
  const courses = [
    { id: 1, title: "Math 101", instructor: "Krishna Das" },
    { id: 2, title: "Physics 201", instructor: "Abhijit Saha" },
    { id: 3, title: "English Literature", instructor: "Suhala Lamia" },
    { id: 4, title: "Computer Science", instructor: "Sheekar Banarjee" },
    { id: 5, title: "History", instructor: "Shaheenur Alam" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Courses</h1>

      <div className="bg-white p-6 rounded shadow max-w-3xl">
        <ul>
          {courses.map((course) => (
            <li
              key={course.id}
              className="border-b last:border-b-0 py-4 flex justify-between items-center"
            >
              <span className="font-semibold">{course.title}</span>
              <span className="text-gray-600 italic">{course.instructor}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Courses;
