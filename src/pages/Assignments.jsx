import React, { useState } from "react";

const AssignmentPage = () => {
  const [file, setFile] = useState(null);
  const [submittedFiles, setSubmittedFiles] = useState([]);
  const [feedback, setFeedback] = useState("Great job! Keep it up.");
  const [progress, setProgress] = useState(60);

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setSubmittedFiles([...submittedFiles, uploadedFile.name]);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Basic Info */}
      <section className="bg-white shadow hover:shadow-xl transition p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">Assignment Details</h2>
        <p><strong>Title:</strong> Final Project Report</p>
        <p><strong>Course:</strong> CS101: Intro to Programming</p>
        <p><strong>Instructor:</strong> Dr. Smith</p>
        <p><strong>Assignment ID:</strong> A2025-CS101-09</p>
      </section>

      {/* Deadlines & Status */}
      <section className="bg-white shadow hover:shadow-xl transition p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-indigo-600 mb-4">Due Info</h3>
        <p><strong>Due Date:</strong> June 10, 2025, 11:59 PM</p>
        <p><strong>Date Assigned:</strong> May 15, 2025</p>
        <p><strong>Time Left:</strong> 6 days left</p>
        <p><strong>Status:</strong> ⏳ In Progress</p>
      </section>

      {/* Submission */}
      <section className="bg-white shadow hover:shadow-xl transition p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-indigo-600 mb-4">Submission</h3>
        <input type="file" onChange={handleFileUpload} className="mb-4" />
        <p>Allowed file types: .pdf, .docx, .zip | Max size: 10MB</p>
        <button className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">Submit</button>
        {file && <p className="text-green-600 mt-2">Successfully submitted {file.name}</p>}
        <h4 className="mt-4 font-semibold">Submission History:</h4>
        <ul className="list-disc list-inside text-sm">
          {submittedFiles.map((name, idx) => <li key={idx}>{name}</li>)}
        </ul>
      </section>

      {/* Assignment Instructions */}
      <section className="bg-white shadow hover:shadow-xl transition p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-indigo-600 mb-4">Instructions</h3>
        <p>Write a detailed report on the final project including objective, methodology, code snippets, and results.</p>
        <p><strong>Format:</strong> APA Style</p>
        <p><strong>Limit:</strong> 2000 words max</p>
        <p><strong>Rubric:</strong> Content 40%, Clarity 30%, Format 10%, Timeliness 20%</p>
        <p><strong>Attachments:</strong> project_template.docx, rubric.pdf</p>
      </section>

      {/* Marks & Feedback */}
      <section className="bg-white shadow hover:shadow-xl transition p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-indigo-600 mb-4">Grades & Feedback</h3>
        <p><strong>Grade:</strong> 92/100</p>
        <p><strong>Feedback:</strong> {feedback}</p>
        <p><strong>Can Resubmit:</strong> Yes</p>
      </section>

      {/* Linked Resources */}
      <section className="bg-white shadow hover:shadow-xl transition p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-indigo-600 mb-4">Linked Resources</h3>
        <ul className="list-disc list-inside">
          <li><a href="#" className="text-blue-500 hover:underline">Lecture Slides Week 3</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Research Material</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Citation Guide (APA)</a></li>
        </ul>
      </section>

      {/* Group Assignment Section */}
      <section className="bg-white shadow hover:shadow-xl transition p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-indigo-600 mb-4">Group Info</h3>
        <p><strong>Team Members:</strong> John, Sarah, Mike</p>
        <p><strong>Roles:</strong> John (Leader), Sarah (Editor), Mike (Coder)</p>
        <p><strong>Group Chat:</strong> <a href="#" className="text-blue-500 hover:underline">Open Chat</a></p>
        <p><strong>Shared Files:</strong> final_draft_v2.docx</p>
      </section>

      {/* Comments & Q&A */}
      <section className="bg-white shadow hover:shadow-xl transition p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-indigo-600 mb-4">Discussion</h3>
        <p><strong>Public Comments:</strong> Can we use Python 3.11?</p>
        <p><strong>Instructor:</strong> Yes, it’s allowed.</p>
      </section>

      {/* Progress Tracker */}
      <section className="bg-white shadow hover:shadow-xl transition p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-indigo-600 mb-4">Progress Tracker</h3>
        <ul className="list-disc list-inside">
          <li>Topic Chosen ✅</li>
          <li>Draft Started ⏳</li>
          <li>Review Pending ❌</li>
        </ul>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
          <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      </section>

      {/* Download / Export */}
      <section className="bg-white shadow hover:shadow-xl transition p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-indigo-600 mb-4">Export & Download</h3>
        <button className="mr-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Download Brief</button>
        <button className="mr-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Export History</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Print Confirmation</button>
      </section>
    </div>
  );
};

export default AssignmentPage;