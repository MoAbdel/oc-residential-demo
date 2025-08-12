"use client";

import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function HomeValuationCTA() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    property_address: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Demo mode - just simulate success
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Thank You for Your Request
            </h2>
            <p className="text-xl font-light text-gray-600 mb-8">
              I'll provide you with a comprehensive market analysis within 24 hours.
            </p>
            <div className="flex items-center justify-center space-x-2 text-amber-600">
              <span className="font-light">Need immediate assistance?</span>
              <a href="tel:+19495550123" className="font-medium hover:underline">
                Call (949) 555-0123
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-extralight mb-6 leading-tight">
                Discover Your
                <span className="block font-light bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Home's Value
                </span>
              </h2>
              <p className="text-xl font-light text-white/80 leading-relaxed">
                Get a comprehensive market analysis with current trends, 
                comparable sales, and strategic insights to maximize your property's potential.
              </p>
            </div>
            
            {/* Benefits */}
            <div className="space-y-4">
              {[
                "Comprehensive market analysis",
                "Current comparable sales data",
                "Strategic pricing recommendations",
                "Complimentary consultation"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span className="text-white/90 font-light">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/10">
            <div className="bg-gradient-to-r from-amber-600 to-orange-500 p-8">
              <h3 className="text-2xl font-light text-white mb-2">
                Free Home Valuation
              </h3>
              <p className="text-white/90 font-light">Get your report in 24 hours</p>
            </div>
            <div className="p-8 bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.full_name}
                  onChange={(e) => handleInputChange("full_name", e.target.value)}
                  required
                  className="w-full h-12 rounded-xl border border-gray-200 px-4 font-light focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="w-full h-12 rounded-xl border border-gray-200 px-4 font-light focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                  className="w-full h-12 rounded-xl border border-gray-200 px-4 font-light focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                
                <input
                  type="text"
                  placeholder="Property Address"
                  value={formData.property_address}
                  onChange={(e) => handleInputChange("property_address", e.target.value)}
                  required
                  className="w-full h-12 rounded-xl border border-gray-200 px-4 font-light focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white font-light py-4 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
                >
                  {isSubmitting ? "Analyzing..." : "Get My Free Valuation"}
                </button>
                
                <p className="text-sm text-gray-500 text-center font-light">
                  Your information is secure and confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}