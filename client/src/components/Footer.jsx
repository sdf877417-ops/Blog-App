import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCode,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white mt-20">

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">

          <div>
            <h2 className="text-3xl font-bold">
              Join Our Developer Community 🚀
            </h2>

            <p className="text-gray-200 mt-3 max-w-2xl">
              Subscribe to receive the latest programming tutorials,
              React, Node.js, MERN Stack, Backend Development,
              JavaScript tips, and software engineering articles.
            </p>
          </div>

          <div className="flex w-full lg:w-auto gap-3 flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 rounded-xl text-black w-full sm:w-80 outline-none"
            />

            <button className="bg-black hover:bg-slate-900 duration-300 px-6 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold">
              Subscribe
              <FaArrowRight />
            </button>
          </div>

        </div>
      </section>

      {/* Main Footer */}
      <section className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* About */}
        <div>

          <div className="flex items-center gap-3 mb-5">
            <FaCode className="text-cyan-400 text-3xl" />

            <h1 className="text-3xl font-bold">
              Syed <span className="text-cyan-400">Furqan</span>
            </h1>
          </div>

          <p className="text-gray-400 leading-8">
            Syed Furqan Blog is a modern technology platform created for
            developers, students, and tech enthusiasts. Here you'll find
            high-quality articles on React, Node.js, MERN Stack,
            JavaScript, Backend Development, AI, Career Guidance,
            Programming Tutorials, and Real-World Projects.
          </p>

          <div className="flex gap-4 mt-8">

            <a
              href="#"
              className="bg-slate-800 p-3 rounded-full hover:bg-cyan-500 duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="http://instagram.com/s"
              className="bg-slate-800 p-3 rounded-full hover:bg-pink-600 duration-300 hover:scale-110"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="bg-slate-800 p-3 rounded-full hover:bg-sky-500 duration-300 hover:scale-110"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="bg-slate-800 p-3 rounded-full hover:bg-blue-700 duration-300 hover:scale-110"
            >
              <FaFacebook />
            </a>

          </div>

        </div>

        {/* Quick Links */}
        <div>

          <h2 className="text-2xl font-semibold mb-6">
            Quick Links
          </h2>

          <ul className="space-y-4 text-gray-400">

            <li className="hover:text-cyan-400 cursor-pointer transition-all hover:translate-x-2">
              Home
            </li>

            <li className="hover:text-cyan-400 cursor-pointer transition-all hover:translate-x-2">
              About
            </li>

            <li className="hover:text-cyan-400 cursor-pointer transition-all hover:translate-x-2">
              Blogs
            </li>

            <li className="hover:text-cyan-400 cursor-pointer transition-all hover:translate-x-2">
              Categories
            </li>

            <li className="hover:text-cyan-400 cursor-pointer transition-all hover:translate-x-2">
              Contact
            </li>

            <li className="hover:text-cyan-400 cursor-pointer transition-all hover:translate-x-2">
              Privacy Policy
            </li>

          </ul>

        </div>

        {/* Categories */}
        <div>

          <h2 className="text-2xl font-semibold mb-6">
            Categories
          </h2>

          <ul className="space-y-4 text-gray-400">

            <li className="hover:text-cyan-400 cursor-pointer transition-all hover:translate-x-2">
              JavaScript
            </li>

            <li className="hover:text-cyan-400 cursor-pointer transition-all hover:translate-x-2">
              React.js
            </li>

            <li className="hover:text-cyan-400 cursor-pointer transition-all hover:translate-x-2">
              Node.js
            </li>

            <li className="hover:text-cyan-400 cursor-pointer transition-all hover:translate-x-2">
              MongoDB
            </li>

            <li className="hover:text-cyan-400 cursor-pointer transition-all hover:translate-x-2">
              MERN Stack
            </li>

            <li className="hover:text-cyan-400 cursor-pointer transition-all hover:translate-x-2">
              Career Tips
            </li>

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h2 className="text-2xl font-semibold mb-6">
            Contact
          </h2>

          <div className="space-y-5 text-gray-400">

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400 text-xl" />
              <span>contact@syedfurqan.dev</span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-cyan-400 text-xl" />
              <span>+91 8956596585</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-cyan-400 text-xl" />
              <span>Maharashtra, India</span>
            </div>

          </div>

          <div className="mt-8 p-5 rounded-2xl bg-slate-900 border border-slate-800">

            <h3 className="text-lg font-semibold mb-3 text-cyan-400">
              Why Follow This Blog?
            </h3>

            <p className="text-gray-400 leading-7">
              Learn practical development, industry best practices,
              clean architecture, backend engineering, project building,
              interview preparation, and modern web technologies.
            </p>

          </div>

        </div>

      </section>

      {/* Bottom */}
      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-cyan-400 font-semibold">
              Syed Furqan
            </span>    
            . All Rights Reserved.
          </p>

          <p className="text-gray-500 text-center">
            Built with ❤️ using React, Tailwind CSS, Node.js,
            Express.js & MongoDB
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer; 