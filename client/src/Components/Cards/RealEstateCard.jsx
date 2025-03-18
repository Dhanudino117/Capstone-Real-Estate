import React from "react";
import { FaMapMarkerAlt, FaBed } from "react-icons/fa";
import { Link } from "react-router-dom";

const propertyData = [
  {
    image:
      "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
    title: "Modern Bungalow with Pool",
    priceRange: "₹95L to ₹3.3Cr",
    location: "Perambur, Chennai",
    bhk: "2 & 3 BHK Apartments",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-47141998/original/b3fee6f8-7350-4d7a-b148-b2428d05e5ab.jpeg?im_w=720",
    title: "Luxury Beachside Villa",
    priceRange: "₹2.5Cr to ₹5.8Cr",
    location: "ECR, Chennai",
    bhk: "4 & 5 BHK Villas",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551361415-69c87624334f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Premium City Apartment",
    priceRange: "₹80L to ₹2.5Cr",
    location: "Indiranagar, Bangalore",
    bhk: "2, 3 & 4 BHK Apartments",
  },
  {
    image:
      "https://media.istockphoto.com/id/1359011033/photo/3d-rendering-of-a-house-with-an-abstract-brigh-exterior-design.jpg?s=612x612&w=0&k=20&c=eb_2LIXKI6FyADVN8OUDt5rhcKY7VxrLKyCgTWB7fPg=",
    title: "Affordable Family Home",
    priceRange: "₹40L to ₹85L",
    location: "Whitefield, Bangalore",
    bhk: "2 & 3 BHK Apartments",
  },
  {
    image:
      "https://media.istockphoto.com/id/1487139529/photo/mormon-row-in-jackson-hole-wyoming-on-a-partially-cloudy-day.jpg?s=612x612&w=0&k=20&c=IUvSTUUt_q7egFyPAmAqdfwfKtORHRS5VQzJjuMJu10=",
    title: "Hill View Retreat",
    priceRange: "₹1.2Cr to ₹3.5Cr",
    location: "Lonavala, Maharashtra",
    bhk: "3 & 4 BHK Villas",
  },
  {
    image:
      "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799725.jpg?t=st=1742056290~exp=1742059890~hmac=d6bbdbd8d1b2f7192931dc2b37a0573b1dc6d66ee8bb13f8750cf0740d13b79d&w=826",
    title: "Ultra Modern Condo",
    priceRange: "₹1.5Cr to ₹4Cr",
    location: "BKC, Mumbai",
    bhk: "3 & 5 BHK Luxury Condos",
  },
];

const RealEstatePage = () => {
  <h1 className="text-3xl font-medium  text-center mb-6 ">
    Featured Properties
  </h1>;
  return (
    <div className="p-8 flex justify-center gap-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {propertyData.map((property, index) => (
          <div
            key={index}
            className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              className="w-full h-52 object-cover"
              src={property.image}
              alt={property.title}
            />

            {/* Card Content */}
            <div className="p-4">
              <h2 className="text-xl font-semibold">{property.title}</h2>
              <p className="text-orange-600 font-medium">
                {property.priceRange}
              </p>

              {/* Location */}
              <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                <FaMapMarkerAlt className="text-gray-500" />
                <p>{property.location}</p>
              </div>

              {/* BHK Info */}
              <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                <FaBed className="text-gray-500" />
                <p>{property.bhk}</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between px-4 pb-4">
              <Link to="/contact">
                <button className="border border-gray-400 text-black px-4 py-2 rounded hover:bg-slate-200 transition-all ease-in">
                  Contact
                </button>
              </Link>
              <Link to="/properties">
                <button className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded transition-all ease-in">
                  View More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealEstatePage;
