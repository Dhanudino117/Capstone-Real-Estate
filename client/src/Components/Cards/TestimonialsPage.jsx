import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Emma Wilson",
    role: "First-time Home Buyer",
    review:
      "Relocating to a new city is stressful, but DwellHub made finding a new home the easiest part of my move. Their virtual tours saved me time, and their local knowledge was invaluable.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Carter",
    role: "Real Estate Investor",
    review:
      "I've worked with many agencies, but DwellHub stands out. Their attention to detail and customer support are outstanding. They helped me secure prime real estate investments.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sophia Lee",
    role: "Home Seller",
    review:
      "Selling my home was smooth and hassle-free with DwellHub. They provided great insights on pricing, marketing, and negotiation strategies. Highly recommended!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center  p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-sm p-6  rounded-lg hover:shadow-xl ease-in shadow-md "
          >
            {/* Star Rating */}
            <div className="flex space-x-1 text-yellow-500 text-lg">
              {[...Array(5)].map((_, starIndex) =>
                starIndex < testimonial.rating ? (
                  <FaStar key={starIndex} />
                ) : (
                  <FaRegStar key={starIndex} />
                )
              )}
            </div>

            {/* Review */}
            <p className="mt-4 text-gray-600">{testimonial.review}</p>

            {/* User Details */}
            <div className="flex items-center mt-4">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div className="ml-3">
                <h3 className="font-semibold text-gray-900">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;
