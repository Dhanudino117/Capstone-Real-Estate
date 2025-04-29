import React from "react";
import { Building, MapPin } from "lucide-react";

const PropertyShowcase = () => {
  const properties = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      location: "Beverly Hills, CA",
      price: "$2,450,000",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3200,
      type: "For Sale",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Downtown Apartment",
      location: "Manhattan, NY",
      price: "$1,850,000",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1350,
      type: "For Sale",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 3,
      title: "Seaside Cottage",
      location: "Malibu, CA",
      price: "$8,500/month",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2100,
      type: "For Rent",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Featured Properties
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Explore our handpicked selection of premium properties
            </p>
          </div>
          <button 
            className="mt-4 md:mt-0 px-6 py-2 border border-gray-300 text-gray-800 hover:bg-gray-50 rounded-lg font-medium transition"
          >
            View All Properties
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-xl overflow-hidden shadow-sm transition hover:shadow-lg">
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full aspect-[4/3] object-cover"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {property.type}
                </span>
                {property.featured && (
                  <span className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mt-1 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {property.location}
                  </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-xl font-bold text-gray-800">{property.price}</div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Building className="h-4 w-4 mr-1" />
                    <span>{property.bedrooms} Beds</span>
                  </div>
                  <div>
                    {property.bathrooms} Baths
                  </div>
                  <div>
                    {property.sqft} sqft
                  </div>
                </div>
              </div>
              <div className="p-5 border-t">
                <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyShowcase;
