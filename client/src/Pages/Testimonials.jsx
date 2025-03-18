import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Michael Thompson",
    role: "Luxury Home Buyer",
    review:
      "As someone looking for a luxury property, I had very specific requirements. DwellHub exceeded my expectations with their curated listings and personalized service. They handled everything from private viewings to negotiations, ensuring I found my dream home effortlessly.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Lisa Fernandez",
    role: "Rental Property Owner",
    review:
      "Managing rental properties can be overwhelming, but DwellHub made the entire process simple. From finding high-quality tenants to handling contracts, they took care of everything. Their professionalism and efficiency saved me a lot of time and hassle.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/52.jpg",
  },
  {
    name: "David Martinez",
    role: "Vacation Home Buyer",
    review:
      "I was looking for a vacation home in a scenic location, and DwellHub helped me find the perfect getaway. Their knowledge of the area and market trends ensured I got a great deal. The process was transparent and smooth from start to finish.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/58.jpg",
  },
  {
    name: "Angela Kim",
    role: "Relocating Professional",
    review:
      "Moving for work is always a challenge, but DwellHub made it seamless. They understood my requirements and helped me secure a home within commuting distance of my new job. The process was quick, efficient, and stress-free!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/36.jpg",
  },
  {
    name: "Robert Singh",
    role: "Commercial Property Investor",
    review:
      "I was looking to invest in commercial real estate, and DwellHub provided me with excellent opportunities. Their team analyzed market trends, provided detailed reports, and helped me make informed investment decisions. Highly professional and knowledgeable!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/60.jpg",
  },

  {
    name: "Ava Mitchell",
    role: "First-time Home Buyer",
    review:
      "Moving to a new city was overwhelming, but DwellHub made house hunting a breeze. Their virtual tours and expert advice helped me find the perfect home without the hassle. The entire process, from viewing to closing, was smooth, and their team was incredibly supportive!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "Noah Richardson",
    role: "Real Estate Investor",
    review:
      "I have worked with several agencies, but DwellHub is by far the best. Their team provided in-depth market analysis and secured high-yield investment properties for me. Their professionalism and expertise have made them my go-to agency for future investments.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/25.jpg",
  },
  {
    name: "Isabella Ramirez",
    role: "Home Seller",
    review:
      "Selling my home felt overwhelming, but DwellHub handled everything flawlessly. They provided expert pricing strategies, professional photography, and aggressive marketing that helped me sell my property quickly and at a great price!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/58.jpg",
  },
  {
    name: "Ethan Sullivan",
    role: "Luxury Home Buyer",
    review:
      "I was searching for a luxury property, and DwellHub delivered beyond expectations. Their team provided exclusive listings and private tours, ensuring I found a home that perfectly matched my lifestyle. The entire process was smooth and stress-free.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/48.jpg",
  },
  {
    name: "Olivia Bennett",
    role: "Rental Property Owner",
    review:
      "Managing rental properties used to be a hassle, but DwellHub took care of everything—from screening tenants to handling lease agreements. Their service has been invaluable in keeping my properties occupied with reliable tenants.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/63.jpg",
  },
  {
    name: "Benjamin Cooper",
    role: "Vacation Home Buyer",
    review:
      "I wanted a vacation home in a peaceful location, and DwellHub found me the perfect getaway. Their knowledge of the market and negotiation skills ensured I got the best deal possible. Highly recommend them for anyone looking for second homes!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    name: "Madeline Scott",
    role: "Relocating Professional",
    review:
      "Relocating for work is stressful, but DwellHub made it effortless. They helped me find a home close to my new office with all the amenities I needed. The entire process was efficient, and I couldn’t have asked for better service.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  
];

const Testimonials = () => {
  return (
    <div className="min-h-screen flex flex-col items-center  p-6">
      <button className="p-2 bg-blue-600 text-white rounded mb-10">Client Stories</button>
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        What Our Clients Say
      </h2>
        <p>Hear about the experiences of homeowners who found their perfect match with us.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-20">
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

export default Testimonials;
