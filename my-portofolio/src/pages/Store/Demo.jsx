import React from "react";

const LiveDemos = () => {
  const demos = [
    {
      title: "Budget Tracker",
      description:
        "A personal finance app to manage income and expenses, visualize spending with charts, and set savings goals.",
      image: "/images/image1.png",
      link: "https://budget-tracke-afsomali-p6dq.vercel.app/",
    },
    {
      title: "Programming Q&A Platform",
      description:
        "A full-stack platform where developers can ask and answer coding questions, with upvotes, comments, and user authentication.",
      image: "/images/image2.png",
      link: "https://f-e-tetorial-af-somali-q-a.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio built with React and Tailwind CSS to showcase projects, skills, and professional experience.",
      image: "/images/image3.png",
      link: "https://developer-landing-cyan.vercel.app/",
    },
    {
      title: "Digital Agency Website",
      description:
        "A business website for a digital agency with services, testimonials, and a contact form, powered by React and Flask.",
      image: "/images/image4.png",
      link: "https://digital-agency-liard-six.vercel.app/",
    },
    {
      title: "Calculator App",
      description:
        "A sleek calculator with support for basic and scientific operations, built with React for a smooth user experience.",
      image: "/images/image5.png",
      link: "https://calculator2-pink.vercel.app/",
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Live Demos</h1>
      <p className="text-gray-600 mb-6">
        Explore some of my live deployed projects with direct access to demos:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {demos.map((demo, index) => (
          <div
            key={index}
            className="border rounded-2xl shadow hover:shadow-xl transition bg-white overflow-hidden"
          >
            <img
              src={demo.image}
              alt={demo.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{demo.title}</h2>
              <p className="text-gray-700 mb-3">{demo.description}</p>
              <a
                href={demo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveDemos;
