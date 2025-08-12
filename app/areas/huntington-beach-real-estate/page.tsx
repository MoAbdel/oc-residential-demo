import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { MapPin, Home, Waves, Sun, TrendingUp, Users, Building, Award, Phone, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Huntington Beach Real Estate Agent | Homes for Sale & Coastal Properties | Sarah Chen',
  description: 'Expert Huntington Beach real estate agent specializing in beachfront homes, Surf City lifestyle properties, and coastal investments. Professional beach home buying & selling. Call (949) 555-0123.',
  keywords: 'Huntington Beach real estate agent, beach homes for sale, Surf City properties, coastal real estate, beachfront homes, Huntington Beach homes'
};

export default function HuntingtonBeachRealEstatePage() {
  const huntingtonBeachNeighborhoods = [
    {
      name: 'Main Street/Downtown',
      avgPrice: '$1.3M',
      description: 'Historic downtown with pier proximity and vibrant beachside lifestyle',
      yearBuilt: '1960s-1980s',
      homeStyles: 'Beach cottages, Condos'
    },
    {
      name: 'Surf City', 
      avgPrice: '$1.2M',
      description: 'Classic beach community with vintage charm and authentic surf culture',
      yearBuilt: '1950s-1970s',
      homeStyles: 'Original beach homes, Bungalows'
    },
    {
      name: 'Bella Terra',
      avgPrice: '$1.0M',
      description: 'Modern development with shopping, dining, and contemporary amenities',
      yearBuilt: '2000s-2010s',
      homeStyles: 'Modern homes, Townhomes'
    },
    {
      name: 'Oak View',
      avgPrice: '$900K',
      description: 'Inland neighborhood with larger lots and family-friendly atmosphere',
      yearBuilt: '1970s-1990s',
      homeStyles: 'Single-family, Ranch style'
    },
    {
      name: 'Seacliff',
      avgPrice: '$1.5M',
      description: 'Upscale oceanfront community with luxury beach properties and ocean views',
      yearBuilt: '1980s-2000s',
      homeStyles: 'Oceanfront condos, Beach houses'
    },
    {
      name: 'Brightwater',
      avgPrice: '$2.5M',
      description: 'Luxury gated community with waterfront homes and resort-style amenities',
      yearBuilt: '2000s-Present',
      homeStyles: 'Luxury estates, Waterfront homes'
    }
  ];

  const realEstateServices = [
    {
      title: 'Beachfront Properties',
      description: 'Specialized expertise in oceanfront homes and coastal property investments',
      benefits: ['Ocean view property marketing', 'Coastal market analysis', 'Flood zone expertise'],
      icon: <Waves className="w-8 h-8 text-orange-500" />
    },
    {
      title: 'Surf City Lifestyle',
      description: 'Understanding the unique beach culture and lifestyle property needs',
      benefits: ['Beach community knowledge', 'Surf proximity properties', 'Vacation rental potential'],
      icon: <Sun className="w-8 h-8 text-orange-500" />
    },
    {
      title: 'Investment Properties',
      description: 'Beach rental properties and coastal investment opportunities',
      benefits: ['Rental income analysis', 'Vacation rental licensing', 'ROI projections'],
      icon: <Building className="w-8 h-8 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            Serving All Huntington Beach Areas
          </div>
          <h1 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-6">
            Huntington Beach <span className="font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">Real Estate</span>
          </h1>
          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto mb-8">
            Your trusted Huntington Beach real estate agent specializing in beachfront properties, 
            Surf City lifestyle homes, and coastal investments from Main Street to Brightwater.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white px-8 py-3 text-lg font-light shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Search Beach Properties
              </Button>
            </Link>
            <a href="tel:(949) 555-0123">
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 text-lg font-light">
                <Phone className="w-4 h-4 mr-2" />
                Call (949) 555-0123
              </Button>
            </a>
          </div>
        </div>

        {/* Huntington Beach Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-1">$1.2M</h3>
            <p className="text-gray-600 font-light">Median Home Price</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Waves className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-1">10</h3>
            <p className="text-gray-600 font-light">Miles of Beach</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sun className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-1">280+</h3>
            <p className="text-gray-600 font-light">Sunny Days/Year</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-1">198K+</h3>
            <p className="text-gray-600 font-light">Population</p>
          </div>
        </div>

        {/* Real Estate Services */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extralight text-center mb-8 text-gray-900">
            Beach Real Estate <span className="font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">Specialties</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {realEstateServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-stone-50 to-gray-50 pb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    {service.icon}
                    <CardTitle className="text-xl font-light text-gray-900">{service.title}</CardTitle>
                  </div>
                  <p className="text-gray-600 font-light">{service.description}</p>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3 mb-6">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-700 font-light">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                  <Link href="/services">
                    <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white font-light">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Huntington Beach Neighborhoods */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extralight text-center mb-8 text-gray-900">
            Beach Communities <span className="font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">We Serve</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {huntingtonBeachNeighborhoods.map((neighborhood, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-stone-50 to-gray-50 pb-6">
                  <CardTitle className="flex items-center text-xl font-light text-gray-900">
                    <MapPin className="w-5 h-5 text-orange-500 mr-2" />
                    {neighborhood.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-light text-gray-600">Avg Home Price:</span>
                    <span className="font-light text-orange-600 text-lg">{neighborhood.avgPrice}</span>
                  </div>
                  <p className="text-gray-600 text-sm font-light mb-4">{neighborhood.description}</p>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-gray-500 font-light block">Year Built:</span>
                      <span className="text-gray-700 font-light">{neighborhood.yearBuilt}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 font-light block">Home Styles:</span>
                      <span className="text-gray-700 font-light">{neighborhood.homeStyles}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Sarah Chen for Huntington Beach Real Estate */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-6">
              Why Choose <span className="font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">Sarah Chen</span> for Huntington Beach Real Estate
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mr-4 mt-1">
                  <Waves className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-gray-900 mb-2">Coastal Property Expertise</h3>
                  <p className="text-gray-600 font-light">
                    Specialized knowledge of beachfront properties, coastal regulations, 
                    and oceanfront market dynamics. Deep understanding of Surf City lifestyle and community preferences.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center mr-4 mt-1">
                  <Sun className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-gray-900 mb-2">Beach Lifestyle Marketing</h3>
                  <p className="text-gray-600 font-light">
                    Expert marketing strategies for beach properties, vacation rentals, 
                    and coastal investments. Understanding of seasonal market trends and buyer preferences.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mr-4 mt-1">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-gray-900 mb-2">Community Connections</h3>
                  <p className="text-gray-600 font-light">
                    Strong network within the Huntington Beach community including local contractors, 
                    inspectors, and service providers. Active in beach community events and organizations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-light text-gray-900 mb-4">Huntington Beach Market Expertise</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-light">Median Home Price:</span>
                <span className="font-light text-orange-600">$1.2M</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-light">Luxury Properties:</span>
                <span className="font-light text-orange-600">$2M+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-light">Days on Market:</span>
                <span className="font-light text-orange-600">25-35 days</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-light">Price Appreciation:</span>
                <span className="font-light text-orange-600">5-7% annually</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-2xl shadow-sm">
              <h4 className="font-light text-gray-900 mb-2 text-lg">Specializing In:</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  <span className="font-light">Beachfront & oceanview properties</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  <span className="font-light">Vacation rental investments</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  <span className="font-light">Luxury coastal estates</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  <span className="font-light">Beach lifestyle properties</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extralight text-center mb-8 text-gray-900">
            Frequently Asked <span className="font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">Questions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-stone-50 to-gray-50 pb-4">
                <CardTitle className="text-lg font-light text-gray-900">What makes Huntington Beach properties special?</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-600 font-light">
                  Huntington Beach offers 10 miles of pristine coastline, year-round beach lifestyle, 
                  and strong property appreciation. Beachfront properties provide both luxury living 
                  and excellent investment potential with vacation rental opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-stone-50 to-gray-50 pb-4">
                <CardTitle className="text-lg font-light text-gray-900">What's the price range near the pier?</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-600 font-light">
                  Properties within walking distance of Huntington Pier typically range from 
                  $1.2M to $3M+, depending on size, condition, and ocean proximity. Prime beachfront 
                  locations command premium prices due to their irreplaceable coastal position.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-stone-50 to-gray-50 pb-4">
                <CardTitle className="text-lg font-light text-gray-900">Is Huntington Beach good for investment properties?</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-600 font-light">
                  Yes! Huntington Beach is excellent for vacation rentals and investment properties. 
                  The strong tourist market, year-round appeal, and limited coastal inventory 
                  create solid rental income potential and long-term appreciation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-stone-50 to-gray-50 pb-4">
                <CardTitle className="text-lg font-light text-gray-900">How quickly do beach properties sell?</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-600 font-light">
                  Well-priced beachfront properties typically sell within 30-45 days. Prime oceanfront 
                  locations with proper marketing can attract multiple offers. The key is strategic 
                  pricing and showcasing the unique coastal lifestyle benefits.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-amber-600 to-orange-500 rounded-2xl p-8 text-white shadow-xl">
          <h2 className="text-3xl md:text-4xl font-extralight mb-4">
            Ready to Find Your <span className="font-light">Dream Beach Home?</span>
          </h2>
          <p className="text-xl font-light mb-6 text-orange-100">
            Let's explore Huntington Beach properties that match your coastal lifestyle dreams
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-light shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Search Beach Properties
              </Button>
            </Link>
            <a href="tel:(949) 555-0123">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg font-light">
                Call (949) 555-0123
              </Button>
            </a>
          </div>
          <p className="text-sm text-orange-200 mt-4 font-light">
            Sarah Chen, Real Estate Agent • DRE #02145678 • Specializing in Huntington Beach coastal properties
          </p>
        </div>
      </div>
    </div>
  );
}