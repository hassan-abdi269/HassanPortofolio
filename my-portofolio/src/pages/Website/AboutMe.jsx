import React from "react";

const AboutMe = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-gray-700 mb-4">
        Hi, I’m <span className="font-semibold">Hassan Abdi</span>, a dedicated{" "}
        <span className="font-semibold">Full Stack Software Developer</span> with
        expertise in building scalable web applications, REST APIs, and responsive
        user interfaces using modern technologies.
      </p>

      <p className="text-gray-700 mb-4">
        I specialize in working with{" "}
        <span className="font-semibold">React, TailwindCSS, Flask, and SQL/NoSQL databases</span>. 
        I’m passionate about creating intuitive, efficient, and secure applications 
        that provide real value to users and businesses.
      </p>

      <p className="text-gray-700 mb-4">
        Beyond coding, I enjoy collaborating with cross-functional teams, mentoring 
        beginners, and continuously learning new tools to stay ahead in the tech 
        ecosystem. I thrive in solving complex problems and transforming ideas into 
        working products.
      </p>

      <p className="text-gray-700">
        My long-term goal is to contribute to impactful projects in{" "}
        <span className="font-semibold">healthcare, education, and community-driven 
        solutions</span>, using technology to make a positive difference in people’s lives.
      </p>
    </div>
  );
};

export default AboutMe;
