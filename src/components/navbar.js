import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-100 to-purple-100 text-white fixed w-full top-0 z-50 shadow-lg bg-transparent">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center bg-transparent">
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold">
          My<span className="text-yellow-violet-500">Portfolio</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <a href="#home" className="hover:text-yellow-300 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-300 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-300 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-yellow-300 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-300 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer bg-zinc-200 overflow-hidden" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-blue-300 to-purple-300 text-center py-6 space-y-4 text-black">
          <a
            href="#home"
            className="block hover:text-yellow-300"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="block hover:text-yellow-300"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#projects"
            className="block hover:text-yellow-300"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="block hover:text-yellow-300"
            onClick={toggleMenu}
          >
            Skills
          </a>
          <a
            href="#contact"
            className="block hover:text-yellow-300"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
