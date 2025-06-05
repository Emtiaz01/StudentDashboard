import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";

// Student imports
import StudentDashboardLayout from "./pages/StudentDashboardLayout";
import Home from "./pages/student/Home";
import Profile from "./pages/student/Profile";
import Courses from "./pages/student/Courses";
import Assignments from "./pages/student/Assignments";

// Faculty imports
import FacultyDashboardLayout from "./pages/faculty/FacultyDashboardLayout";
import FacultyHome from "./pages/faculty/Home";
import FacultyCourses from "./pages/faculty/Courses";
import Students from "./pages/faculty/Students";
import FacultyProfile from "./pages/faculty/Profile";

// Admin imports
import AdminDashboardLayout from "./pages/admin/AdminDashboardLayout";
import AdminHome from "./pages/admin/Home";
import ManageStudents from "./pages/admin/ManageStudents";
import ManageFaculty from "./pages/admin/ManageFaculty";
import AdminSettings from "./pages/admin/Settings";

const App = () => {
  return (
    <Routes>
      {/* Login route */}
      <Route path="/" element={<Login />} />

      {/* Student dashboard routes */}
      <Route path="/student/dashboard" element={<StudentDashboardLayout />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="courses" element={<Courses />} />
        <Route path="assignments" element={<Assignments />} />
      </Route>

      {/* Faculty dashboard routes */}
      <Route path="/faculty/dashboard" element={<FacultyDashboardLayout />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<FacultyHome />} />
        <Route path="courses" element={<FacultyCourses />} />
        <Route path="students" element={<Students />} />
        <Route path="profile" element={<FacultyProfile />} />
      </Route>
      
      {/* Admin dashboard */}
      <Route path="/admin/dashboard" element={<AdminDashboardLayout />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<AdminHome />} />
        <Route path="students" element={<ManageStudents />} />
        <Route path="faculty" element={<ManageFaculty />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>

      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
