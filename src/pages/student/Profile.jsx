// src/pages/student/Profile.jsx
import React, { useState, useRef } from "react";
import { useUser } from "../../context/UserContext";

const Profile = () => {
  const { user, setUser } = useUser();

  const [formData, setFormData] = useState(user);
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhotoClick = () => {
    fileInputRef.current.click();
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          photo: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setFormData(user); // revert changes
    setIsEditing(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUser(formData); // update global user state
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      <div className="flex flex-col items-center mb-8">
        <div
          className="w-32 h-32 rounded-full overflow-hidden cursor-pointer border-4 border-blue-600"
          onClick={handlePhotoClick}
          title="Click to upload a new photo"
        >
          {formData.photo ? (
            <img
              src={formData.photo}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 text-6xl font-bold">
              {formData.name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handlePhotoChange}
        />
        {!isEditing && (
          <button
            onClick={handleEdit}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Edit Profile
          </button>
        )}
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <div>
          <label className="block font-semibold mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            disabled={!isEditing}
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full border rounded px-4 py-2 ${
              isEditing ? "border-blue-600" : "border-gray-300 bg-gray-100"
            }`}
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            disabled={!isEditing}
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full border rounded px-4 py-2 ${
              isEditing ? "border-blue-600" : "border-gray-300 bg-gray-100"
            }`}
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Student ID</label>
          <input
            type="text"
            name="studentId"
            disabled={!isEditing}
            value={formData.studentId}
            onChange={handleInputChange}
            className={`w-full border rounded px-4 py-2 ${
              isEditing ? "border-blue-600" : "border-gray-300 bg-gray-100"
            }`}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            disabled={!isEditing}
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full border rounded px-4 py-2 ${
              isEditing ? "border-blue-600" : "border-gray-300 bg-gray-100"
            }`}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Major</label>
          <input
            type="text"
            name="major"
            disabled={!isEditing}
            value={formData.major}
            onChange={handleInputChange}
            className={`w-full border rounded px-4 py-2 ${
              isEditing ? "border-blue-600" : "border-gray-300 bg-gray-100"
            }`}
          />
        </div>

        {isEditing && (
          <div className="flex space-x-4 mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Profile;
