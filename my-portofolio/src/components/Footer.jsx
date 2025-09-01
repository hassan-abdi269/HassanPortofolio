import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-center py-4 mt-10">
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        © {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
