import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logoIcon from "../assets/logoIcon.png"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClasses = ({ isActive }) =>
    `relative inline-block px-2 py-1 font-medium
     ${isActive ? "text-green-600 after:scale-x-100" : "text-gray-700 hover:text-green-600"}
     after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:bg-green-600
     after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300`;

  return (
    <nav className="bg-white/60 backdrop-blur-md shadow-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo & Brand */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img
            src={logoIcon}
            alt="Logo"
            className="h-10 w-10  object-cover"
          />
          <span className="text-2xl font-bold text-gray-800 tracking-widest">
            HealthWiser
          </span>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={linkClasses}>Home</NavLink>
          <NavLink to="/about" className={linkClasses}>About</NavLink>
          <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
          <NavLink to="/developer" className={linkClasses}>Developer</NavLink>
          <NavLink to="/blog" className={linkClasses}>Blog</NavLink>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <NavLink
            to="/login"
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold shadow transition"
          >
            Get Started
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <HiX className="h-8 w-8" />
            ) : (
              <HiMenu className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md border-t border-gray-200 shadow">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <NavLink to="/" onClick={toggleMenu} className={linkClasses}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={toggleMenu} className={linkClasses}>
              About
            </NavLink>
            <NavLink to="/contact" onClick={toggleMenu} className={linkClasses}>
              Contact
            </NavLink>
            <NavLink to="/developer" onClick={toggleMenu} className={linkClasses}>
              Developer
            </NavLink>
            <NavLink to="/blog" onClick={toggleMenu} className={linkClasses}>
              Blog
            </NavLink>
            <NavLink
              to="/login"
              onClick={toggleMenu}
              className="bg-green-500 hover:bg-green-600 text-white text-center px-5 py-2 rounded-full font-semibold shadow transition"
            >
              Get Started
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
