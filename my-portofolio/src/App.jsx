// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Website
import AboutMe from "./pages/Website/AboutMe";
import Projects from "./pages/Website/Projects";
import Skills from "./pages/Website/Skills";

// Store
import Experience from "./pages/Store/Experience";
import Education from "./pages/Store/Education";
import Demo from "./pages/Store/Demo";

// Business
import Career from "./pages/Business/Career";
import Achievements from "./pages/Business/Achievements";
import Technical from "./pages/Business/Technical";

// Guide
import Blog from "./pages/Guide/Blog";
import Resources from "./pages/Guide/Resources";
import CaseStudies from "./pages/Guide/CaseStudies";

// Help
import Support from "./pages/Help/Support";
import Faq from "./pages/Help/Faq";
import Contact from "./pages/Help/Contact";
import Resume from "./pages/Help/Resume";


// Community
import Community from "./pages/Community";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-20 px-6">
        <Routes>
          {/* Website */}
          <Route path="/website/aboutme" element={<AboutMe />} />
          <Route path="/website/projects" element={<Projects />} />
          <Route path="/website/skills" element={<Skills />} />

          {/* Store */}
          <Route path="/store/experience" element={<Experience />} />
          <Route path="/store/education" element={<Education />} />
          <Route path="/store/demo" element={<Demo />} />

          {/* Business */}
          <Route path="/business/career" element={<Career />} />
          <Route path="/business/achievements" element={<Achievements />} />
          <Route path="/business/technical" element={<Technical />} />

          {/* Guide */}
          <Route path="/guide/blog" element={<Blog />} />
          <Route path="/guide/resources" element={<Resources />} />
          <Route path="/guide/casestudies" element={<CaseStudies />} />

          {/* Help */}
          <Route path="/help/support" element={<Support />} />
          <Route path="/help/faq" element={<Faq />} />
          <Route path="/help/contact" element={<Contact />} />
          <Route path="/help/resume" element={<Resume />} />


          {/* Community */}
          <Route path="/community" element={<Community />} />

          {/* Default route */}
          <Route path="/" element={<AboutMe />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
