import React from "react";

const Achievements = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Achievements</h1>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          Started my fullstack software development journey in January 2025 and 
          built multiple fullstack projects using React, Flask, and MySQL.
        </li>
        <li>
          Developed a <strong>Rural Health Management System</strong> with features like 
          user authentication, appointment booking, admin dashboards, and real-time data handling.
        </li>
        <li>
          Created a <strong>Student Management System</strong> with dashboards for Admin, Teachers, 
          and Students, including course management and performance reports.
        </li>
        <li>
          Continuously practicing open-source collaboration on GitHub to 
          strengthen teamwork and version control skills.
        </li>
      </ul>
    </div>
  );
};

export default Achievements;
