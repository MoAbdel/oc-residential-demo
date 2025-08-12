import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { MapPin, Home, Castle, Users, TrendingUp, Building, Heart, Star, Award, Phone, Mail, GraduationCap, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Anaheim Real Estate Agent | Homes for Sale & Luxury Properties | Sarah Chen',
  description: 'Expert Anaheim real estate agent specializing in Anaheim Hills, Downtown Anaheim luxury homes. Professional buying & selling services near Disneyland. Call (949) 555-0123.',
  keywords: 'Anaheim real estate agent, Anaheim homes for sale, Anaheim Hills homes, Downtown Anaheim real estate, Disneyland area homes, Anaheim luxury properties'
};

export default function AnaheimRealEstatePage() {
  const anaheimNeighborhoods = [
    {
      name: 'Anaheim Hills',
      avgPrice: '$1.2M',
      description: 'Upscale master-planned community with canyon views and luxury amenities',
      yearBuilt: '1970s-2000s',
      homeStyles: 'Custom homes, Luxury estates'
    },
    {
      name: 'Downtown Anaheim', 
      avgPrice: '$600K',
      description: 'Urban revitalization area with new condos, dining, and entertainment',
      yearBuilt: '1950s-Present',
      homeStyles: 'Modern condos, Lofts'
    },
    {
      name: 'Resort District',
      avgPrice: '$700K',
      description: 'Near Disneyland with family-friendly communities and tourism benefits',
      yearBuilt: '1950s-1980s',
      homeStyles: 'Single-family, Townhomes'
    },
    {
      name: 'West Anaheim',
      avgPrice: '$650K',
      description: 'Diverse neighborhoods with affordable family homes and growing amenities',
      yearBuilt: '1940s-1970s',
      homeStyles: 'Traditional, Ranch-style'
    },
    {
      name: 'East Anaheim',
      avgPrice: '$750K',
      description: 'Established residential areas with parks, schools, and community centers',
      yearBuilt: '1960s-1990s',
      homeStyles: 'Single-family, Traditional'
    },
    {
      name: 'Canyon Hills',
      avgPrice: '$900K',
      description: 'Hillside community with custom homes and scenic canyon views',
      yearBuilt: '1980s-2000s',
      homeStyles: 'Custom hillside, Mediterranean'
    }
  ];

  const realEstateServices = [
    {
      title: 'Luxury Home Sales',
      description: 'Specialized marketing and negotiation for Anaheim Hills premium properties',
      benefits: ['Professional photography & staging', 'Targeted luxury buyer network', 'Premium marketing materials'],
      icon: <Building className="w-8 h-8 text-orange-500" />
    },
    {
      title: 'First-Time Homebuyers',
      description: 'Complete guidance for families seeking affordable Anaheim neighborhoods',
      benefits: ['Market analysis & timing', 'First-time buyer programs', 'Negotiation expertise'],
      icon: <Home className="w-8 h-8 text-orange-500" />
    },
    {
      title: 'Investment Properties',
      description: 'Capitalize on Anaheim\'s tourism and rental property opportunities',
      benefits: ['Cash flow analysis', 'Tourism market insights', 'Property management referrals'],
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            Serving All Anaheim Communities
          </div>
          <h1 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-6">
            Anaheim <span className="font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">Real Estate</span>
          </h1>
          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto mb-8">
            Your trusted Anaheim real estate agent specializing in Anaheim Hills, Downtown condos, 
            and family communities near Disneyland with investment opportunities and luxury amenities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white px-8 py-3 text-lg font-light shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Get Market Analysis
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

        {/* Anaheim Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-1">$750K</h3>
            <p className="text-gray-600 font-light">Median Home Price</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Castle className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-1">#1</h3>
            <p className="text-gray-600 font-light">Tourist Destination</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-1">1955</h3>
            <p className="text-gray-600 font-light">Disneyland Opening</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-1">346K+</h3>
            <p className="text-gray-600 font-light">Population</p>
          </div>
        </div>

        {/* Real Estate Services */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extralight text-center mb-8 text-gray-900">
            Specialized <span className="font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">Services</span>
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
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
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

        {/* Anaheim Neighborhoods */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extralight text-center mb-8 text-gray-900">
            Anaheim <span className="font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">Neighborhoods</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {anaheimNeighborhoods.map((neighborhood, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 rounded-2xl border-0 shadow-lg overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-stone-50 to-gray-50">
                  <CardTitle className="flex items-center text-lg font-light text-gray-900">
                    <MapPin className="w-5 h-5 text-orange-500 mr-2" />
                    {neighborhood.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-600 font-light">Avg Home Price:</span>
                    <span className="font-light text-orange-500 text-lg">{neighborhood.avgPrice}</span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-600 font-light">Built:</span>
                    <span className="font-light text-gray-700 text-sm">{neighborhood.yearBuilt}</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-sm text-gray-600 font-light">Home Styles:</span>
                    <span className="font-light text-gray-700 text-sm ml-1">{neighborhood.homeStyles}</span>
                  </div>
                  <p className="text-gray-600 text-sm font-light">{neighborhood.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Sarah for Anaheim */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-6">
              Why Choose Sarah Chen for 
              <span className="block font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                Anaheim Real Estate
              </span>
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4 mt-1">
                  <Castle className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-gray-900 mb-2">Tourism Market Specialist</h3>
                  <p className="text-gray-600 font-light">
                    Expert knowledge of Anaheim's tourism-driven economy, rental property opportunities, 
                    and investment potential near major attractions like Disneyland.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 mt-1">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-gray-900 mb-2">First-Time Buyer Expert</h3>
                  <p className="text-gray-600 font-light">
                    Specialized in helping families achieve homeownership in Anaheim's diverse 
                    neighborhoods with various price points and community amenities.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 mt-1">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-gray-900 mb-2">Diverse Community Focus</h3>
                  <p className="text-gray-600 font-light">
                    Understanding of Anaheim's multicultural community with personalized service 
                    for families from all backgrounds seeking their perfect home.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-stone-50 to-gray-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-light text-gray-900 mb-6 text-center">Anaheim Market Insights</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-200">
                <span className="text-gray-700 font-light">Average Days on Market:</span>
                <span className="font-light text-orange-500">35-45 days</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-200">
                <span className="text-gray-700 font-light">Price per Sq Ft:</span>
                <span className="font-light text-orange-500">$450-$650</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-200">
                <span className="text-gray-700 font-light">HOA Fees (typical):</span>
                <span className="font-light text-orange-500">$50-$200/month</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-700 font-light">Tourism Impact:</span>
                <span className="font-light text-orange-500">Strong rental demand</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-xl border border-gray-100">
              <h4 className="font-light text-gray-900 mb-3 text-center">Popular Home Features:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 font-light">
                <div>• Open floor plans</div>
                <div>• Modern kitchens</div>
                <div>• Swimming pools</div>
                <div>• Two-car garages</div>
                <div>• Family rooms</div>
                <div>• Low maintenance yards</div>
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
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg font-light text-gray-900">Are there benefits to living near Disneyland?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-light">
                  Living near Disneyland offers strong rental property potential, walkability to 
                  entertainment, and proximity to major employment centers. Many residents enjoy 
                  annual passes and the vibrant community atmosphere.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg font-light text-gray-900">What makes Anaheim Hills special?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-light">
                  Anaheim Hills offers luxury living with canyon views, excellent schools, upscale 
                  shopping, and master-planned communities. It's one of Orange County's most 
                  prestigious addresses with resort-style amenities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg font-light text-gray-900">How competitive is the Anaheim market?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-light">
                  Anaheim offers varied competition levels by area. Anaheim Hills is highly competitive 
                  while other neighborhoods offer more opportunities for buyers. Strategic timing and 
                  expert guidance are key to success.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg font-light text-gray-900">Are there good investment opportunities in Anaheim?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-light">
                  Yes! Anaheim's tourism industry creates strong rental demand, especially near 
                  attractions. Downtown revitalization and diverse neighborhoods offer various 
                  investment strategies from rental properties to fix-and-flip opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-amber-600 to-orange-500 rounded-2xl p-8 text-white">
          <h2 className="text-3xl md:text-4xl font-extralight mb-4">
            Ready to Explore Anaheim Real Estate?
          </h2>
          <p className="text-xl font-light mb-6 text-orange-100">
            Get personalized market insights and find your perfect Anaheim home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-orange-500 hover:bg-orange-50 px-8 py-3 text-lg font-light shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Get Market Analysis
              </Button>
            </Link>
            <a href="tel:(949) 555-0123">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3 text-lg font-light">
                <Phone className="w-4 h-4 mr-2" />
                Call (949) 555-0123
              </Button>
            </a>
          </div>
          <p className="text-sm text-orange-200 mt-6 font-light">
            Licensed Orange County Real Estate Professional • DRE #02145678 • Serving all Anaheim neighborhoods
          </p>
        </div>
      </div>
    </div>
  );
}