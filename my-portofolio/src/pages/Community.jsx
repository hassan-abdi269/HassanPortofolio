import React from "react";

const CommunityContributions = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        🌍 Community Contributions
      </h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold mb-2">💻 Open Source</h2>
          <p>
            I contribute to open-source projects on GitHub, ranging from bug
            fixes to feature development. I believe in giving back to the
            community by writing clean, reusable code and improving
            documentation so others can benefit.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">✍️ Blogging & Content</h2>
          <p>
            I write technical articles and tutorials that simplify complex
            topics like React, Flask, authentication, and database design. My
            goal is to help beginners and intermediate developers learn by
            providing real-world examples and clear explanations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">👨‍🏫 Mentorship</h2>
          <p>
            I mentor junior developers by reviewing their code, explaining best
            practices, and guiding them on career growth. I also run small
            community sessions to help others practice problem-solving and build
            full-stack applications step by step.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">🌐 Local Developer Communities</h2>
          <p>
            As part of local tech meetups in Kenya, I engage in discussions
            about web technologies, participate in hackathons, and collaborate
            on projects that address real-world community challenges such as
            healthcare and education systems.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">🎤 Talks & Knowledge Sharing</h2>
          <p>
            I give short talks and demos on full-stack development, from setting
            up Flask APIs to building dashboards with React. These sessions aim
            to inspire others and encourage continuous learning in the
            fast-evolving tech world.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CommunityContributions;
