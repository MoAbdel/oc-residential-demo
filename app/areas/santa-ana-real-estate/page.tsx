import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { MapPin, Home, Building2, Users, TrendingUp, Heart, Briefcase, Phone, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Santa Ana Real Estate Agent | Homes for Sale & Cultural Properties | Sarah Chen',
  description: 'Expert Santa Ana real estate agent specializing in diverse communities, downtown revitalization, and affordable housing. Professional home buying & selling in Santa Ana. Call (949) 555-0123.',
  keywords: 'Santa Ana real estate agent, Santa Ana homes for sale, Downtown Santa Ana properties, Floral Park homes, French Park real estate, cultural diversity housing'
};

export default function SantaAnaRealEstatePage() {
  const santaAnaNeighborhoods = [
    {
      name: 'Downtown Santa Ana',
      avgPrice: '$650K',
      description: 'Urban core with historic buildings, arts district, and new development',
      yearBuilt: '1920s-2020s',
      homeStyles: 'Historic buildings, Modern condos'
    },
    {
      name: 'Floral Park', 
      avgPrice: '$900K',
      description: 'Historic district with charming 1920s homes and tree-lined streets',
      yearBuilt: '1920s-1940s',
      homeStyles: 'Colonial Revival, Spanish Revival'
    },
    {
      name: 'French Park',
      avgPrice: '$750K',
      description: 'Family neighborhood with parks, schools, and community amenities',
      yearBuilt: '1950s-1980s',
      homeStyles: 'Ranch style, Traditional'
    },
    {
      name: 'Park Santiago',
      avgPrice: '$700K',
      description: 'Established area with mid-century homes and mature landscaping',
      yearBuilt: '1960s-1980s',
      homeStyles: 'Mid-century modern, Ranch'
    },
    {
      name: 'Willard',
      avgPrice: '$650K',
      description: 'Diverse community with affordable housing and growing development',
      yearBuilt: '1940s-1990s',
      homeStyles: 'Craftsman, Traditional'
    },
    {
      name: 'Delhi',
      avgPrice: '$600K',
      description: 'Historic area with craftsman homes and cultural significance',
      yearBuilt: '1910s-1950s',
      homeStyles: 'Craftsman, Bungalow'
    }
  ];

  const realEstateServices = [
    {
      title: 'Cultural Community Properties',
      description: 'Specialized expertise in Santa Ana\'s diverse cultural communities and housing needs',
      benefits: ['Multilingual service capabilities', 'Cultural sensitivity expertise', 'Community connections'],
      icon: <Heart className="w-8 h-8 text-orange-500" />
    },
    {
      title: 'First-Time Homebuyer Support',
      description: 'Dedicated guidance for first-time buyers navigating the Santa Ana market',
      benefits: ['Down payment assistance programs', 'Educational workshops', 'Affordable housing expertise'],
      icon: <Home className="w-8 h-8 text-orange-500" />
    },
    {
      title: 'Urban Development Properties',
      description: 'Expert knowledge of Santa Ana\'s downtown revitalization and investment opportunities',
      benefits: ['Historic property expertise', 'New development insights', 'Investment potential analysis'],
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
            Serving All Santa Ana Communities
          </div>
          <h1 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-6">
            Santa Ana <span className="font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">Real Estate</span>
          </h1>
          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto mb-8">
            Your trusted Santa Ana real estate agent specializing in cultural diversity, 
            downtown revitalization, and affordable housing from Floral Park to French Park 
            and all Santa Ana neighborhoods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white px-8 py-3 text-lg font-light shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Search Santa Ana Properties
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

        {/* Santa Ana Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-1">$700K</h3>
            <p className="text-gray-600 font-light">Median Home Price</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-1">#2</h3>
            <p className="text-gray-600 font-light">Largest OC City</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-1">County</h3>
            <p className="text-gray-600 font-light">Seat of Orange</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-1">332K+</h3>
            <p className="text-gray-600 font-light">Population</p>
          </div>
        </div>

        {/* Real Estate Services */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extralight text-center mb-8 text-gray-900">
            Santa Ana Real Estate <span className="font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">Specialties</span>
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

        {/* Santa Ana Neighborhoods */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extralight text-center mb-8 text-gray-900">
            Cultural Communities <span className="font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">We Serve</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {santaAnaNeighborhoods.map((neighborhood, index) => (
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

        {/* Why Choose Sarah Chen for Santa Ana Real Estate */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-6">
              Why Choose <span className="font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">Sarah Chen</span> for Santa Ana Real Estate
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mr-4 mt-1">
                  <Heart className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-gray-900 mb-2">Affordable Homeownership Focus</h3>
                  <p className="text-gray-600 font-light">
                    Dedicated to helping Santa Ana families achieve homeownership with expert guidance 
                    on affordable housing options, first-time buyer programs, and down payment assistance.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mr-4 mt-1">
                  <Users className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-gray-900 mb-2">Cultural Community Expertise</h3>
                  <p className="text-gray-600 font-light">
                    Deep understanding of Santa Ana's diverse communities and cultural needs. 
                    Multilingual support and culturally sensitive real estate guidance available.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mr-4 mt-1">
                  <Building2 className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-gray-900 mb-2">Urban Development Knowledge</h3>
                  <p className="text-gray-600 font-light">
                    Expert knowledge of Santa Ana's downtown revitalization and arts district growth. 
                    Specializing in condos, historic homes, and new development opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-light text-gray-900 mb-4">Santa Ana Market Expertise</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-light">Median Home Price:</span>
                <span className="font-light text-orange-600">$700K</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-light">First-Time Buyer Range:</span>
                <span className="font-light text-orange-600">$500K-$650K</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-light">Days on Market:</span>
                <span className="font-light text-orange-600">35-45 days</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-light">Price Appreciation:</span>
                <span className="font-light text-orange-600">4-6% annually</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-2xl shadow-sm">
              <h4 className="font-light text-gray-900 mb-2 text-lg">Specializing In:</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  <span className="font-light">First-time buyer assistance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  <span className="font-light">Historic district properties</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  <span className="font-light">Downtown revitalization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  <span className="font-light">Affordable housing options</span>
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
                <CardTitle className="text-lg font-light text-gray-900">What makes Santa Ana a great place to buy?</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-600 font-light">
                  Santa Ana offers cultural diversity, affordable housing options compared to coastal areas, 
                  downtown revitalization, and strong community connections. It's the county seat with 
                  excellent schools and growing arts district.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-stone-50 to-gray-50 pb-4">
                <CardTitle className="text-lg font-light text-gray-900">How is the historic Floral Park district?</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-600 font-light">
                  Floral Park is a designated historic district with charming 1920s architecture, 
                  tree-lined streets, and strong community pride. Properties here appreciate well 
                  and offer unique character with modern conveniences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-stone-50 to-gray-50 pb-4">
                <CardTitle className="text-lg font-light text-gray-900">Are there affordable options for first-time buyers?</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-600 font-light">
                  Yes! Santa Ana offers more affordable housing than many OC cities, plus first-time 
                  buyer programs and down payment assistance. I can help navigate these opportunities 
                  and find the perfect starter home.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-stone-50 to-gray-50 pb-4">
                <CardTitle className="text-lg font-light text-gray-900">What's happening with downtown development?</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-600 font-light">
                  Downtown Santa Ana is experiencing significant revitalization with new condos, 
                  restaurants, arts venues, and transit improvements. This creates excellent 
                  investment opportunities and urban lifestyle options.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-amber-600 to-orange-500 rounded-2xl p-8 text-white shadow-xl">
          <h2 className="text-3xl md:text-4xl font-extralight mb-4">
            Ready to Find Your <span className="font-light">Santa Ana Home?</span>
          </h2>
          <p className="text-xl font-light mb-6 text-orange-100">
            Let's explore Santa Ana's diverse communities and find your perfect home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-light shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Search Santa Ana Properties
              </Button>
            </Link>
            <a href="tel:(949) 555-0123">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg font-light">
                Call (949) 555-0123
              </Button>
            </a>
          </div>
          <p className="text-sm text-orange-200 mt-4 font-light">
            Sarah Chen, Real Estate Agent • DRE #02145678 • Specializing in Santa Ana cultural communities
          </p>
        </div>
      </div>
    </div>
  );
}