import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { MdPhone, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" text-black py-7 px-6 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold">Havenquix</h2>
          <p className="mt-3 text-gray-600">
            Discover your perfect space with Havenquix. We connect people with
            properties that match their lifestyle and aspirations.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-gray-500">
            <a href="https://www.instagram.com/accounts/login/?hl=en">
              <FaInstagram className="text-2xl cursor-pointer hover:text-black" />
            </a>
            <a href="https://www.facebook.com/">
              <FaFacebookF className="text-2xl cursor-pointer hover:text-black" />
            </a>
            <a href="https://x.com/">
              <FaTwitter className="text-2xl cursor-pointer hover:text-black" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="">
          <h3 className="font-semibold text-lg">Quick Links</h3>

          <ul className="mt-3 space-y-2 text-gray-600">
            <Link to="/" className="cursor-pointer hover:text-black">
              Home
            </Link>{" "}
            <br />
            <Link to="/about" className="cursor-pointer hover:text-black">
              About Us
            </Link>{" "}
            <br />
            <Link
              to="/testimonials"
              className="cursor-pointer hover:text-black"
            >
              Testimonials
            </Link>
            <br />
            <Link to="/contact" className="cursor-pointer hover:text-black">
              Contacts
            </Link>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Legal</h3>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li className="cursor-pointer hover:text-black">Privacy Policy</li>
            <li className="cursor-pointer hover:text-black">
              Terms of Service
            </li>
            <li className="cursor-pointer hover:text-black">Cookie Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Contact</h3>
          <div className="mt-3 space-y-2 text-gray-600">
            <p className="flex items-center space-x-2">
              <MdPhone className="text-xl" />
              <span>+91 9573322990</span>
            </p>
            <p className="flex items-center space-x-2">
              <MdEmail className="text-xl" />
              <span>dinotech117@gmail.com</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-600 text-sm mt-10 border-t    pt-4">
        © 2025 Havenquix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
