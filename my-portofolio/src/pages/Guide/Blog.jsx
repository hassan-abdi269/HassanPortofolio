import React from "react";

const Blog = () => {
  const posts = [
    {
      title: "Mastering React Hooks in 2025",
      date: "August 15, 2025",
      excerpt:
        "Hooks like useState, useEffect, and useContext are game changers in React. In this post, I break down real-world use cases and how to avoid common pitfalls...",
      link: "#",
    },
    {
      title: "Building Scalable APIs with Flask & SQLAlchemy",
      date: "July 28, 2025",
      excerpt:
        "I explore best practices for designing and structuring APIs using Flask, JWT authentication, and SQLAlchemy ORM. This guide is tailored for beginners and professionals alike...",
      link: "#",
    },
    {
      title: "Why Clean Code Matters",
      date: "July 10, 2025",
      excerpt:
        "Writing code that works is good, but writing clean, maintainable code is even better. Here are my top tips for refactoring messy codebases...",
      link: "#",
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <p className="text-gray-700 mb-8">
        I write about <span className="font-semibold">software engineering</span>, 
        <span className="font-semibold"> best practices</span>, and{" "}
        <span className="font-semibold">technology trends</span>. My goal is to 
        simplify complex topics so that developers of all levels can learn and grow.
      </p>

      <div className="space-y-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-500 text-sm">{post.date}</p>
            <p className="text-gray-700 mt-2">{post.excerpt}</p>
            {/* <a
              href={post.link}
              className="text-blue-600 hover:underline mt-3 inline-block"
            >
              Read More →
            </a> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
