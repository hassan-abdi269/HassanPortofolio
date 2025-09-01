import React from "react";

const Faq = () => {
  const faqs = [
    {
      question: "Are you open to remote work?",
      answer: "Yes, I am fully remote-ready and have experience collaborating with distributed teams using modern tools like Slack, Jira, GitHub, and Zoom.",
    },
    {
      question: "What type of roles are you seeking?",
      answer: "I am looking for Full Stack, Frontend, or Backend Developer roles where I can contribute to building scalable web applications and learn continuously.",
    },
    {
      question: "Do you prefer startups or enterprises?",
      answer: "I enjoy both: startups for the fast-paced learning and innovation, and enterprises for structured workflows and large-scale impact.",
    },
    {
      question: "Are you open to relocation?",
      answer: "Yes, I am open to relocation opportunities, especially in regions with strong tech communities.",
    },
    {
      question: "What technologies are you most comfortable with?",
      answer: "React, TailwindCSS, Flask, Node.js, and SQL/NoSQL databases. I am also actively learning cloud deployment (AWS, Docker).",
    },
  ];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow-md rounded-xl border border-gray-200"
          >
            <h2 className="text-lg font-semibold text-gray-900">Q: {faq.question}</h2>
            <p className="text-gray-700 mt-2">A: {faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
