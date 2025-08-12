import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { MapPin, Home, ShoppingBag, Palette, TrendingUp, Users, Building, Star, Award, Phone, Building2, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Costa Mesa Real Estate Agent | Urban Living & Arts District Homes | Sarah Chen DRE #02145678',
  description: 'Expert Costa Mesa real estate agent specializing in South Coast Metro, Mesa Verde, and Arts District properties. Urban living and diverse housing options. Call (949) 555-0123.',
  keywords: 'Costa Mesa real estate agent, Costa Mesa homes for sale, South Coast Metro real estate, Mesa Verde homes, Arts District properties'
};

export default function CostaMesaRealEstatePage() {
  const costaMesaNeighborhoods = [
    {
      name: 'South Coast Metro',
      avgPrice: '$800K - $2M',
      description: 'Business district near South Coast Plaza with luxury condos and townhomes',
      yearBuilt: '1970s-2020s',
      homeStyles: 'Luxury condos, Modern townhomes'
    },
    {
      name: 'Mesa Verde', 
      avgPrice: '$800K - $1.2M',
      description: 'Established neighborhood with tree-lined streets and family homes',
      yearBuilt: '1960s-1980s',
      homeStyles: 'Single-family ranch, Traditional'
    },
    {
      name: 'Eastside Costa Mesa',
      avgPrice: '$600K - $900K',
      description: 'Diverse area with cultural attractions and growing arts scene',
      yearBuilt: '1950s-1990s',
      homeStyles: 'Craftsman, Mid-century modern'
    },
    {
      name: 'Newport Heights',
      avgPrice: '$900K - $1.5M',
      description: 'Upscale area bordering Newport Beach with custom homes',
      yearBuilt: '1960s-2000s',
      homeStyles: 'Custom homes, Contemporary'
    },
    {
      name: 'Harbor View Hills',
      avgPrice: '$700K - $1.1M',
      description: 'Hillside community with views and newer construction',
      yearBuilt: '1980s-2010s',
      homeStyles: 'Contemporary, Mediterranean'
    },
    {
      name: 'College Park',
      avgPrice: '$600K - $850K',
      description: 'Affordable area near Orange Coast College with starter homes',
      yearBuilt: '1950s-1980s',
      homeStyles: 'Ranch, Traditional tract homes'
    }
  ];

  const realEstateServices = [
    {
      title: 'Urban Living Specialist',
      description: 'Expert guidance on Costa Mesa\'s diverse urban living options from luxury condos to artistic lofts',
      features: ['South Coast Metro expertise', 'Arts District knowledge', 'Mixed-use development insights', 'Urban lifestyle consulting'],
      icon: <Building2 className="w-8 h-8 text-orange-500" />
    },
    {
      title: 'Investment Property Services',
      description: 'Strategic guidance for Costa Mesa real estate investments in growing arts and business districts',
      features: ['Rental market analysis', 'Growth area identification', 'Investment property sourcing', 'Portfolio optimization'],
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />
    },
    {
      title: 'First-Time Buyer Support',
      description: 'Comprehensive support for buyers entering Costa Mesa\'s diverse and accessible housing market',
      features: ['Affordable housing options', 'Down payment assistance', 'Neighborhood guidance', 'Market education'],
      icon: <Star className="w-8 h-8 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 px-4 py-2 rounded-full text-sm font-extralight mb-4">
            🎨 Urban Arts & Culture
          </div>
          <h1 className="text-4xl md:text-5xl font-extralight text-slate-900 mb-6">
            <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent font-light">Costa Mesa</span> Real Estate Agent
          </h1>
          <p className="text-xl font-light text-slate-600 max-w-3xl mx-auto mb-8">
            Specializing in Costa Mesa's vibrant urban living, from South Coast Metro luxury to Arts District creativity. 
            Expert knowledge of diverse housing options and cultural communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white px-8 py-3 text-lg font-light">
                View Costa Mesa Homes
              </Button>
            </Link>
            <a href="tel:(949) 555-0123">
              <Button variant="ghost" className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-light">
                <Phone className="w-5 h-5 mr-2" />
                (949) 555-0123
              </Button>
            </a>
          </div>
        </div>

        {/* Costa Mesa Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="rounded-2xl shadow-lg bg-gradient-to-br from-white to-orange-50">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-1">$950K</h3>
              <p className="text-slate-600 font-extralight">Median Home Price</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-lg bg-gradient-to-br from-white to-orange-50">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-1">#1</h3>
              <p className="text-slate-600 font-extralight">Shopping Destination</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-lg bg-gradient-to-br from-white to-orange-50">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-1">50+</h3>
              <p className="text-slate-600 font-extralight">Art Galleries</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-lg bg-gradient-to-br from-white to-orange-50">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-1">113K+</h3>
              <p className="text-slate-600 font-extralight">Population</p>
            </CardContent>
          </Card>
        </div>

        {/* Real Estate Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-center mb-8">Costa Mesa Real Estate Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {realEstateServices.map((service, index) => (
              <Card key={index} className="rounded-2xl shadow-lg bg-gradient-to-br from-white to-orange-50 border-2 hover:border-orange-300 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    {service.icon}
                    <CardTitle className="text-xl font-light">{service.title}</CardTitle>
                  </div>
                  <p className="text-slate-600 font-extralight">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-slate-700 font-extralight">
                        <div className="w-2 h-2 bg-gradient-to-r from-amber-600 to-orange-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link href="/services">
                    <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 font-light">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Costa Mesa Neighborhoods */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-center mb-8">Costa Mesa Neighborhoods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {costaMesaNeighborhoods.map((neighborhood, index) => (
              <Card key={index} className="rounded-2xl shadow-lg bg-gradient-to-br from-white to-orange-50 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg font-light">
                    <MapPin className="w-5 h-5 text-orange-600 mr-2" />
                    {neighborhood.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 font-extralight">Price Range:</span>
                      <span className="font-light text-orange-600">{neighborhood.avgPrice}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 font-extralight">Year Built:</span>
                      <span className="font-light">{neighborhood.yearBuilt}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 font-extralight">Home Styles:</span>
                      <span className="font-light text-right text-sm">{neighborhood.homeStyles}</span>
                    </div>
                    <p className="text-slate-600 text-sm font-extralight mt-3">{neighborhood.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Costa Mesa Homeowners Choose Mo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why Costa Mesa Homeowners Choose Mo The Broker
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Arts District Expertise</h3>
                  <p className="text-slate-600">
                    Understanding of Costa Mesa's unique blend of business district, arts scene, 
                    and residential communities. HELOC options for art investments and business ventures.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <ShoppingBag className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">South Coast Plaza Proximity</h3>
                  <p className="text-slate-600">
                    Specialized lending for properties near Orange County's premier shopping and 
                    business destination. Understanding of luxury condo and townhome markets.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Palette className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Creative Community Focus</h3>
                  <p className="text-slate-600">
                    Supporting Costa Mesa's vibrant arts community with flexible lending solutions. 
                    Understanding of self-employed artists and creative professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Costa Mesa Market Expertise</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Loan Limits (Conforming):</span>
                <span className="font-bold">$1,089,300</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Jumbo Loan Minimum:</span>
                <span className="font-bold">$1,089,301+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Average HELOC Amount:</span>
                <span className="font-bold">$200K</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Property Tax Rate:</span>
                <span className="font-bold">~0.75%</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg">
              <h4 className="font-bold text-slate-900 mb-2">Popular Costa Mesa Programs:</h4>
              <div className="space-y-1 text-sm text-slate-600">
                <div>• HELOC for home improvements & art investments</div>
                <div>• Conventional loans for first-time buyers</div>
                <div>• Cash-out refi for business opportunities</div>
                <div>• FHA loans for affordable homeownership</div>
              </div>
            </div>
          </div>
        </div>


        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions - Costa Mesa Mortgages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's the average home price in Costa Mesa?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  The median home price in Costa Mesa is approximately $950K, with variations by 
                  neighborhood. South Coast Metro tends to be higher, while College Park and 
                  some Eastside areas offer more affordable options.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do Costa Mesa homes require jumbo loans?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Many Costa Mesa homes fall within conforming loan limits of $1,089,300, 
                  making them eligible for conventional financing. However, luxury properties 
                  near South Coast Plaza may require jumbo loans.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I use a HELOC for art or business investments?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Yes! Many Costa Mesa residents use HELOCs for art investments, gallery spaces, 
                  or starting creative businesses. Home equity can be a flexible funding source 
                  for various investment opportunities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What loan programs work best for first-time buyers?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  FHA loans with 3.5% down and conventional loans with as little as 3% down 
                  are popular in Costa Mesa. We also offer down payment assistance programs 
                  for qualified buyers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Your Costa Mesa Mortgage?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Get personalized rates for your Costa Mesa neighborhood and loan needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                Get My Costa Mesa Rates
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Licensed wholesale mortgage broker with NEXA Mortgage • NMLS #1426884 • Serving all Costa Mesa neighborhoods
          </p>
        </div>
      </div>
    </div>
  );
}