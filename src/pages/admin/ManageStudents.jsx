import React, { useState } from "react";

const ManageStudents = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Emtiaz Ahmed",
      instructor: "Krishna Das",
      feedback: "Excellent participation.",
      section: "A1",
      password: "alice123",
      blocked: false,
    },
    {
      id: 2,
      name: "Israt Jahan",
      instructor: "Krishna Das",
      feedback: "Needs improvement in assignments.",
      section: "B2",
      password: "bobpassword",
      blocked: false,
    },
    {
      id: 3,
      name: "Naimur Rashid",
      instructor: "Abhijit Saha",
      feedback: "Needs improvement in assignments.",
      section: "B2",
      password: "aahnajaih",
      blocked: false,
    },
  ]);

  const [editingStudentId, setEditingStudentId] = useState(null);
  const [newSection, setNewSection] = useState("");
  const [newInstructor, setNewInstructor] = useState("");

  const sections = ["A1", "A2", "B1", "B2", "C1"];
  const instructors = ["Krishna Das", "Abhijit Saha"];

  const toggleBlock = (id) => {
    setStudents((prev) =>
      prev.map((stu) =>
        stu.id === id ? { ...stu, blocked: !stu.blocked } : stu
      )
    );
  };

  const changePassword = (id) => {
    const newPass = prompt("Enter new password:");
    if (newPass) {
      setStudents((prev) =>
        prev.map((stu) =>
          stu.id === id ? { ...stu, password: newPass } : stu
        )
      );
      alert("Password updated!");
    }
  };

  const startEdit = (student) => {
    setEditingStudentId(student.id);
    setNewSection(student.section);
    setNewInstructor(student.instructor);
  };

  const cancelEdit = () => {
    setEditingStudentId(null);
  };

  const saveEdit = () => {
    setStudents((prev) =>
      prev.map((stu) =>
        stu.id === editingStudentId
          ? { ...stu, section: newSection, instructor: newInstructor }
          : stu
      )
    );
    setEditingStudentId(null);
    alert("Section and Instructor updated!");
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Manage Students</h1>
      <p className="text-gray-600 mb-4">
        Manage student accounts, change sections/instructors, update passwords,
        and block/unblock accounts.
      </p>
      <ul className="space-y-4">
        {students.map(
          ({ id, name, instructor, feedback, section, password, blocked }) => (
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
                <strong>Instructor:</strong>{" "}
                {editingStudentId === id ? (
                  <select
                    value={newInstructor}
                    onChange={(e) => setNewInstructor(e.target.value)}
                    className="border rounded px-2 py-1"
                  >
                    {instructors.map((inst) => (
                      <option key={inst} value={inst}>
                        {inst}
                      </option>
                    ))}
                  </select>
                ) : (
                  instructor
                )}
              </p>
              <p>
                <strong>Instructor Feedback:</strong> {feedback}
              </p>
              <p>
                <strong>Section:</strong>{" "}
                {editingStudentId === id ? (
                  <select
                    value={newSection}
                    onChange={(e) => setNewSection(e.target.value)}
                    className="border rounded px-2 py-1"
                  >
                    {sections.map((sec) => (
                      <option key={sec} value={sec}>
                        {sec}
                      </option>
                    ))}
                  </select>
                ) : (
                  section
                )}
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

                {editingStudentId === id ? (
                  <>
                    <button
                      onClick={saveEdit}
                      className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded"
                    >
                      Save
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="px-3 py-1 bg-gray-400 hover:bg-gray-500 rounded"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() =>
                      startEdit({ id, section, instructor })
                    }
                    className="px-3 py-1 bg-blue-500 text-white rounded"
                  >
                    Change Section / Instructor
                  </button>
                )}
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default ManageStudents;
