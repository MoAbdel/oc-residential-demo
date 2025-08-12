import React from "react";
import { CheckCircle, MapPin } from "lucide-react";

// Mock data for demo purposes
const mockProperties = [
  {
    id: 1,
    title: "Luxury Oceanview Villa",
    price: 2850000,
    city: "Newport Beach",
    state: "CA",
    bedrooms: 5,
    bathrooms: 4,
    property_type: "single_family",
    image_url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Modern Estate Home",
    price: 1950000,
    city: "Irvine",
    state: "CA", 
    bedrooms: 4,
    bathrooms: 3,
    property_type: "single_family",
    image_url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Coastal Contemporary",
    price: 3200000,
    city: "Huntington Beach",
    state: "CA",
    bedrooms: 6,
    bathrooms: 5,
    property_type: "single_family",
    image_url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Luxury Townhome",
    price: 1450000,
    city: "Costa Mesa",
    state: "CA",
    bedrooms: 3,
    bathrooms: 3,
    property_type: "townhouse",
    image_url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop"
  }
];

export default function RecentSales() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-6">
            Recent
            <span className="block font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl font-light text-gray-600 max-w-2xl mx-auto">
            Discover how I've helped clients achieve extraordinary results 
            in today's competitive market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockProperties.map((property, index) => (
            <div 
              key={property.id}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image_url}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 flex items-center border border-white/10">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-1" />
                    <span className="text-green-600 text-sm font-light">SOLD</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-3">
                <div className="flex items-center text-gray-500 text-sm font-light">
                  <MapPin className="w-4 h-4 mr-1" />
                  {property.city}, {property.state}
                </div>
                
                <div className="text-2xl font-light text-gray-900">
                  ${property.price.toLocaleString()}
                </div>
                
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  {property.property_type.replace('_', ' ')} • {property.bedrooms}bd {property.bathrooms}ba
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}