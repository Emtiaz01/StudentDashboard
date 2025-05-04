import React, { useState } from "react";

const studentData = {
  name: "John Doe",
  studentId: "123456789",
  department: "Computer Science",
  email: "john.doe@example.com",
  academicYear: "2024",
  semester: "Semester 2",
  courses: [
    { name: "Mathematics", code: "MATH101", instructor: "Prof. Smith", attendance: 85, grade: "A" },
    { name: "Computer Science", code: "CS102", instructor: "Prof. Lee", attendance: 90, grade: "B+" },
    { name: "Physics", code: "PHYS103", instructor: "Prof. Brown", attendance: 88, grade: "A-" },
  ],
  assignments: [
    { title: "Math Assignment 1", dueDate: "2025-06-01", status: "Pending" },
    { title: "CS Project", dueDate: "2025-06-10", status: "Completed" },
    { title: "Physics Lab Report", dueDate: "2025-06-05", status: "Pending" },
  ],
  examSchedule: [
    { course: "Mathematics", date: "2025-06-15", time: "10:00 AM", location: "Room 101" },
    { course: "Computer Science", date: "2025-06-20", time: "2:00 PM", location: "Room 102" },
  ],
  financialInfo: {
    tuitionFees: "$5000",
    scholarships: "$1500",
    paymentStatus: "Paid",
  },
  notifications: [
    { message: "New Assignment Posted for CS102" },
    { message: "Exam Schedule Updated for Physics" },
    { message: "Your tuition fee has been successfully paid" },
  ],
};

function Profile() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAssignmentClick = (assignment) => {
    alert(`You clicked on ${assignment.title}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-8">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white p-8 rounded-lg shadow-xl text-center">
        <h2 className="text-4xl font-extrabold">Student Profile</h2>
        <p className="mt-4 text-lg">Welcome to your personal dashboard, {studentData.name}!</p>
      </div>

      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Personal Information</h3>
          <ul className="space-y-4">
            <li className="flex justify-between"><strong>Name:</strong> {studentData.name}</li>
            <li className="flex justify-between"><strong>Student ID:</strong> {studentData.studentId}</li>
            <li className="flex justify-between"><strong>Department:</strong> {studentData.department}</li>
            <li className="flex justify-between"><strong>Email:</strong> {studentData.email}</li>
            <li className="flex justify-between"><strong>Academic Year:</strong> {studentData.academicYear}</li>
            <li className="flex justify-between"><strong>Semester:</strong> {studentData.semester}</li>
          </ul>
        </div>

        {/* Profile Picture Upload Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Profile Picture</h3>
          <div className="flex flex-col items-center space-y-4">
            {image ? (
              <img
                src={image}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-indigo-600 object-cover"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center text-white text-3xl">
                +
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mt-4 py-2 px-4 rounded-full text-white bg-indigo-600 cursor-pointer hover:bg-indigo-700 transition-all"
            />
            <p className="text-sm text-gray-500">Click to upload a profile picture</p>
          </div>
        </div>
      </div>

      {/* Assignments Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Assignments</h3>
        <ul className="space-y-4">
          {studentData.assignments.map((assignment, index) => (
            <li key={index} className="flex justify-between items-center">
              <span className="font-medium">{assignment.title}</span>
              <span
                className={`cursor-pointer text-sm ${assignment.status === "Pending" ? "text-red-500" : "text-green-500"} font-semibold`}
                onClick={() => assignment.status === "Pending" && handleAssignmentClick(assignment)}
              >
                {assignment.status}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Financial Info Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Financial Information</h3>
        <ul className="space-y-4">
          <li className="flex justify-between"><strong>Tuition Fees:</strong> {studentData.financialInfo.tuitionFees}</li>
          <li className="flex justify-between"><strong>Scholarships:</strong> {studentData.financialInfo.scholarships}</li>
          <li className="flex justify-between"><strong>Payment Status:</strong> {studentData.financialInfo.paymentStatus}</li>
        </ul>
      </div>

      {/* Exam Schedule Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Exam Schedule</h3>
        <ul className="space-y-4">
          {studentData.examSchedule.map((exam, index) => (
            <li key={index}>
              <strong>{exam.course}</strong>: {exam.date} at {exam.time}, Location: {exam.location}
            </li>
          ))}
        </ul>
      </div>

      {/* Notifications Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Notifications</h3>
        <ul className="space-y-4">
          {studentData.notifications.map((notification, index) => (
            <li key={index} className="cursor-pointer text-indigo-600 hover:underline">
              {notification.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
