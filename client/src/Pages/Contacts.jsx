import React from "react";
import Footer from "../Components/Footer";
import { IoLocationSharp, IoTimerOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Contacts = () => {
  return (
    <>
      <div className="bg-white min-h-screen flex flex-col justify-between">
        {/* Contact Heading Section */}
        <div className=" sm:w-full">
          <h1 className="flex justify-center mt-20 font-bold text-2xl">
            Contact Us
          </h1>
          <p className="flex justify-center mt-5 text-gray-600 text-center">
            We're here to help you with any questions about our properties or
            services.
          </p>
        </div>

        <div className="flex justify-center items-center mt-10">
          <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full p-3 bg-gray-100 rounded-md text-gray-600 placeholder-gray-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="yourexample@gmail.com"
                    className="w-full p-3 bg-gray-100 rounded-md text-gray-600 placeholder-gray-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Your Phone number"
                    className="w-full p-3 bg-gray-100 rounded-md text-gray-600 placeholder-gray-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="How can we help you?"
                  className="w-full h-32 p-3 bg-gray-100 rounded-md text-gray-600 placeholder-gray-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full p-3 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <h1 className="flex justify-center items-center text-center m-15 text-xl font-medium">
        Get in Touch
      </h1>
      <div className="sm:pl-60 items-center  ">
      
      {/* First Address Block */}
      <div className="flex items-center space-x-4">
        {/* Location Icon */}
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
          <IoLocationSharp className="text-black w-6 h-6" />
        </div>
        {/* Address Text */}
        <div>
          <h3 className="text-lg font-semibold">Office Address</h3>
          <p>123 Manhattan Avenue, New York, NY 10001</p>
        </div>
      </div>

      {/* Phone Number Block */}
      <div className="flex items-center space-x-4 mt-6">
        {/* Phone Icon */}
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
          <FaPhoneAlt className="text-black w-6 h-6" />
        </div>
        {/* Phone Number Text */}
        <div>
          <h3 className="text-lg font-semibold">Phone Number</h3>
          <p>+91 9573322990</p>
        </div>
      </div>

      {/* Email Address Block */}
      <div className="flex items-center space-x-4 mt-6">
        {/* Email Icon */}
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
          <MdOutlineEmail className="text-black w-6 h-6" />
        </div>
        {/* Email Address Text */}
        <div>
          <h3 className="text-lg font-semibold">Email Address</h3>
          <p>dinotech117@gmail.com</p>
        </div>
      </div>

      {/* Work Hours Block */}
      <div className="flex items-center space-x-4 mt-6">
        {/* Timer Icon */}
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
          <IoTimerOutline className="text-black w-6 h-6" />
        </div>
        {/* Work Hours Text */}
        <div>
          <h3 className="text-lg font-semibold">Work Hours</h3>
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 10:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </div>
    <div className=" flex items-center justify-center  m-15">
      <div className="max-w-sm shadow-lg bg-white text-black p-8 rounded-lg  items-center">
      <h2 className="font-semibold text-xl mb-4">Connect With Us</h2>
      <p className="text-gray-500 mb-6">Follow us on social media for the latest property listings and real estate news</p>
      <div className="flex space-x-4 ">
        <FaInstagram className="text-2xl text-gray-400  hover:text-gray-600 cursor-pointer     " /> 
        <FaFacebook className="text-2xl text-gray-400  hover:text-gray-600 cursor-pointer    " /> 
        <FaTwitter className="text-2xl text-gray-400  hover:text-gray-600 cursor-pointer    " /> 
      </div>
      </div>
    </div>
      
      <Footer />
    </>
  );
};

export default Contacts;
