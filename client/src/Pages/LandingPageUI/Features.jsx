import React from "react";

const Features = () => {
  const features = [
    {
      icon: "🏡",
      title: "Wide Range of Properties",
      description:
        "Browse through thousands of listings including apartments, houses, villas, and commercial spaces.",
    },
    {
      icon: "📍",
      title: "Prime Locations",
      description:
        "Find properties in prime locations with excellent connectivity and amenities.",
    },
    {
      icon: "🏢",
      title: "Property Management",
      description:
        "Comprehensive property management services for investors and property owners.",
    },
    {
      icon: "🔑",
      title: "Easy Transactions",
      description:
        "Streamlined buying, selling, and renting processes with secure payment options.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose EstateMarket
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We provide comprehensive real estate solutions tailored to your
            needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 inline-block rounded-lg bg-blue-50 p-3 text-3xl">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
