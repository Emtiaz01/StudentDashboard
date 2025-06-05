import React, { useState } from "react";

const FacultyHome = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Sample students data
  const students = [
    { id: 1, name: "Emtiaz Ahmed", attendance: 92, grade: "A" },
    { id: 2, name: "Israt Jahanh", attendance: 85, grade: "B+" },
    { id: 3, name: "Naimur Rashid", attendance: 78, grade: "B" },
  ];

  // State for grades (editable)
  const [grades, setGrades] = useState(
    students.reduce((acc, student) => {
      acc[student.id] = student.grade;
      return acc;
    }, {})
  );

  // Sample assignments data
  const [assignments, setAssignments] = useState([
    { id: 1, title: "Essay on World History", dueDate: "2025-06-15", graded: false },
    { id: 2, title: "Physics Lab Report", dueDate: "2025-06-20", graded: true },
  ]);

  // New assignment form state
  const [newAssignment, setNewAssignment] = useState({
    title: "",
    dueDate: "",
  });

  // Handle grade change for a student
  const handleGradeChange = (studentId, value) => {
    setGrades((prev) => ({ ...prev, [studentId]: value }));
  };

  // Save grades (for demo, just alert)
  const saveGrades = () => {
    alert("Grades saved:\n" + JSON.stringify(grades, null, 2));
  };

  // Handle input change for new assignment form
  const handleNewAssignmentChange = (e) => {
    const { name, value } = e.target;
    setNewAssignment((prev) => ({ ...prev, [name]: value }));
  };

  // Add new assignment
  const addAssignment = (e) => {
    e.preventDefault();
    if (!newAssignment.title || !newAssignment.dueDate) return;

    setAssignments((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        title: newAssignment.title,
        dueDate: newAssignment.dueDate,
        graded: false,
      },
    ]);
    setNewAssignment({ title: "", dueDate: "" });
  };

  // Calculate To-Do tasks for Overview
  const toDoTasks = [
    ...assignments
      .filter((a) => !a.graded)
      .map((a) => `Grade assignment: "${a.title}" due on ${a.dueDate}`),
    "Review attendance records",
    "Create new assignments",
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-10 font-sans">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Welcome Back, Professor!
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Manage your courses and students effectively.
        </p>
      </header>

      <nav className="mb-8 border-b border-gray-300">
        <ul className="flex space-x-6 text-sm font-medium text-gray-600">
          {[
            { id: "overview", label: "Overview" },
            { id: "grades", label: "Assign Grades" },
            { id: "assignments", label: "Assignments" },
            { id: "attendance", label: "Attendance" },
          ].map(({ id, label }) => (
            <li
              key={id}
              className={`cursor-pointer pb-3 ${
                activeTab === id
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "hover:text-blue-500"
              }`}
              onClick={() => setActiveTab(id)}
            >
              {label}
            </li>
          ))}
        </ul>
      </nav>

      <section>
        {activeTab === "overview" && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Dashboard Overview
            </h2>
            <p className="text-gray-600 mb-4">
              Here’s what’s on your plate:
            </p>
            <ul className="list-disc list-inside space-y-2 max-w-md text-gray-700">
              {toDoTasks.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "grades" && (
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Assign Grades
            </h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-2 px-4">Student Name</th>
                  <th className="py-2 px-4">Grade</th>
                </tr>
              </thead>
              <tbody>
                {students.map(({ id, name }) => (
                  <tr key={id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-2 px-4">{name}</td>
                    <td className="py-2 px-4">
                      <input
                        type="text"
                        value={grades[id]}
                        onChange={(e) => handleGradeChange(id, e.target.value)}
                        className="border rounded px-2 py-1 w-24 text-center"
                        maxLength={2}
                        placeholder="e.g. A+"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={saveGrades}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Save Grades
            </button>
          </div>
        )}

        {activeTab === "assignments" && (
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Assignments
            </h2>

            <form onSubmit={addAssignment} className="mb-6 space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Assignment Title"
                value={newAssignment.title}
                onChange={handleNewAssignmentChange}
                className="border rounded px-3 py-2 w-full"
                required
              />
              <input
                type="date"
                name="dueDate"
                value={newAssignment.dueDate}
                onChange={handleNewAssignmentChange}
                className="border rounded px-3 py-2 w-full"
                required
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              >
                Add Assignment
              </button>
            </form>

            <ul className="space-y-4">
              {assignments.map(({ id, title, dueDate, graded }) => (
                <li
                  key={id}
                  className={`border p-4 rounded-md shadow-sm ${
                    graded ? "bg-green-50" : "bg-yellow-50"
                  }`}
                >
                  <h3 className="font-medium text-lg text-gray-700">{title}</h3>
                  <p className="text-gray-500">Due Date: {dueDate}</p>
                  <p className="text-sm mt-1">
                    Status:{" "}
                    <span className={graded ? "text-green-700" : "text-yellow-700"}>
                      {graded ? "Graded" : "Pending grading"}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "attendance" && (
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Attendance</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-2 px-4">Student Name</th>
                  <th className="py-2 px-4">Attendance %</th>
                </tr>
              </thead>
              <tbody>
                {students.map(({ id, name, attendance }) => (
                  <tr key={id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-2 px-4">{name}</td>
                    <td className="py-2 px-4">{attendance}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
};

export default FacultyHome;
