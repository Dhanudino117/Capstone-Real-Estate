import React from "react";
import Footer from "../../Components/Footer";

const LandingPageTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emma Johnson",
      role: "Homeowner",
      avatar: "EJ",
      content:
        "EstateMarket made finding our dream home so easy. The platform is intuitive and the agents were incredibly helpful throughout the entire process.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Property Investor",
      avatar: "MC",
      content:
        "As an investor, I've used many real estate platforms, but EstateMarket offers the most comprehensive tools and listings. Highly recommended!",
    },
    {
      id: 3,
      name: "Sarah Williams",
      role: "First-time Buyer",
      avatar: "SW",
      content:
        "Being a first-time buyer was intimidating, but EstateMarket guided me through every step with patience and expertise. I couldn't be happier with my new home.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border rounded-xl shadow-sm p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 text-blue-800 font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
     
    </section>
    
    
  );
};

export default LandingPageTestimonials;
