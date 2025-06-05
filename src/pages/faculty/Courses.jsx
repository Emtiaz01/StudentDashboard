import React from "react";

const FacultyCourses = () => {
  const courses = [
    { id: 1, title: "Mathematics 101", enrolledStudents: 25 },
    { id: 2, title: "World History 201", enrolledStudents: 18 },
    { id: 3, title: "Physics 301", enrolledStudents: 22 },
  ];

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Courses</h1>
      <ul className="space-y-4 max-w-3xl">
        {courses.map(({ id, title, enrolledStudents }) => (
          <li
            key={id}
            className="border p-4 rounded-md shadow-sm hover:shadow-md transition cursor-default"
          >
            <h3 className="font-medium text-lg text-gray-700">{title}</h3>
            <p className="text-gray-500">Enrolled Students: {enrolledStudents}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FacultyCourses;
