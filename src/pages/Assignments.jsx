import React, { useState, useEffect } from "react";

function AssignmentPage() {
  const [submissionStatus, setSubmissionStatus] = useState("Not Submitted");
  const [file, setFile] = useState(null);
  const [countdown, setCountdown] = useState("");
  const dueDate = new Date("2025-06-01T23:59:59");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = dueDate - now;

      if (distance < 0) {
        setCountdown("Overdue");
        clearInterval(interval);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        setCountdown(`${days}d ${hours}h ${minutes}m left`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    if (file) {
      setSubmissionStatus("Submitted");
      alert("Submission successful!");
    } else {
      alert("Please upload a file first.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10">
      <style>{`
        .hoverable-box {
          transition: box-shadow 0.3s ease;
        }
        .hoverable-box:hover {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-indigo-800 mb-2">Assignment Overview</h1>
        <p className="text-gray-600">Detailed information and tools to manage your assignment efficiently.</p>
      </div>

      {/* Basic Info */}
      <section className="bg-white p-6 rounded-lg shadow-md hoverable-box">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Basic Information</h2>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Title:</strong> Data Structures Assignment</li>
          <li><strong>Course:</strong> CS101 - Introduction to Programming</li>
          <li><strong>Instructor:</strong> Dr. Jane Smith</li>
          <li><strong>Assignment ID:</strong> A1023</li>
        </ul>
      </section>

      {/* Deadline */}
      <section className="bg-white p-6 rounded-lg shadow-md hoverable-box">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Deadline & Time</h2>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Date Assigned:</strong> May 1, 2025</li>
          <li><strong>Due Date:</strong> June 1, 2025 at 11:59 PM</li>
          <li><strong>Status:</strong> {submissionStatus}</li>
          <li><strong>Time Left:</strong> {countdown}</li>
        </ul>
      </section>

      {/* Submission Section */}
      <section className="bg-white p-6 rounded-lg shadow-md hoverable-box">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Submission</h2>
        <div className="space-y-4">
          <input type="file" onChange={handleFileChange} className="block w-full text-sm text-gray-500" />
          <button onClick={handleSubmit} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded">Submit</button>
          <p className="text-sm text-gray-500">Accepted formats: PDF, DOCX, ZIP | Max size: 10MB</p>
        </div>
      </section>

      {/* Assignment Details */}
      <section className="bg-white p-6 rounded-lg shadow-md hoverable-box">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Assignment Details</h2>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Description:</strong> Implement various data structures and evaluate performance.</li>
          <li><strong>Format:</strong> Code files with documentation and README</li>
          <li><strong>Word Limit:</strong> 1000 words</li>
          <li><strong>Rubric:</strong> 40% correctness, 30% performance, 20% structure, 10% documentation</li>
          <li><strong>Attachments:</strong> <a href="#" className="text-indigo-600 underline">Starter Code.zip</a></li>
        </ul>
      </section>

      {/* Feedback */}
      <section className="bg-white p-6 rounded-lg shadow-md hoverable-box">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Marks & Feedback</h2>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Grade:</strong> Not yet graded</li>
          <li><strong>Instructor Feedback:</strong> N/A</li>
          <li><strong>Rubric Breakdown:</strong> See above</li>
        </ul>
      </section>

      {/* Resources */}
      <section className="bg-white p-6 rounded-lg shadow-md hoverable-box">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Linked Resources</h2>
        <ul className="space-y-2 text-indigo-600 underline">
          <li><a href="#">Lecture Slides</a></li>
          <li><a href="#">Reading Materials</a></li>
          <li><a href="#">Reference Video</a></li>
        </ul>
      </section>

      {/* Group Info */}
      <section className="bg-white p-6 rounded-lg shadow-md hoverable-box">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Group Assignment</h2>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Team Members:</strong> John, Alice, Mark</li>
          <li><strong>Roles:</strong> John - Research, Alice - Coding, Mark - Documentation</li>
          <li><strong>Shared Submissions:</strong> <a href="#" className="text-indigo-600 underline">View Group Uploads</a></li>
        </ul>
      </section>

      {/* Comments */}
      <section className="bg-white p-6 rounded-lg shadow-md hoverable-box">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Comments & Q&A</h2>
        <div className="space-y-2">
          <textarea className="w-full p-3 border rounded" placeholder="Ask a question or leave a comment..."></textarea>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded">Post Comment</button>
        </div>
      </section>

      {/* Progress Tracker */}
      <section className="bg-white p-6 rounded-lg shadow-md hoverable-box">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Progress Tracker</h2>
        <ul className="space-y-2 text-gray-700">
          <li>✅ Topic Chosen</li>
          <li>✅ Initial Research Done</li>
          <li>⏳ Draft Writing</li>
          <li>⬜ Final Review</li>
        </ul>
        <div className="mt-2 w-full bg-gray-200 rounded-full h-4">
          <div className="bg-indigo-600 h-4 rounded-full" style={{ width: "60%" }}></div>
        </div>
      </section>

      {/* Export Options */}
      <section className="bg-white p-6 rounded-lg shadow-md text-center hoverable-box">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Export Options</h2>
        <div className="space-x-4">
          <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">Download Brief</button>
          <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">Export History</button>
          <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">Print Confirmation</button>
        </div>
      </section>
    </div>
  );
}

export default AssignmentPage;
