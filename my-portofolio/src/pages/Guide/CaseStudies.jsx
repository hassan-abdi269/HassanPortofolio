import React from "react";

const CaseStudies = () => {
  const studies = [
    {
      title: "Rural Health Management System",
      description:
        "A fullstack system built with React, Flask, and PostgreSQL to manage patients, doctors, lab reports, and appointments in rural Kenya.",
      challenge:
        "Local clinics had no digital infrastructure to manage patients and relied on manual paper records.",
      solution:
        "I designed and implemented a web app with authentication, dashboards for admins/doctors/patients, and SMS reminders using Twilio API.",
      impact:
        "Reduced appointment no-shows by 40% and improved patient record accessibility across 3 clinics.",
    },
    {
      title: "Student Management System",
      description:
        "An academic portal for managing students, teachers, courses, and performance reports.",
      challenge:
        "Schools lacked a central system to manage student data, track attendance, and generate reports efficiently.",
      solution:
        "Developed a role-based system with React frontend, Flask backend, and MySQL database. Added dashboards, analytics, and file uploads.",
      impact:
        "Automated 80% of manual record-keeping and improved transparency for teachers, students, and admins.",
    },
    {
      title: "Emergency Ambulance Tracking System",
      description:
        "A real-time ambulance booking and tracking platform with geolocation.",
      challenge:
        "Emergency response time was high due to lack of visibility on ambulance availability and location.",
      solution:
        "Built a React + Flask system integrated with Google Maps API for live ambulance tracking and automated driver assignment.",
      impact:
        "Reduced average response times by 25% in pilot testing with 2 hospitals.",
    },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Case Studies</h1>
      <p className="text-gray-700 mb-8">
        Here are some in-depth breakdowns of real-world projects I’ve worked on,
        highlighting the challenges, solutions, and impact.
      </p>

      <div className="grid gap-8">
        {studies.map((study, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-2">{study.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              {study.description}
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-2">
              <li>
                <strong>Challenge:</strong> {study.challenge}
              </li>
              <li>
                <strong>Solution:</strong> {study.solution}
              </li>
              <li>
                <strong>Impact:</strong> {study.impact}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
