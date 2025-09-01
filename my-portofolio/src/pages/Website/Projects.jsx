import React from "react";

const PortfolioProjects = () => {
  const projects = [
    {
      title: "Budget Tracker",
      description:
        "A personal finance app to manage income and expenses, visualize spending with charts, and set savings goals.",
    },
    {
      title: "Programming Q&A Platform",
      description:
        "A full-stack platform where developers can ask and answer coding questions, with upvotes, comments, and user authentication.",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio built with React and Tailwind CSS to showcase projects, skills, and professional experience.",
    },
    {
      title: "Digital Agency Website",
      description:
        "A business website for a digital agency with services, testimonials, and a contact form, powered by React and Flask.",
    },
    {
      title: "Calculator App",
      description:
        "A sleek calculator with support for basic and scientific operations, built with React for a smooth user experience.",
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Portfolio Projects</h1>
      <p className="text-gray-600 mb-6">
        I have developed and deployed{" "}
        <span className="font-semibold">50+ real-world projects</span>. 
        Here are some of the key featured ones:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border p-5 rounded-2xl shadow hover:shadow-xl transition bg-white"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioProjects;
