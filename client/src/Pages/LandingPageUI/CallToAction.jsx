import React from "react";

export const CallToAction = () => {
  return (
    <section className="py-16 bg-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-8 md:mb-0 md:max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to find your perfect property?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Join thousands of satisfied customers who found their dream
              properties with EstateMarket. Sign up today to get started.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            
              <button onToggle={'/Properties'} className="px-6 py-3 rounded-lg bg-white text-blue-800 hover:bg-gray-100 text-lg font-semibold transition duration-300">
                Browse Properties
              </button>

            <button className="px-6 py-3 rounded-lg border border-white text-white hover:bg-blue-700 text-lg font-semibold transition duration-300">
              Contact an Agent
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
