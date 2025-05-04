import React, { useState } from "react";

const studentData = {
  name: "John Doe",
  studentID: "12345678",
  courseName: "Computer Science 101",
  instructor: "Dr. Smith",
  semesterYear: "2025 Spring",
  overallGrade: "A",
  gradeBreakdown: [
    { assignment: "Assignment 1", grade: "90", weight: "20%" },
    { assignment: "Assignment 2", grade: "85", weight: "20%" },
    { quiz: "Quiz 1", grade: "80", weight: "15%" },
    { project: "Project 1", grade: "95", weight: "30%" },
    { finalExam: "Final Exam", grade: "92", weight: "15%" },
  ],
  classAverage: "85",
  attendancePercentage: "90%",
  upcomingTests: ["Quiz 2 - March 30", "Final Exam - May 15"],
};

function GradePage() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white p-8 rounded-lg shadow-xl text-center mb-8">
        <h1 className="text-4xl font-extrabold">Grade Information</h1>
      </div>

      {/* Grade Information Section */}
      <div className="max-w-7xl mx-auto p-8 space-y-8">
        {/* Personal Information */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-6">Personal Information</h2>
          <ul className="space-y-4">
            <li className="flex justify-between"><strong>Name:</strong> {studentData.name}</li>
            <li className="flex justify-between"><strong>Student ID:</strong> {studentData.studentID}</li>
            <li className="flex justify-between"><strong>Course:</strong> {studentData.courseName}</li>
            <li className="flex justify-between"><strong>Instructor:</strong> {studentData.instructor}</li>
            <li className="flex justify-between"><strong>Semester/Year:</strong> {studentData.semesterYear}</li>
          </ul>
        </div>

        {/* Grade Breakdown */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-6">Grade Breakdown</h2>
          <table className="min-w-full mt-4">
            <thead>
              <tr>
                <th className="text-left p-4 hover:bg-gray-100 transition duration-200">Assignment</th>
                <th className="text-left p-4 hover:bg-gray-100 transition duration-200">Grade</th>
                <th className="text-left p-4 hover:bg-gray-100 transition duration-200">Weight</th>
              </tr>
            </thead>
            <tbody>
              {studentData.gradeBreakdown.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4 hover:bg-gray-50 transition duration-200">{item.assignment || item.quiz || item.project || item.finalExam}</td>
                  <td className="p-4 hover:bg-gray-50 transition duration-200">{item.grade}</td>
                  <td className="p-4 hover:bg-gray-50 transition duration-200">{item.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Class Average and Attendance */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-6">Class Average & Attendance</h2>
          <p className="text-gray-600 mt-2">Class Average: {studentData.classAverage}</p>
          <p className="text-gray-600">Attendance: {studentData.attendancePercentage}</p>
        </div>

        {/* Upcoming Assessments */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-6">Upcoming Assessments</h2>
          <ul className="mt-4">
            {studentData.upcomingTests.map((test, index) => (
              <li key={index} className="text-gray-600 hover:text-indigo-600 cursor-pointer transition duration-200">{test}</li>
            ))}
          </ul>
        </div>

        {/* Download Button */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-200">
            Download Grade Information (PDF)
          </button>
        </div>
      </div>
    </div>
  );
}

export default GradePage;
