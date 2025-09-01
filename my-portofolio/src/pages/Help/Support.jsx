import React from "react";
import { Download } from "lucide-react";

const JobSupport = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Job Support</h1>
            <p className="text-gray-700 mb-8">
                Here you can find my resume, certificates, and references.
                I am actively seeking opportunities and open to both relocation and remote roles.
                If you’d like to collaborate or hire me, all details are below.
            </p>

            {/* Resume Section */}
            <a
                href="/help/resume"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
                <Download className="mr-2 h-5 w-5" />
                View Resume
            </a>



            {/* Certificates Section */}
            <div className="bg-white shadow-md rounded-2xl p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">🎓 Certificates</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                        Fullstack Web Development – <span className="text-blue-600">Udemy</span>
                    </li>
                    <li>
                        Python & Flask Backend Development – <span className="text-blue-600">Coursera</span>
                    </li>
                    <li>
                        React & TailwindCSS Frontend Development – <span className="text-blue-600">Frontend Masters</span>
                    </li>
                </ul>
            </div>

            {/* References Section */}
            <div className="bg-white shadow-md rounded-2xl p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">🤝 References</h2>
                <p className="text-gray-600">
                    Professional references are available upon request. Please feel free to contact me
                    directly, and I’ll be happy to provide details.
                </p>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-10">
                <h3 className="text-xl font-semibold mb-2">🚀 Open to Opportunities</h3>
                <p className="text-gray-600 mb-4">
                    I am open to relocation and remote positions. Let’s build impactful solutions together!
                </p>
                <a
                    href="/help/contact"
                    className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow hover:bg-green-700 transition"
                >
                    Contact Me
                </a>
            </div>
        </div>
    );
};

export default JobSupport;
