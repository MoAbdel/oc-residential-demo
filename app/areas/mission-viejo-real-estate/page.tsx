import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { MapPin, Home, GraduationCap, Shield, TrendingUp, Users, Building, Star, Award, Phone, Mail, TreePine } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mission Viejo Real Estate Agent | Homes for Sale & Luxury Properties | Sarah Chen',
  description: 'Expert Mission Viejo real estate agent specializing in Lake Mission Viejo, Saddleback Valley luxury homes. Professional buying & selling services in Orange County. Call (949) 555-0123.',
  keywords: 'Mission Viejo real estate agent, Mission Viejo homes for sale, Lake Mission Viejo homes, Saddleback Valley real estate, Mission Viejo luxury homes'
};

export default function MissionViejoRealEstatePage() {
  const missionViejoNeighborhoods = [
    {
      name: 'Lake Mission Viejo',
      avgPrice: '$1.1M',
      description: 'Exclusive lakefront community with private beach and water activities',
      yearBuilt: '1960s-1980s',
      homeStyles: 'Custom lakefront, Traditional'
    },
    {
      name: 'Saddleback Valley', 
      avgPrice: '$950K',
      description: 'Master-planned neighborhoods with mountain views and family amenities',
      yearBuilt: '1970s-1990s',
      homeStyles: 'Single-family, Ranch-style'
    },
    {
      name: 'Alicia',
      avgPrice: '$900K',
      description: 'Established area with mature trees and close to town center',
      yearBuilt: '1970s-1990s',
      homeStyles: 'Traditional, Spanish-style'
    },
    {
      name: 'Castille',
      avgPrice: '$850K',
      description: 'Family-friendly community with parks and top-rated schools',
      yearBuilt: '1970s-1980s',
      homeStyles: 'Single-family, Townhomes'
    },
    {
      name: 'La Paz',
      avgPrice: '$800K',
      description: 'Convenient location with shopping and freeway access',
      yearBuilt: '1970s-1990s',
      homeStyles: 'Traditional, Condos'
    },
    {
      name: 'Marguerite',
      avgPrice: '$920K',
      description: 'Hillside community with canyon views and hiking trails',
      yearBuilt: '1970s-1980s',
      homeStyles: 'Hillside homes, Custom'
    }
  ];

  const realEstateServices = [
    {
      title: 'Luxury Home Sales',
      description: 'Specialized marketing and negotiation for Mission Viejo\'s premium properties',
      benefits: ['Professional photography & staging', 'Targeted luxury buyer network', 'Premium marketing materials'],
      icon: <Building className="w-8 h-8 text-orange-500" />
    },
    {
      title: 'Family Home Specialists',
      description: 'Complete guidance for families seeking top-rated school districts',
      benefits: ['School boundary expertise', 'Family-friendly neighborhood insights', 'Safe community knowledge'],
      icon: <Home className="w-8 h-8 text-orange-500" />
    },
    {
      title: 'Lake Community Expert',
      description: 'Specialized knowledge of Lake Mission Viejo properties and amenities',
      benefits: ['Lake access expertise', 'Recreation amenity knowledge', 'Waterfront property experience'],
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
            Serving All Mission Viejo Neighborhoods
          </div>
          <h1 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-6">
            Mission Viejo <span className="font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">Real Estate</span>
          </h1>
          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto mb-8">
            Your trusted Mission Viejo real estate agent specializing in Lake Mission Viejo, Saddleback Valley, 
            and family communities with top-rated schools and recreational amenities.
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

        {/* Mission Viejo Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-1">$950K</h3>
            <p className="text-gray-600 font-light">Median Home Price</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-1">9/10</h3>
            <p className="text-gray-600 font-light">School Ratings</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-1">Top 5</h3>
            <p className="text-gray-600 font-light">Safest Cities CA</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-1">95K+</h3>
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

        {/* Mission Viejo Neighborhoods */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extralight text-center mb-8 text-gray-900">
            Mission Viejo <span className="font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">Neighborhoods</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missionViejoNeighborhoods.map((neighborhood, index) => (
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

        {/* Why Choose Sarah for Mission Viejo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-6">
              Why Choose Sarah Chen for 
              <span className="block font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                Mission Viejo Real Estate
              </span>
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4 mt-1">
                  <TreePine className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-gray-900 mb-2">Master-Planned Community Expert</h3>
                  <p className="text-gray-600 font-light">
                    Deep understanding of Mission Viejo's master-planned communities, HOA regulations, 
                    recreational amenities, and the unique lifestyle benefits of planned living.
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
                    Specialized expertise helping families find homes in top-rated school districts. 
                    Understanding of what matters to families prioritizing education and safety.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 mt-1">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-gray-900 mb-2">Lake Community Specialist</h3>
                  <p className="text-gray-600 font-light">
                    Expert knowledge of Lake Mission Viejo properties, lake access rights, 
                    recreational amenities, and waterfront lifestyle opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-stone-50 to-gray-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-light text-gray-900 mb-6 text-center">Mission Viejo Market Insights</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-200">
                <span className="text-gray-700 font-light">Average Days on Market:</span>
                <span className="font-light text-orange-500">30-40 days</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-200">
                <span className="text-gray-700 font-light">Price per Sq Ft:</span>
                <span className="font-light text-orange-500">$500-$700</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-200">
                <span className="text-gray-700 font-light">HOA Fees (typical):</span>
                <span className="font-light text-orange-500">$100-$300/month</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-700 font-light">Lake Access (Lake MV):</span>
                <span className="font-light text-orange-500">Membership req'd</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-xl border border-gray-100">
              <h4 className="font-light text-gray-900 mb-3 text-center">Popular Home Features:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 font-light">
                <div>• Open floor plans</div>
                <div>• Updated kitchens</div>
                <div>• Swimming pools</div>
                <div>• Three-car garages</div>
                <div>• Family rooms</div>
                <div>• Mountain views</div>
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
                <CardTitle className="text-lg font-light text-gray-900">What makes Mission Viejo special for families?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-light">
                  Mission Viejo offers master-planned communities with top-rated schools, extensive 
                  recreational facilities, Lake Mission Viejo access, and a strong family-friendly 
                  atmosphere with organized community events and activities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg font-light text-gray-900">How does Lake Mission Viejo access work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-light">
                  Lake Mission Viejo is a private recreational lake requiring membership. Some homes 
                  include lake rights, while others require separate membership purchase. The lake 
                  offers swimming, boating, fishing, and beachfront activities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg font-light text-gray-900">What are HOA fees like in Mission Viejo?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-light">
                  HOA fees typically range from $100-300/month and cover community amenities, 
                  landscaping, and maintenance of common areas. Many communities offer pools, 
                  parks, and recreational facilities included in HOA dues.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg font-light text-gray-900">Which neighborhoods are best for investment?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-light">
                  Saddleback Valley offers good value with strong rental demand from families. 
                  Lake Mission Viejo properties command premium rents due to lake access. 
                  All areas benefit from excellent schools and low crime rates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-amber-600 to-orange-500 rounded-2xl p-8 text-white">
          <h2 className="text-3xl md:text-4xl font-extralight mb-4">
            Ready to Explore Mission Viejo Real Estate?
          </h2>
          <p className="text-xl font-light mb-6 text-orange-100">
            Get personalized market insights and find your perfect Mission Viejo home
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
            Licensed Orange County Real Estate Professional • DRE #02145678 • Serving all Mission Viejo neighborhoods
          </p>
        </div>
      </div>
    </div>
  );
}