import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Find Your Dream <span className="text-blue-600">Property</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Discover the perfect property for your needs with our extensive collection of premium real estate listings across the country.
          </p>
          <div className="mt-10 flex w-full max-w-md flex-col gap-4 sm:flex-row sm:justify-center">
            <button className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-medium transition">
              Browse Properties
            </button>
            <button className="h-12 px-8 border border-gray-200 text-gray-800 hover:bg-gray-50 rounded-lg text-lg font-medium transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20 relative mx-auto max-w-6xl px-4">
        <div className="rounded-xl shadow-lg overflow-hidden animate-fade-in">
          <img
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80"
            alt="Luxury Property"
            className="w-full aspect-[16/7] object-cover"
          />
        </div>
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-11/12 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 bg-white rounded-lg border shadow-lg">
            <div className="p-4 text-center border-b md:border-r md:border-b-0">
              <p className="text-sm text-gray-500">Residential</p>
              <p className="font-semibold text-lg">8,500+ Properties</p>
            </div>
            <div className="p-4 text-center border-b md:border-r md:border-b-0">
              <p className="text-sm text-gray-500">Commercial</p>
              <p className="font-semibold text-lg">3,200+ Properties</p>
            </div>
            <div className="p-4 text-center">
              <p className="text-sm text-gray-500">Luxury</p>
              <p className="font-semibold text-lg">1,800+ Properties</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
