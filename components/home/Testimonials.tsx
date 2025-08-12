import React from "react";
import { Star, Quote } from "lucide-react";

// Mock testimonials for demo
const mockTestimonials = [
  {
    id: 1,
    client_name: "Jennifer Thompson",
    location: "Newport Beach",
    review: "Sarah made our home buying experience exceptional. Her attention to detail and market knowledge helped us find our dream home in a competitive market.",
    client_initial: "J"
  },
  {
    id: 2,
    client_name: "Michael Rodriguez",
    location: "Irvine", 
    review: "Working with Sarah was the best decision we made. She sold our home for 15% above asking price in just 10 days. Truly remarkable service.",
    client_initial: "M"
  },
  {
    id: 3,
    client_name: "Lisa Chen",
    location: "Huntington Beach",
    review: "Sarah's expertise in luxury properties is unmatched. She guided us through every step and made the process seamless and stress-free.",
    client_initial: "L"
  },
  {
    id: 4,
    client_name: "David Kim",
    location: "Costa Mesa",
    review: "Exceptional service from start to finish. Sarah's strategic approach helped us secure our investment property at the perfect price point.",
    client_initial: "D"
  },
  {
    id: 5,
    client_name: "Amanda Johnson",
    location: "Mission Viejo",
    review: "Sarah's professionalism and dedication exceeded our expectations. She made selling our family home an emotional yet smooth transition.",
    client_initial: "A"
  },
  {
    id: 6,
    client_name: "Robert Martinez",
    location: "Santa Ana",
    review: "Outstanding market knowledge and negotiation skills. Sarah helped us navigate a complex transaction with confidence and success.",
    client_initial: "R"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-6">
            Client
            <span className="block font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-xl font-light text-gray-600 max-w-2xl mx-auto">
            Hear directly from families who've experienced the Sarah Chen difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockTestimonials.slice(0, 6).map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="group bg-gradient-to-br from-stone-50 to-amber-50/20 rounded-3xl p-8 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-current mr-1"
                  />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-6 h-6 text-amber-200" />
                <p className="text-gray-700 font-light leading-relaxed pl-4 italic">
                  {testimonial.review}
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-500 rounded-full flex items-center justify-center text-white font-light text-lg mr-4">
                  {testimonial.client_initial}
                </div>
                <div>
                  <div className="font-light text-gray-900">
                    {testimonial.client_name}
                  </div>
                  <div className="text-sm text-gray-500 font-light">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}