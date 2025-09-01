import React from "react";

const CareerGoals = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">🚀 Career Goals</h1>
      
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          My career journey as a <span className="font-semibold">Fullstack Software Developer</span> began in 
          <span className="font-semibold"> January 2025</span>. Since then, I have been deeply committed to 
          building modern, scalable, and impactful applications that solve real-world problems. 
          I view technology not just as a career path, but as a powerful tool to create change.
        </p>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">🎯 Short-Term Goals (1-2 years)</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Master fullstack development with <span className="font-medium">React, Flask, Node.js, and SQL/NoSQL databases</span>.</li>
            <li>Work with a forward-thinking tech company where I can apply my skills to real projects.</li>
            <li>Contribute to open-source projects and build a strong portfolio of professional applications.</li>
            <li>Continue improving my problem-solving and coding best practices through hands-on learning.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">🌍 Mid-Term Goals (3-5 years)</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Grow into a <span className="font-medium">senior developer</span> role and mentor junior developers.</li>
            <li>Specialize in <span className="font-medium">scalable systems, cloud architecture, and API design</span>.</li>
            <li>Work on impactful projects in sectors like healthcare, education, and rural development.</li>
            <li>Develop leadership and teamwork skills to manage small developer teams.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">🌟 Long-Term Goals (5+ years)</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Become a <span className="font-medium">Technical Lead or Software Architect</span> in a global company.</li>
            <li>Launch my own tech solutions to solve local and international challenges.</li>
            <li>Share knowledge by creating content, workshops, or teaching aspiring developers.</li>
            <li>Be part of projects that improve lives — especially in <span className="font-medium">rural health, education, and innovation</span>.</li>
          </ul>
        </div>

        <p>
          In summary, my ultimate goal is to combine my technical expertise with leadership, 
          creativity, and a passion for problem-solving to make a real difference in the world of technology. 
          Every step I take as a developer today is preparing me for that vision.
        </p>
      </div>
    </div>
  );
};

export default CareerGoals;
