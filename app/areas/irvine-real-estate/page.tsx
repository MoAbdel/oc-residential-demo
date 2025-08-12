import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { MapPin, Home, GraduationCap, Shield, TrendingUp, Users, Building, Star, Award, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Irvine Real Estate Agent | Homes for Sale & Luxury Properties | Sarah Chen',
  description: 'Expert Irvine real estate agent specializing in University Park, Woodbridge, Northwood luxury homes. Professional buying & selling services in Orange County. Call (949) 555-0123.',
  keywords: 'Irvine real estate agent, Irvine homes for sale, University Park homes, Woodbridge real estate, Northwood properties, Irvine luxury homes'
};

export default function IrvineRealEstatePage() {
  const irvineNeighborhoods = [
    {
      name: 'University Park',
      avgPrice: '$1.4M',
      description: 'Luxury homes near UCI with top-rated schools and family amenities',
      yearBuilt: '1970s-1980s',
      homeStyles: 'Single-family, Townhomes'
    },
    {
      name: 'Woodbridge',
      avgPrice: '$1.2M', 
      description: 'Established community with man-made lakes, parks, and excellent schools',
      yearBuilt: '1970s-1990s',
      homeStyles: 'Single-family, Condos'
    },
    {
      name: 'Northwood',
      avgPrice: '$1.3M',
      description: 'Family-friendly with newer construction and modern amenities',
      yearBuilt: '1980s-2000s',
      homeStyles: 'Single-family, Townhomes'
    },
    {
      name: 'Turtle Rock',
      avgPrice: '$1.5M',
      description: 'Prestigious area with canyon views and luxury custom properties',
      yearBuilt: '1980s-1990s',
      homeStyles: 'Custom homes, Estates'
    },
    {
      name: 'Quail Hill',
      avgPrice: '$1.6M',
      description: 'Newer master-planned community with contemporary luxury homes',
      yearBuilt: '2000s-2010s',
      homeStyles: 'Modern, Luxury homes'
    },
    {
      name: 'Portola Springs',
      avgPrice: '$1.1M',
      description: 'Newest development with family-friendly amenities and parks',
      yearBuilt: '2000s-Present',
      homeStyles: 'New construction, Townhomes'
    }
  ];

  const realEstateServices = [
    {
      title: 'Luxury Home Sales',
      description: 'Specialized marketing and negotiation for Irvine\'s premium properties',
      benefits: ['Professional photography & staging', 'Targeted luxury buyer network', 'Premium marketing materials'],
      icon: <Building className="w-8 h-8 text-orange-500" />
    },
    {
      title: 'First-Time Homebuyers',
      description: 'Complete guidance through Irvine\'s competitive market',
      benefits: ['Market analysis & timing', 'Negotiation expertise', 'Local lender connections'],
      icon: <Home className="w-8 h-8 text-orange-500" />
    },
    {
      title: 'Investment Properties',
      description: 'Identify high-potential rental properties and appreciation opportunities',
      benefits: ['Cash flow analysis', 'Market trend insights', 'Property management referrals'],
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
            Serving All Irvine Neighborhoods
          </div>
          <h1 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-6">
            Irvine <span className="font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">Real Estate</span>
          </h1>
          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto mb-8">
            Your trusted Irvine real estate agent specializing in luxury homes, family communities, 
            and investment properties in University Park, Woodbridge, Northwood, and beyond.
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

        {/* Irvine Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-1">$1.3M</h3>
            <p className="text-gray-600 font-light">Median Home Price</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-1">10/10</h3>
            <p className="text-gray-600 font-light">School Ratings</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-1">#1</h3>
            <p className="text-gray-600 font-light">Safest City in CA</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-1">280K+</h3>
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

        {/* Irvine Neighborhoods */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extralight text-center mb-8 text-gray-900">
            Irvine <span className="font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">Neighborhoods</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {irvineNeighborhoods.map((neighborhood, index) => (
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

        {/* Why Choose Sarah for Irvine */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-6">
              Why Choose Sarah Chen for 
              <span className="block font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                Irvine Real Estate
              </span>
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4 mt-1">
                  <Award className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-gray-900 mb-2">Master-Planned Community Expert</h3>
                  <p className="text-gray-600 font-light">
                    Deep understanding of Irvine Company properties, HOA regulations, 
                    Mello-Roos, and the unique aspects of master-planned living.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 mt-1">
                  <GraduationCap className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-gray-900 mb-2">Education-Focused Service</h3>
                  <p className="text-gray-600 font-light">
                    Specialized expertise helping families find homes in top school districts. 
                    Understanding of UCI area and what matters to academic families.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 mt-1">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-gray-900 mb-2">Luxury Market Specialist</h3>
                  <p className="text-gray-600 font-light">
                    Proven track record with high-value properties. Professional marketing, 
                    staging consultation, and premium buyer network access.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-stone-50 to-gray-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-light text-gray-900 mb-6 text-center">Irvine Market Insights</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-200">
                <span className="text-gray-700 font-light">Average Days on Market:</span>
                <span className="font-light text-orange-500">25-35 days</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-200">
                <span className="text-gray-700 font-light">Price per Sq Ft:</span>
                <span className="font-light text-orange-500">$650-$900</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-200">
                <span className="text-gray-700 font-light">HOA Fees (typical):</span>
                <span className="font-light text-orange-500">$150-$400/month</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-700 font-light">Mello-Roos:</span>
                <span className="font-light text-orange-500">Varies by area</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-xl border border-gray-100">
              <h4 className="font-light text-gray-900 mb-3 text-center">Popular Home Features:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 font-light">
                <div>• Open floor plans</div>
                <div>• Modern kitchens</div>
                <div>• Smart home tech</div>
                <div>• Outdoor living spaces</div>
                <div>• Home offices</div>
                <div>• Energy efficiency</div>
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
                <CardTitle className="text-lg font-light text-gray-900">What makes Irvine special for families?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-light">
                  Irvine offers master-planned communities with top-rated schools (many 9-10 rated), 
                  extensive parks, family amenities, and a strong sense of safety and community. 
                  The proximity to UC Irvine adds educational and cultural value.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg font-light text-gray-900">How competitive is the Irvine market?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-light">
                  Irvine is highly competitive due to excellent schools and amenities. 
                  Homes often receive multiple offers. Having an experienced agent with 
                  market knowledge and strong negotiation skills is crucial.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg font-light text-gray-900">What should I know about HOAs in Irvine?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-light">
                  Most Irvine communities have HOAs that maintain common areas, amenities, 
                  and community standards. Fees typically range from $150-400/month. 
                  Some areas also have Mello-Roos taxes for infrastructure improvements.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg font-light text-gray-900">Which Irvine neighborhoods are best for investment?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-light">
                  Newer developments like Portola Springs and Great Park offer growth potential. 
                  Established areas like Woodbridge and University Park provide stability. 
                  Rental demand is strong throughout Irvine due to UCI and business centers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-amber-600 to-orange-500 rounded-2xl p-8 text-white">
          <h2 className="text-3xl md:text-4xl font-extralight mb-4">
            Ready to Explore Irvine Real Estate?
          </h2>
          <p className="text-xl font-light mb-6 text-orange-100">
            Get personalized market insights and find your perfect Irvine home
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
            Licensed Orange County Real Estate Professional • DRE #02145678 • Serving all Irvine neighborhoods
          </p>
        </div>
      </div>
    </div>
  );
}