import React, { useState } from "react";

const ManageFaculty = () => {
  const [faculty, setFaculty] = useState([
    {
      id: 1,
      name: "Krishna Das",
      reviews: "Very helpful and clear explanations.",
      password: "profsmithpass",
      blocked: false,
      results: [
        { studentName: "Emtiaz Ahmed", grade: 88, attendance: 92 },
        { studentName: "Israt Jahan", grade: 93, attendance: 98 },
      ],
    },
    {
      id: 2,
      name: "Abhijit Saha",
      reviews: "Tough grader but fair.",
      password: "janedoe123",
      blocked: false,
      results: [
        { studentName: "Naimur Rashid", grade: 76, attendance: 85 },
      ],
    },
  ]);

  const [visibleResultsFor, setVisibleResultsFor] = useState(null);

  const toggleBlock = (id) => {
    setFaculty((prev) =>
      prev.map((fac) =>
        fac.id === id ? { ...fac, blocked: !fac.blocked } : fac
      )
    );
  };

  const changePassword = (id) => {
    const newPass = prompt("Enter new password:");
    if (newPass) {
      setFaculty((prev) =>
        prev.map((fac) =>
          fac.id === id ? { ...fac, password: newPass } : fac
        )
      );
      alert("Password updated!");
    }
  };

  const toggleResults = (id) => {
    setVisibleResultsFor(visibleResultsFor === id ? null : id);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Manage Faculty</h1>
      <p className="text-gray-600 mb-4">
        Manage faculty info, view reviews, update passwords, block/unblock
        accounts, and view submitted results.
      </p>
      <ul className="space-y-4">
        {faculty.map(({ id, name, reviews, password, blocked, results }) => (
          <li
            key={id}
            className={`border p-4 rounded bg-white shadow ${
              blocked ? "opacity-50" : ""
            }`}
          >
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Student Reviews:</strong> {reviews}
            </p>
            <p>
              <strong>Password:</strong>{" "}
              <span className="font-mono bg-gray-100 px-2 rounded">
                {password}
              </span>
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <button
                onClick={() => changePassword(id)}
                className="px-3 py-1 bg-yellow-400 hover:bg-yellow-500 rounded"
              >
                Change Password
              </button>
              <button
                onClick={() => toggleBlock(id)}
                className={`px-3 py-1 rounded ${
                  blocked
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "bg-red-500 hover:bg-red-600 text-white"
                }`}
              >
                {blocked ? "Unblock Account" : "Block Account"}
              </button>
              <button
                onClick={() => toggleResults(id)}
                className="px-3 py-1 bg-green-600 text-white rounded"
              >
                {visibleResultsFor === id
                  ? "Hide Submitted Results"
                  : "View Submitted Results"}
              </button>
            </div>

            {visibleResultsFor === id && (
              <div className="mt-4 border-t pt-4">
                <h3 className="font-semibold mb-2">Submitted Results:</h3>
                {results.length === 0 ? (
                  <p>No results submitted yet.</p>
                ) : (
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr>
                        <th className="border-b px-3 py-2">Student Name</th>
                        <th className="border-b px-3 py-2">Grade (%)</th>
                        <th className="border-b px-3 py-2">Attendance (%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.map(({ studentName, grade, attendance }, idx) => (
                        <tr
                          key={idx}
                          className={idx % 2 === 0 ? "bg-gray-100" : ""}
                        >
                          <td className="px-3 py-2">{studentName}</td>
                          <td className="px-3 py-2">{grade}</td>
                          <td className="px-3 py-2">{attendance}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageFaculty;
