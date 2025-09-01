import React from "react";

const Contact = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-gray-700 mb-4">
        Interested in hiring me? Let’s connect!
      </p>
      <ul className="space-y-2 text-gray-700">
        <li>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:yourname@example.com"
            className="text-blue-600 hover:underline"
          >
            hassan2030abdi@gmail.com
          </a>
        </li>
        <li>
          <strong>SMS:</strong>{" "}
          <a
            href="sms:0797393708"
            className="text-blue-600 hover:underline"
          >
            0797393708
          </a>
        </li>
        <li>
          <strong>WhatsApp:</strong>{" "}
          <a
            href="https://wa.me/254797393708"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline"
          >
            Chat on WhatsApp
          </a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/hassan-abdi-333020356/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/hassan
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/hassan-abdi269"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:underline"
          >
            github.com/hassan
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
