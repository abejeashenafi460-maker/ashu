import React from "react";
import { FaBriefcase, FaCode, FaLaptopCode, FaHandsHelping } from "react-icons/fa";
import "../output.css"; // if Tailwind is compiled here

export default function Experience() {
  return (
    <section className="py-16 bg-white" id="experience">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Experience
        </h2>

        <div className="relative timeline">

          {/* Experience 2 */}
          <div className="timeline-item">
            <div className="timeline-content right bg-gradient-to-bl from-green-50 to-white border-r-4 border-green-500">
              <div className="flex items-center mb-2">
                <FaCode className="text-green-600 mr-2 text-lg" />
                <h3 className="text-xl font-semibold">Front-End Developer</h3>
              </div>
              <p className="text-lg font-medium text-green-700">CreativeLabs Inc.</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>Built responsive web apps using React, javascript, and Tailwind CSS</li>
                <li>Optimized bundle size by 45% using code splitting and lazy loading</li>
                <li>Integrated RESTful APIs and GraphQL with Apollo Client</li>
                <li>Collaborated with UX team to implement pixel-perfect designs</li>
              </ul>
            </div>
          </div>

          {/* Experience 3 */}
          <div className="timeline-item">
            <div className="timeline-content left bg-gradient-to-br from-purple-50 to-white border-l-4 border-purple-500">
              <div className="flex items-center mb-2">
                <FaLaptopCode className="text-purple-600 mr-2 text-lg" />
                <h3 className="text-xl font-semibold">Junior Full-Stack Developer</h3>
              </div>
              <p className="text-lg font-medium text-purple-700">StartupHub</p>
              
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>Developed e-commerce platform with React, Node.js, Express, and PostgreSQL</li>
                <li>Wrote unit and integration tests using Jest and React Testing Library</li>
                <li>Reduced page load time  through performance optimization</li>
              </ul>
            </div>
          </div>

          {/* Experience 4 */}
          <div className="timeline-item">
            <div className="timeline-content right bg-gradient-to-bl from-orange-50 to-white border-r-4 border-orange-500">
              <div className="flex items-center mb-2">
                <FaHandsHelping className="text-orange-600 mr-2 text-lg" />
                <h3 className="text-xl font-semibold">internstiop program practice</h3>
              </div>
              <p className="text-lg font-medium text-orange-700">michot IT solution</p>
              
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>Designed and deployed client websites using HTML, CSS, JavaScript and expressjs</li>
                <li>Built custom React components and hrmgmt system</li>
                {/* <li>Provided ongoing maintenance and SEO optimization</li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline styling */}
      <style>{`
        .timeline::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 4px;
          background: #e5e7eb;
          transform: translateX(-50%);
        }
        .timeline-item {
          position: relative;
          margin: 40px 0;
        }
        .timeline-item::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          background: white;
          border: 4px solid #3b82f6;
          border-radius: 50%;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
        }
        .timeline-content {
          width: calc(50% - 40px);
          padding: 20px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .timeline-content.left { margin-left: 0; }
        .timeline-content.right { margin-left: auto; margin-right: 0; }
        @media (max-width: 768px) {
          .timeline::before { left: 20px; }
          .timeline-item::after { left: 20px; }
          .timeline-content { width: calc(100% - 80px); margin-left: 60px !important; }
        }
      `}</style>
    </section>
  );
}
