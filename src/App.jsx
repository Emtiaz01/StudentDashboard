import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import StudentDashboardLayout from './pages/StudentDashboardLayout';
import Home from './pages/student/Home';
import Assignments from './pages/student/Assignments';
import Grades from './pages/student/Grades';
import Profile from './pages/student/Profile';
import Subjects from './pages/student/Subjects';
import TeacherDashboard from './pages/TeacherDashboard';

function App() {
  return (
    <Routes>
      {/* Login Route */}
      <Route path="/" element={<Login />} />

      {/* Student Dashboard Routes */}
      <Route path="/student" element={<StudentDashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="grades" element={<Grades />} />
        <Route path="profile" element={<Profile />} />
        <Route path="subjects" element={<Subjects />} />
      </Route>

      {/* Teacher Dashboard Route */}
      <Route path="/teacher" element={<TeacherDashboard />} />
    </Routes>
  );
}

export default App;
