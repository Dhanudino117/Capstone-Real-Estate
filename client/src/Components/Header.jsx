import React, { useState } from "react";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-3 shadow-md bg-white">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center transition-colors duration-300 hover:text-[#375DD9]"
      >
        <FaHome className="text-2xl mr-2 text-blue-600 " />
        <span className="text-xl text-black hover:text-blue-700 font-bold">
          Havenquix{" "}
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex items-center justify-center gap-x-8">
          <li>
            <Link
              to="/"
              className="transition-colors duration-300 hover:text-[#375DD9] hover:underline"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="transition-colors duration-300 hover:text-[#375DD9] hover:underline"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="transition-colors duration-300 hover:text-[#375DD9] hover:underline"
            >
              Contacts
            </Link>
          </li>
          <li>
            <Link
              to="/testimonials"
              className="transition-colors duration-300 hover:text-[#375DD9] hover:underline"
            >
              Testimonials
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Navigation (Dropdown) */}
      {isOpen && (
        <nav className="absolute top-14 left-0 w-full bg-blue-700 text-white shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <Link
                to="/"
                className="block text-lg  transition-colors duration-300 hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-lg transition-colors duration-300 hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block text-lg transition-colors duration-300 hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Contacts
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                className="block text-lg transition-colors duration-300 hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Login & Profile Button */}
      <div className="hidden md:flex items-center gap-5">
        <Link to="/login">
          <span className="text-md text-gray-700 hover:underline transition-colors duration-300 hover:text-[#375DD9]">
            Login
          </span>
        </Link>
        <button
          className="py-1 text-gray-700 bg-white border-2 border-blue-600 px-6 rounded
         hover:bg-blue-600 transition-colors duration-300 hover:text-white"
        >
          Profile
        </button>
      </div>
    </header>
  );
};

export default Header;
