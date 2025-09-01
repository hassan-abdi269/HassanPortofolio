import React from "react";

const Skills = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">💻 Skills & Technologies</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Frontend */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-3">🎨 Frontend</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>HTML5, CSS3, JavaScript (ES6+)</li>
            <li>React.js, Next.js</li>
            <li>TailwindCSS, Bootstrap</li>
            <li>TypeScript</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-3">⚙️ Backend</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>Python (Flask, Django)</li>
            <li>Node.js, Express.js</li>
            <li>REST APIs, GraphQL</li>
          </ul>
        </div>

        {/* Databases */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-3">🗄️ Databases</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>SQLite3</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </ul>
        </div>

        {/* DevOps & Tools */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-3">🚀 DevOps & Tools</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>Git & GitHub</li>
            <li>Docker, CI/CD pipelines</li>
            <li>AWS, Vercel, Netlify</li>
            <li>Linux & Shell Scripting</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
