// src/pages/Website/Home.jsx
import React from "react";


const Home = () => {
    return (
        <div>
            {/* Header */}
            <header className="bg-gray-100 py-6 shadow-md">
                <div className="container mx-auto flex flex-col items-center">
                    <div className="flex flex-col items-center">
                        <img
                            src="/images/image.png"
                            alt="Developer Logo"
                            className="w-28 h-28 object-cover rounded-full border-4 border-gray-200 shadow-md"
                        />
                        <h1 className="text-3xl font-bold mt-2">Hassan Abdi</h1>
                        <p className="text-gray-600">Software Developer</p>
                    </div>
                </div>
            </header>


            {/* Main */}
            <main className="container mx-auto my-10 grid md:grid-cols-2 gap-10">
                {/* Left Section */}
                <div>
                    {/* Developer Image */}
                    <div className="mb-6">
                        <img
                            src="/images/developer.jpg"
                            alt="Hassan Abdi"
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Contact Info */}
                    <div className="mb-6">
                        <h3 className="font-semibold text-xl mb-2">Contact Information</h3>
                        <p>
                            <i className="fas fa-map-marker-alt mr-2" />
                            Kenya, Garissa, Garissa University
                        </p>
                        <p>
                            <i className="fas fa-phone mr-2" />
                            (254) 797-393-708
                        </p>
                        <p>
                            <i className="fas fa-envelope mr-2" />
                            hassan2030abdi@gmail.com
                        </p>

                        <div className="mt-4">
                            <h4 className="font-semibold">Availability</h4>
                            <p>Mon-Fri: 9:00 AM - 5:00 PM</p>
                            <p>Sat: Freelance Appointments</p>
                            <p>Sun: Offline</p>
                        </div>
                    </div>

                    {/* Appointment Section */}
                    <div>
                        <h3 className="font-semibold text-xl mb-3">Project Inquiry</h3>
                        <form className="flex flex-col space-y-3">
                            <input type="text" placeholder="Your Name" required className="p-2 border rounded" />
                            <input type="email" placeholder="Your Email" required className="p-2 border rounded" />
                            <input type="tel" placeholder="Your Phone" required className="p-2 border rounded" />
                            <input type="date" required className="p-2 border rounded" />
                            <select required className="p-2 border rounded">
                                <option value="">Select Service</option>
                                <option value="web-development">Web Development</option>
                                <option value="app-debugging">App Debugging</option>
                                <option value="consultation">Project Consultation</option>
                                <option value="web-design">Web Design</option>
                                <option value="logo-design">Logo Design</option>
                                <option value="wordpress">Website using Wordpress</option>
                                <option value="cards-design">Cards Design</option>
                                <option value="ecommerce">Website for E-commerce</option>
                                <option value="systems">Systems</option>
                            </select>
                            <textarea
                                placeholder="Project Description or Inquiry"
                                className="p-2 border rounded"
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right Section */}
                <div className="space-y-10">
                    {/* Welcome Section */}
                    <section>
                        <h2 className="text-2xl font-bold mb-2">Welcome to My Portfolio</h2>
                        <p className="mb-2">
                            With over 1 year of experience in software development, I'm passionate about creating efficient,
                            user-friendly, and modern web applications. I specialize in full-stack development and turning
                            ideas into functional digital solutions.
                        </p>
                        <p>
                            I aim to deliver scalable and maintainable code while working closely with clients to meet their
                            goals.
                        </p>
                    </section>

                    {/* Services */}
                    <section>
                        <h2 className="text-2xl font-bold mb-2">Services Offered</h2>
                        <ul className="space-y-2">
                            <li><i className="fas fa-code mr-2" /> Web Development</li>
                            <li><i className="fas fa-mobile-alt mr-2" /> Responsive Design</li>
                            <li><i className="fas fa-bug mr-2" /> Debugging and Optimization</li>
                            <li><i className="fas fa-database mr-2" /> Backend Integration</li>
                            <li><i className="fas fa-cogs mr-2" /> API Development</li>
                            <li><i className="fas fa-users-cog mr-2" /> Tech Support & Consultation</li>
                        </ul>
                    </section>

                    {/* Reviews */}
                    <section>
                        <h2 className="text-2xl font-bold mb-2">Client Feedback</h2>
                        <div className="mb-3">
                            <span className="text-yellow-500">★★★★★</span>
                            <span className="ml-2 font-bold">4.9</span>/5
                            <p>Based on 127 reviews</p>
                        </div>
                        <div className="space-y-3">
                            <blockquote className="italic">
                                "Hassan is incredibly talented and helped bring our web app to life with clean, functional code."
                                <br /> <span className="font-semibold">- Michael R.</span>
                            </blockquote>
                            <blockquote className="italic">
                                "Quick turnaround, great communication, and solid work. Highly recommend him for any dev project."
                                <br /> <span className="font-semibold">- Sarah K.</span>
                            </blockquote>
                        </div>
                        <a
                            href="https://github.com/hassan-abdi269"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            <i className="fas fa-comment-alt mr-2" /> View My Projects
                        </a>
                    </section>

                    {/* Location */}
                    <section>
                        <h2 className="text-2xl font-bold mb-2">My Location</h2>
                        <div className="border rounded-lg overflow-hidden">
                            <img src="/images/map.png" alt="Location Map" />
                            <a
                                href="https://www.google.com/maps/place/Garissa/@-0.4591034,39.6485854,14z/data=!3m1!4b1!4m6!3m5!1s0x18204aa96532ea5d:0x54df1bbda2f3cda0!8m2!3d-0.4532293!4d39.6460988!16zL20vMGM2eHR3"
                                target="_blank"
                                rel="noreferrer"
                                className="block bg-blue-600 text-white text-center py-2 hover:bg-blue-700"
                            >
                                <i className="fas fa-map-marked-alt mr-2" /> Open in Google Maps
                            </a>
                        </div>
                    </section>
                </div>
            </main>


        </div>
    );
};

export default Home;
