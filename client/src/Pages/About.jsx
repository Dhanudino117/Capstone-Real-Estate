import React from "react";
import FeatureCard from "../Components/Cards/FeaturesSection";
import TestimonialsPage from "../Components/Cards/TestimonialsPage";
import Footer from "../Components/Footer";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";

const About = () => {
  return (
    <>
      <div className="items-center text-center p-20">
        <h1 className="text-4xl font-bold ">About Havenquix</h1>
        <p className="pt-6 text-xl font-base">
          Connecting people with properties they love since 2010
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center max-w-4xl mx-auto mb-20">
        <div className="md:w-2/3">
          <h2 className="bg-blue-600 text-white px-4 py-1 rounded-md w-fit text-lg font-semibold">
            Our Story
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Founded in 2010, Housora began with a simple mission: to transform
            the real estate experience by putting people first. What started as
            a small team of passionate real estate professionals has grown into
            a trusted industry leader.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We believe that finding the perfect property is about more than just
            the number of bedrooms or square footage—it's about finding a place
            where memories will be made and lives will unfold.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Over the past decade, we’ve helped thousands of clients find their
            dream homes, investment properties, and commercial spaces, building
            lasting relationships along the way.
          </p>
        </div>
        <div className="md:w-1/3 mt-6 md:mt-0 md:ml-8">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2UlMjBrZXl8ZW58MHx8MHx8fDA%3D"
            alt="House and Keys"
            className="rounded-lg shadow-md w-full object-cover h-50"
          />
        </div>
      </div>

      <section className="items-center flex flex-col justify-center ">
        <h2 className="bg-blue-600 text-white px-4 py-1 rounded-md w-fit text-lg font-semibold">
          Our Values
        </h2>
        <p className="pt-6 text-xl text-center">
          Our core values guide everything we do at Housora, from how we
          interact with clients to how we select properties
        </p>
        <div className="flex flex-col items-center mx-4">
          <div className="flex flex-col md:flex-row justify-center gap-8 p-6">
            <FeatureCard
              icon={MdOutlinePeopleAlt}
              title="Client-Centered"
              description="We carefully evaluate each property to ensure it meets our high standards for quality and value."
            />
            <FeatureCard
              icon={FaShieldAlt}
              title="Integrity"
              description="Our platform ensures that all transactions are safe and verified for a hassle-free experience."
            />
            <FeatureCard
              icon={LuMessageCircle}
              title="Innovation"
              description="We collaborate with reliable real estate agents to provide you with the best options available."
            />
          </div>
        </div>
      </section>
      <section className="items-center flex flex-col justify-center">
        <h2 className="text-xl bg-blue-600 px-3 py-1.5 text-white rounded " >
          Our Team
        </h2>
        <h1 className="py-5 text-xl font-medium">Meet the Expert</h1>
        <p className="font-base text-center">
          Our experienced team of real estate professionals is dedicated to
          providing exceptional service
        </p>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-64 text-center pt-5">
          <img
            src="https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?s=612x612&w=0&k=20&c=uP9rKidKETywVil0dbvg_vAKyv2wjXMwWJDNPHzc_Ug="
            alt="Dhanush"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Dhanush</h3>
            <p className="text-gray-500">CEO & Founder</p>
          </div>
        </div>
      </section>

      <div className="text-center pt-10">
        <h1 className="text-xl font-bold">What Our Partners Say</h1>
        <TestimonialsPage />
      </div>

      <div className="flex flex-col md:flex-row items-center bg-white p-6 md:p-8 rounded-xl shadow-lg max-w-4xl mx-auto mt-10 w-full">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src="https://www.shutterstock.com/image-photo/why-choose-us-symbol-concept-600nw-2397518021.jpg"
            alt="Modern Living Room"
            className="rounded-lg shadow-md w-full"
          />
        </div>
        <div className="md:w-1/2 md:pl-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-4 font-semibold w-full md:w-auto">
            Why Choose Us
          </button>
          <h2 className="text-2xl font-bold mb-3">What Sets Us Apart</h2>
          <p className="text-gray-600 mb-4">
            With over a decade of experience in the real estate market, we’ve
            built a reputation for excellence, integrity, and exceptional client
            service.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Unmatched Expertise</h3>
              <p className="text-gray-600">
                Our team consists of industry professionals with deep local
                market knowledge.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Personalized Service</h3>
              <p className="text-gray-600">
                We take the time to understand your unique needs and
                preferences.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="pt-20">
        <Footer />
      </footer>
    </>
  );
};

export default About;