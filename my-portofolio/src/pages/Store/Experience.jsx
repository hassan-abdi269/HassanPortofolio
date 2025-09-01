import React from "react";

const Experience = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Experience</h1>
      <div className="space-y-6 text-gray-700">
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="font-semibold text-xl">Fullstack Software Developer</h2>
          <p className="text-gray-500">Jan 2025 – Present</p>
          <p className="mt-2">
            Started my professional journey as a Fullstack Developer, building
            modern web applications using <span className="font-medium">React, TailwindCSS, Flask, and SQLAlchemy</span>.  
            Currently focusing on authentication systems, dashboards, and
            database-driven applications.
          </p>
        </div>

        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="font-semibold text-xl">Open Source & Personal Projects</h2>
          <p className="text-gray-500">2024 – Present</p>
          <p className="mt-2">
            Contributed to personal and open-source projects including a{" "}
            <span className="font-medium">Rural Health Management System</span>,
            <span className="font-medium"> Student Management System</span>, and
            <span className="font-medium"> Ambulance Booking System</span>.
            These projects strengthened my skills in fullstack development,
            database design, and real-world problem solving.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
