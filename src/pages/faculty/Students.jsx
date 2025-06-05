import React, { useState } from "react";

const Students = () => {
  // Sample data — replace or connect with real API later
  const [students] = useState([
    { id: 1, name: "Alice Johnson", email: "alice@example.com", attendance: 92, avgGrade: 88, progress: 75 },
    { id: 2, name: "Bob Smith", email: "bob@example.com", attendance: 85, avgGrade: 76, progress: 55 },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", attendance: 98, avgGrade: 93, progress: 90 },
  ]);

  return (
    <section className="max-w-6xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">Students Overview</h1>

      <ul className="space-y-6">
        {students.map(({ id, name, email, attendance, avgGrade, progress }) => (
          <li
            key={id}
            className="bg-white p-6 rounded-lg shadow border border-gray-200 hover:shadow-lg transition"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
                <p className="text-gray-600 mb-2">{email}</p>

                <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                  <div>
                    <span className="font-semibold">Attendance:</span> {attendance}%
                  </div>
                  <div>
                    <span className="font-semibold">Average Grade:</span> {avgGrade}%
                  </div>
                  <div className="w-full md:w-48">
                    <span className="font-semibold block mb-1">Course Progress:</span>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div
                        className="bg-green-500 h-4 rounded-full"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Removed buttons */}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Students;
