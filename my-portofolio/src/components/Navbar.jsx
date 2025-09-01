// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <NavLink
          to="/"
          className="border-2 border-black px-3 py-1 font-bold text-lg"
        >
          Hassan CV
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium text-gray-900">
          {/* Website */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("website")}
              className="hover:text-gray-600"
            >
              About Me ▼
            </button>
            {openDropdown === "website" && (
              <div className="absolute mt-2 bg-white border rounded shadow-lg w-40">
                <NavLink to="/website/aboutme" className="block px-4 py-2 hover:bg-gray-100">About Me</NavLink>
                <NavLink to="/website/projects" className="block px-4 py-2 hover:bg-gray-100">Projects</NavLink>
                <NavLink to="/website/skills" className="block px-4 py-2 hover:bg-gray-100">Skills</NavLink>
              </div>
            )}
          </div>

          {/* Store */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("store")}
              className="hover:text-gray-600"
            >
              Experience ▼
            </button>
            {openDropdown === "store" && (
              <div className="absolute mt-2 bg-white border rounded shadow-lg w-40">
                <NavLink to="/store/experience" className="block px-4 py-2 hover:bg-gray-100">Experience</NavLink>
                <NavLink to="/store/education" className="block px-4 py-2 hover:bg-gray-100">Education</NavLink>
                <NavLink to="/store/demo" className="block px-4 py-2 hover:bg-gray-100">Demo</NavLink>
              </div>
            )}
          </div>

          {/* Business */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("business")}
              className="hover:text-gray-600"
            >
              Career ▼
            </button>
            {openDropdown === "business" && (
              <div className="absolute mt-2 bg-white border rounded shadow-lg w-44">
                <NavLink to="/business/career" className="block px-4 py-2 hover:bg-gray-100">Career</NavLink>
                <NavLink to="/business/achievements" className="block px-4 py-2 hover:bg-gray-100">Achievements</NavLink>
                <NavLink to="/business/technical" className="block px-4 py-2 hover:bg-gray-100">Technical</NavLink>
              </div>
            )}
          </div>

          {/* Community */}
          <NavLink to="/community" className="hover:text-gray-600">
            Community
          </NavLink>
        </div>

        {/* Right Links (Desktop) */}
        <div className="hidden md:flex space-x-8 font-medium text-gray-900">
          {/* Guide */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("guide")}
              className="hover:text-gray-600"
            >
              Portfolio ▼
            </button>
            {openDropdown === "guide" && (
              <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg w-44">
                <NavLink to="/guide/blog" className="block px-4 py-2 hover:bg-gray-100">Blog</NavLink>
                <NavLink to="/guide/resources" className="block px-4 py-2 hover:bg-gray-100">Resources</NavLink>
                <NavLink to="/guide/casestudies" className="block px-4 py-2 hover:bg-gray-100">Case Studies</NavLink>
              </div>
            )}
          </div>

          {/* Help */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("help")}
              className="hover:text-gray-600"
            >
              Contact ▼
            </button>
            {openDropdown === "help" && (
              <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg w-40">
                <NavLink to="/help/support" className="block px-4 py-2 hover:bg-gray-100">Support</NavLink>
                <NavLink to="/help/faq" className="block px-4 py-2 hover:bg-gray-100">FAQ</NavLink>
                <NavLink to="/help/contact" className="block px-4 py-2 hover:bg-gray-100">Contact</NavLink>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900 border px-2 py-1 rounded"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4">
          <NavLink to="/website/aboutme" className="block hover:text-gray-600">About Me</NavLink>
          <NavLink to="/website/projects" className="block hover:text-gray-600">Projects</NavLink>
          <NavLink to="/website/skills" className="block hover:text-gray-600">Skills</NavLink>

          <NavLink to="/store/experience" className="block hover:text-gray-600">Experience</NavLink>
          <NavLink to="/store/education" className="block hover:text-gray-600">Education</NavLink>
          <NavLink to="/store/demo" className="block hover:text-gray-600">Demo</NavLink>

          <NavLink to="/business/career" className="block hover:text-gray-600">Career</NavLink>
          <NavLink to="/business/achievements" className="block hover:text-gray-600">Achievements</NavLink>
          <NavLink to="/business/technical" className="block hover:text-gray-600">Technical</NavLink>

          <NavLink to="/community" className="block hover:text-gray-600">Community</NavLink>

          <NavLink to="/guide/blog" className="block hover:text-gray-600">Blog</NavLink>
          <NavLink to="/guide/resources" className="block hover:text-gray-600">Resources</NavLink>
          <NavLink to="/guide/casestudies" className="block hover:text-gray-600">Case Studies</NavLink>

          <NavLink to="/help/support" className="block hover:text-gray-600">Support</NavLink>
          <NavLink to="/help/faq" className="block hover:text-gray-600">FAQ</NavLink>
          <NavLink to="/help/contact" className="block hover:text-gray-600">Contact</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
