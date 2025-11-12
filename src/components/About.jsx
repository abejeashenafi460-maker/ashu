import React from "react";

 import { FaReact, FaNodeJs, FaDatabase, FaCode } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-50 overflow-hidden text-gray-800 px-6 py-16"
    >
      {/* Header */}
      <h2 className="text-4xl font-bold mb-8 text-center text-indigo-600">
        About Me
      </h2>

      {/* Content Wrapper */}
      <div className="max-w-5xl grid md:grid-cols-2 gap-10 items-center">
        {/* Left side - Image or Illustration */}
        <div className="flex justify-center">
          <img
            src="/22.jpg"
            alt="Developer at work"
            className="w-80 md:w-96 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right side - Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            I’m <span className="text-indigo-500">Ashenafi Abeje</span>
          </h3>
          <p className="mb-6 text-lg leading-relaxed text-gray-600">
            A passionate <strong>Front-End</strong> and <strong>Full-Stack Developer</strong> 
            who loves crafting user-friendly web experiences. I specialize in building
            responsive, interactive, and performance-optimized web applications using
            modern technologies like React, Node.js, and TailwindCSS.
          </p>

          <p className="mb-6 text-lg leading-relaxed text-gray-600">
            I enjoy turning complex problems into simple, elegant solutions.
            When I’m not coding, I love exploring new frameworks, contributing to open
            source, and learning about UI/UX best practices.
          </p>

          {/* Tech Stack Section */}
          <div>
            <h4 className="text-xl font-semibold mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white shadow-md p-3 rounded-xl">
                <FaReact className="text-blue-500 text-2xl" />
                <span>React.js</span>
              </div>
              <div className="flex items-center space-x-2 bg-white shadow-md p-3 rounded-xl">
                <FaNodeJs className="text-green-600 text-2xl" />
                <span>Node.js</span>
              </div>
              <div className="flex items-center space-x-2 bg-white shadow-md p-3 rounded-xl">
                <FaDatabase className="text-yellow-600 text-2xl" />
                <span>MongoDB / SQL</span>
              </div>
              <div className="flex items-center space-x-2 bg-white shadow-md p-3 rounded-xl">
                <FaCode className="text-gray-700 text-2xl" />
                <span>HTML, CSS, JS</span>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-8">
            <a
              href="#contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-lg transition-colors duration-300"
            >
              Let’s Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
