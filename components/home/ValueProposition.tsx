import React from "react";
import { Award, Users, TrendingUp, Shield, Clock, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Luxury Market Expertise",
    description: "Specialized knowledge in high-end properties with exclusive access to off-market listings and premium clientele."
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Consistent track record of achieving 102% of list price with strategic pricing and expert negotiation."
  },
  {
    icon: Users,
    title: "White-Glove Service",
    description: "Concierge-level attention with dedicated support throughout your entire real estate journey."
  }
];

export default function ValueProposition() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-6">
            Why Choose
            <span className="block font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-xl font-light text-gray-600 max-w-2xl mx-auto">
            Experience the difference that comes with working alongside 
            Orange County's most trusted real estate professional.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group text-center space-y-6 p-8 rounded-2xl hover:bg-stone-50 transition-all duration-500"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <benefit.icon className="w-8 h-8 text-amber-600" />
              </div>
              
              <h3 className="text-xl font-light text-gray-900">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 font-light leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial Quote */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-stone-50 to-amber-50/30 rounded-3xl p-12">
            <blockquote className="text-2xl md:text-3xl font-light text-gray-800 italic leading-relaxed mb-6">
              "Sarah doesn't just sell homes — she creates extraordinary experiences 
              that turn real estate dreams into reality."
            </blockquote>
            <cite className="text-amber-600 font-light">— Jennifer Thompson, Newport Beach Home Buyer</cite>
          </div>
        </div>
      </div>
    </section>
  );
}