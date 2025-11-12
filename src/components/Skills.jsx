import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";

export default function Skills() {
  const skills = [
    {
      name: "React",
      icon: <FaReact className="text-blue-500" />,
      level: "intermedate",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500" />,
      level: "Intermediate",
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400" />,
      level: "Intermediate",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-orange-500" />,
      level: "advanced",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-blue-400" />,
      level: "Expert",
    },
    {
      name: "Database (MongoDB / SQL)",
      icon: <FaDatabase className="text-gray-500" />,
      level: "Intermediate",
    },
    {
      name: "Git & GitHub",
      icon: <FaGitAlt className="text-red-500" />,
      level: "Proficient",
    },
  ];

  return (
    <section className="bg-gray-50 py-16" id="skills">
      <div className="max-w-6xl mx-auto px-4 text-center ">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">
          My <span className="text-blue-600">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-18 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              <div className="flex flex-col items-center justify-center space-y-3">
                <div className="text-6xl">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-gray-700">
                  {skill.name}
                </h3>
                <p className="text-gray-500">{skill.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
