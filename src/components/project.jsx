import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt } from "react-icons/fa";

export default function Project() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with React and Tailwind CSS to showcase my projects and skills.",
      tech: [<FaReact key="react" />, <FaCss3Alt key="css" />],
    },
    {
      title: "Employee Management System",
      description:
        "A full-stack CRUD web app built with React, Node.js, and MongoDB to manage employee data efficiently.",
      tech: [<FaReact key="react" />, <FaNodeJs key="node" />, <FaDatabase key="db" />],
    },
    {
      title: "Landing Page Design",
      description:
        "A responsive landing page using HTML5, CSS3, and modern layout techniques for great UX.",
      tech: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />],
    },
  ];

  return (
    <section className="bg-white py-16" id="projects">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">
          My <span className="text-blue-600">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 shadow-lg rounded-2xl p-6 hover:scale-105 transform transition-all duration-300"
            >
              <h3 className="text-2xl sm:sm-text font-semibold text-gray-700 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-center gap-3 text-3xl text-blue-500">
                {project.tech}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
