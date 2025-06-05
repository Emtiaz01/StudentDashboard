// src/pages/faculty/Profile.jsx
import React, { useState, useRef } from "react";

const FacultyProfile = () => {
  const [user, setUser] = useState({
    name: "Krishna Das",
    email: "krishna@iubat.edu",
    department: "Computer Science",
    phone: "01234567890",
    photo: null,
  });

  const [formData, setFormData] = useState(user);
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const photoURL = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, photo: photoURL, photoFile: file }));
    }
  };

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
    setFormData(user); // reset changes on cancel
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUser(formData);
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-10">
      <h1 className="text-3xl font-semibold mb-10 text-gray-900">Your Profile</h1>

      <div className="flex flex-col md:flex-row md:items-center gap-8 mb-10">
        <div
          className={`relative w-40 h-40 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg cursor-pointer ${
            isEditing ? "hover:opacity-80 transition" : ""
          }`}
          onClick={() => isEditing && fileInputRef.current.click()}
        >
          <img
            src={
              formData.photo
                ? formData.photo
                : "https://www.gravatar.com/avatar/?d=mp&s=160"
            }
            alt="Profile"
            className="w-full h-full object-cover"
          />
          {isEditing && (
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-sm font-medium">
              Change Photo
            </div>
          )}
        </div>

        {isEditing && (
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handlePhotoChange}
            className="hidden"
          />
        )}

        {!isEditing && (
          <div className="flex flex-col justify-center space-y-2 text-gray-700">
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">Department: {user.department}</p>
            <p className="text-gray-600">Phone: {user.phone}</p>
          </div>
        )}
      </div>

      {isEditing && (
        <form onSubmit={handleSave} className="space-y-6 max-w-lg mx-auto">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label
              htmlFor="department"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Department
            </label>
            <input
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={handleEditToggle}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      )}

      {!isEditing && (
        <button
          onClick={handleEditToggle}
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Edit Profile
        </button>
      )}
    </div>
  );
};

export default FacultyProfile;
