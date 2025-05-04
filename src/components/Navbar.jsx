import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-700 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Student Dashboard Title */}
        <div className="text-white text-3xl font-extrabold">
          <Link to="/" className="hover:text-yellow-400 transition-colors duration-300">
            Student Dashboard
          </Link>
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-white text-lg font-medium hover:text-yellow-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/subjects"
            className="text-white text-lg font-medium hover:text-yellow-400 transition-colors duration-300"
          >
            Subjects
          </Link>
          <Link
            to="/assignments"
            className="text-white text-lg font-medium hover:text-yellow-400 transition-colors duration-300"
          >
            Assignments
          </Link>
          <Link
            to="/grades"
            className="text-white text-lg font-medium hover:text-yellow-400 transition-colors duration-300"
          >
            Grades
          </Link>
          <Link
            to="/profile"
            className="text-white text-lg font-medium hover:text-yellow-400 transition-colors duration-300"
          >
            Profile
          </Link>
        </div>

        {/* Mobile Menu Button (optional) */}
        <div className="md:hidden">
          <button className="text-white text-2xl">
            <i className="fas fa-bars"></i> {/* You can replace this with a hamburger icon if desired */}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
