import { Link } from "react-router-dom";
import RealEstatePage from "../Components/Cards/RealEstateCard";
import TestimonialsPage from "../Components/Cards/TestimonialsPage";
import Footer from "../Components/Footer";
import { FaHandshake, FaSearch, FaShieldAlt } from "react-icons/fa";
import FeatureCard from "../Components/Cards/FeaturesSection";
import Header from "../Components/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-gray-100">
        {/* Hero Section */}
        <div className="text-center py-16 bg-white ">
          <h1 className="sm:text-5xl font-bold leading-normal font-[sen] text-black text-2xl">
            Home Is Where Your
            <br />
            Story Begins.
          </h1>
          <p className="text-gray-800 mt-4 text-xs md:">
            Unlock your dream home explore endless possibilities with
            <br />
            <span className="text-blue-600 font-semibold">Havenquix</span> -
            Your premier estate destination
          </p>
        </div>
        <div>
          <div className="flex justify-center bg-white pb-10">
            <Link to="/properties">
              <button className="px-2 py-1 bg-blue-600 text-white text-center rounded">
                Find Properties
              </button>
            </Link>
          </div>

          <img
            className="w-full object-cover md:h-[565px] flex justify-center items-center"
            src="https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="py-12 items-center text-xl text-gray-700 ">
            <p className="pl-9 text-gray-800 font-medium text-xl capitalize pb-4 ">
              Projects Across South India
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 py-3   ">
              <button className="bg-blue-700 hover:bg-blue-800 transition-all ease-in px-5 sm:rounded-l-md   text-white hover:cursor-pointer text-sm py-2">
                Chennai
              </button>
              <button className="bg-blue-700  hover:bg-blue-800 transition-all ease-in px-5  text-white hover:cursor-pointer text-sm py-1.5">
                Hyderabad
              </button>
              <button className="bg-blue-700  hover:bg-blue-800 transition-all ease-in px-5 sm:rounded-r-md text-white hover:cursor-pointer text-sm py-1.5">
                Bangalore
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8">
          <RealEstatePage />
        </div>

        <div className="text-center p-20 pt-40">
          <button className="px-2 py-1 bg-blue-600 text-white text-center rounded">
            Why Choose Us
          </button>
          <h1 className="pt-6 text-gray-800 font-medium text-xl capitalize pb-4">
            Our Commitment to you
          </h1>
          <h3 className="text-gray-700">
            Experience real estate excellence with our dedicated approach.
          </h3>
        </div>

        <div className="flex flex-col items-center mx-4">
          <div className="flex flex-col md:flex-row justify-center gap-8 p-6">
            <FeatureCard
              icon={FaSearch}
              title="Curated Selection"
              description="We carefully evaluate each property to ensure it meets our high standards for quality and value."
            />
            <FeatureCard
              icon={FaShieldAlt}
              title="Secure Transactions"
              description="Our platform ensures that all transactions are safe and verified for a hassle-free experience."
            />
            <FeatureCard
              icon={FaHandshake}
              title="Trusted Partners"
              description="We collaborate with reliable real estate agents to provide you with the best options available."
            />
          </div>
        </div>

        <div className="text-center p-20 pt-40">
          <button className="px-2 py-1 bg-blue-600 text-white text-center rounded">
            Client Stories
          </button>
          <h1 className="pt-6 text-gray-800 font-medium text-xl capitalize pb-4">
            What Our Clients Say
          </h1>
          <h3 className="text-gray-700">
            Hear about the experiences of homeowners who found their perfect
            match with us.
          </h3>
        </div>
        <TestimonialsPage />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
