import React from "react";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Resume</h1>
      <p className="text-gray-700 mb-6">
        Below is a detailed view of my resume. You can also download the PDF version for reference.
      </p>

      {/* Personal Info */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">👤 Personal Information</h2>
        <p><strong>Name:</strong> Hassan Mohamed</p>
        <p><strong>Email:</strong> yourname@example.com</p>
        <p><strong>Phone:</strong> +254 797393708</p>
        <p><strong>Location:</strong> Kenya (Open to relocation & remote)</p>
      </div>

      {/* Education */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">🎓 Education</h2>
        <ul className="list-disc list-inside">
          <li>Primary Education – Gurufa Primary School (Completed 2018)</li>
          <li>Secondary Education – Modogashe Secondary School (Completed 2023)</li>
          <li>Bachelor’s in Information Science – Ongoing</li>
          <li>Fullstack Software Developer – Professional Training & Projects</li>
        </ul>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">💻 Technical Skills</h2>
        <ul className="list-disc list-inside grid grid-cols-2 gap-2">
          <li>JavaScript (ES6+)</li>
          <li>React & TailwindCSS</li>
          <li>Node.js & Express</li>
          <li>MongoDB & PostgreSQL</li>
          <li>Python & Flask</li>
          <li>Git & GitHub</li>
        </ul>
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">💼 Experience</h2>
        <p>
          Fullstack Software Developer – Freelance (Jan 2025 – Present)  
          <br />
          <span className="text-gray-600">
            Worked on personal projects, open-source contributions, and client-based
            applications. Developed REST APIs, responsive UIs, and optimized performance.
          </span>
        </p>
      </div>

      {/* Achievements */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">🏆 Achievements</h2>
        <ul className="list-disc list-inside">
          <li>Built a portfolio platform to showcase skills and projects</li>
          <li>Contributed to open-source projects on GitHub</li>
          <li>Completed multiple fullstack applications integrating frontend & backend</li>
        </ul>
      </div>

      {/* Download Button */}
      <div className="text-center mt-10">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
        >
          <Download className="mr-2 h-5 w-5" />
          Download Resume (PDF)
        </a>
      </div>
    </div>
  );
};

export default Resume;
