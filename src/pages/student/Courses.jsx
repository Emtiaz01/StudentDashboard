import React from "react";

const Courses = () => {
  const courses = [
    { id: 1, title: "Mathematics 101" },
    { id: 2, title: "World History 201" },
    { id: 3, title: "Physics 301" },
  ];

  return (
    <section className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-800 border-b border-gray-300 pb-3">
          Courses
        </h1>
      </header>

      <ul className="space-y-6">
        {courses.map(({ id, title }) => (
          <li
            key={id}
            className="flex items-center justify-between p-5 border rounded-md hover:shadow-lg transition-shadow duration-300 cursor-default"
          >
            <span className="text-lg text-gray-700 font-medium">{title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Courses;
