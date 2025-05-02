import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaMapMarkerAlt, FaBed } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function FeaturedProjectsPage() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/properties");
        setProperties(res.data.data);
      } catch (error) {
        console.log("Error in fetching properties:", error);
      }
    };
    fetchProperties();
  }, []);

  return (
    <>
      <Header />
      <div className="p-8 flex justify-center gap-10">
        <div className="w-full">
          <h1 className="text-3xl font-medium text-center mb-6">Featured Properties</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property, index) => (
              <div
                key={property._id || index}
                className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  className="w-full h-52 object-cover"
                  src={property.image || "/images/placeholder.jpg"}
                  alt={property.title}
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{property.title}</h2>
                  <p className="text-orange-600 font-medium">₹{property.regularprice}</p>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <FaMapMarkerAlt className="text-gray-500" />
                    <p>{property.location || "Unknown"}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <FaBed className="text-gray-500" />
                    <p>{property.type || "N/A"}</p>
                  </div>
                </div>
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
      </div>
      <Footer />
    </>
  );
}
