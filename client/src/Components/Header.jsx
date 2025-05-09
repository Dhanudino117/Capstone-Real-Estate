import React, { useState } from "react";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Check if the user is logged in
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  const handleHomeClick = (e) => {
    if (isLoggedIn) {
      navigate("/home"); // Redirect to /home if logged in
    } else {
      e.preventDefault(); // Prevent navigation
      alert("Please login first to access Home."); // Show login message
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token
    window.location.href = "/auth-details"; // Redirect to login page
  };

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-3 shadow-md bg-white">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center transition-colors duration-300 hover:text-[#375DD9]"
      >
        <FaHome className="text-2xl mr-2 text-blue-600" />
        <span className="text-xl text-black hover:text-blue-700 font-bold">
          Havenquix
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex items-center justify-center gap-x-8">
          <li>
            <Link
              to="/home"
              onClick={handleHomeClick}
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
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <nav className="absolute top-14 left-0 w-full bg-blue-700 text-white shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <Link
                to="/home"
                onClick={(e) => {
                  handleHomeClick(e);
                  setIsOpen(false);
                }}
                className="block text-lg transition-colors duration-300 hover:text-gray-300"
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

      {/* Login & Profile Buttons */}
      <div className="hidden md:flex items-center gap-5">
        <Link to={"/profile"}>
          <button
            className="py-1 text-gray-700 bg-white border-2 border-blue-600 px-6 rounded
         hover:bg-blue-600 transition-colors duration-300 hover:text-white"
          >
            Profile
          </button>
        </Link>
        <button
          onClick={handleLogout}
          className="py-1 text-gray-700 bg-white border-2 border-blue-600 px-6 rounded hover:bg-blue-600 transition-colors duration-300 hover:text-white"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
