import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { MapPin, Home, TrendingUp, Users, Star, Phone, Mail, Award, Anchor, Building2, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Newport Beach Real Estate Agent | Luxury Waterfront Homes | Sarah Chen DRE #02145678',
  description: 'Expert Newport Beach real estate agent specializing in luxury waterfront properties, Balboa Island estates, and Harbor area homes. Professional buying & selling services. Call (949) 555-0123.',
  keywords: 'Newport Beach real estate agent, Newport Beach luxury homes, Balboa Island real estate, Newport Harbor homes, Corona del Mar properties'
};

export default function NewportBeachRealEstatePage() {
  const newportNeighborhoods = [
    {
      name: 'Balboa Peninsula',
      avgPrice: '$2.5M - $8M',
      description: 'Beachfront living with luxury condos and vacation rentals',
      yearBuilt: '1920s-2020s',
      homeStyles: 'Beachfront condos, Beach cottages'
    },
    {
      name: 'Balboa Island', 
      avgPrice: '$4M - $15M',
      description: 'Exclusive island community with waterfront estates',
      yearBuilt: '1920s-2010s',
      homeStyles: 'Waterfront estates, Bayfront homes'
    },
    {
      name: 'Newport Harbor',
      avgPrice: '$1.8M - $6M',
      description: 'Marina living with luxury high-rise condos',
      yearBuilt: '1970s-2020s',
      homeStyles: 'High-rise condos, Marina townhomes'
    },
    {
      name: 'Corona del Mar',
      avgPrice: '$3.5M - $20M',
      description: 'Prestigious coastal neighborhood with ocean views',
      yearBuilt: '1920s-2020s',
      homeStyles: 'Ocean view estates, Luxury custom homes'
    },
    {
      name: 'Newport Coast',
      avgPrice: '$4M - $25M',
      description: 'Gated communities with custom luxury homes',
      yearBuilt: '1990s-2020s',
      homeStyles: 'Custom estates, Golf course homes'
    },
    {
      name: 'Fashion Island Area',
      avgPrice: '$2M - $8M',
      description: 'Urban luxury with shopping and dining nearby',
      yearBuilt: '1960s-2020s',
      homeStyles: 'Luxury condos, Modern townhomes'
    }
  ];

  const realEstateServices = [
    {
      title: 'Luxury Waterfront Properties',
      description: 'Specialized expertise in Newport Beach\'s most prestigious waterfront estates and harbor properties',
      features: ['Waterfront estates valuation', 'Private dock assessments', 'Luxury market analysis', 'Exclusive off-market listings'],
      icon: <Anchor className="w-8 h-8 text-orange-500" />
    },
    {
      title: 'Investment Property Services',
      description: 'Strategic guidance for luxury real estate investments and portfolio optimization',
      features: ['Rental income analysis', 'Market appreciation trends', 'Investment property sourcing', 'Portfolio management'],
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />
    },
    {
      title: 'Concierge Real Estate',
      description: 'White-glove service including staging, marketing, and transaction coordination',
      features: ['Professional staging services', 'Luxury marketing campaigns', 'Private showings', 'Closing coordination'],
      icon: <Star className="w-8 h-8 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 px-4 py-2 rounded-full text-sm font-extralight mb-4">
            🏖️ Luxury Coastal Living
          </div>
          <h1 className="text-4xl md:text-5xl font-extralight text-slate-900 mb-6">
            <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent font-light">Newport Beach</span> Real Estate Agent
          </h1>
          <p className="text-xl font-light text-slate-600 max-w-3xl mx-auto mb-8">
            Specializing in luxury waterfront properties, exclusive estates, and prestigious Newport Beach communities. 
            Expert knowledge of local market conditions and luxury home values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white px-8 py-3 text-lg font-light">
                View Newport Beach Homes
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

        {/* Newport Beach Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="rounded-2xl shadow-lg bg-gradient-to-br from-white to-orange-50">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-1">$3.2M</h3>
              <p className="text-slate-600 font-extralight">Median Home Price</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-lg bg-gradient-to-br from-white to-orange-50">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Anchor className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-1">40%</h3>
              <p className="text-slate-600 font-extralight">Waterfront Properties</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-lg bg-gradient-to-br from-white to-orange-50">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-1">45</h3>
              <p className="text-slate-600 font-extralight">Days on Market</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-lg bg-gradient-to-br from-white to-orange-50">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-1">85K</h3>
              <p className="text-slate-600 font-extralight">Population</p>
            </CardContent>
          </Card>
        </div>

        {/* Real Estate Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-center mb-8">Newport Beach Real Estate Services</h2>
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

        {/* Newport Beach Neighborhoods */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-center mb-8">Newport Beach Neighborhoods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newportNeighborhoods.map((neighborhood, index) => (
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

        {/* Why Choose Sarah for Newport Beach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-light text-slate-900 mb-6">
              Why Choose Sarah Chen for Newport Beach Real Estate
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Star className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-slate-900 mb-2">Luxury Market Expertise</h3>
                  <p className="text-slate-600 font-extralight">
                    Extensive experience with high-value Newport Beach properties, waterfront estates, and complex luxury transactions. 
                    Deep understanding of coastal property values and market dynamics.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Anchor className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-slate-900 mb-2">Waterfront Property Specialist</h3>
                  <p className="text-slate-600 font-extralight">
                    Specialized knowledge of marina properties, dock rights, HOA regulations, and waterfront lifestyle requirements. 
                    Exclusive access to off-market waterfront listings.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-slate-900 mb-2">Concierge-Level Service</h3>
                  <p className="text-slate-600 font-extralight">
                    White-glove service including professional staging, luxury marketing, private showings, and coordinated closings. 
                    Service that matches your luxury lifestyle expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="rounded-2xl shadow-lg bg-gradient-to-br from-orange-50 to-amber-50 p-8">
            <h3 className="text-2xl font-light text-slate-900 mb-4">Newport Beach Market Insights</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-700 font-extralight">Median Price per Sq Ft:</span>
                <span className="font-light">$1,400-$2,200</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700 font-extralight">Waterfront Premium:</span>
                <span className="font-light">$5M-$50M+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700 font-extralight">Investment Properties:</span>
                <span className="font-light">25% of sales</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700 font-extralight">Cash Purchases:</span>
                <span className="font-light text-orange-600">40% of sales</span>
              </div>
            </div>
            <Card className="mt-6 rounded-xl shadow-md bg-white p-4">
              <h4 className="font-light text-slate-900 mb-2">Sarah's Newport Beach Specialties:</h4>
              <div className="space-y-1 text-sm text-slate-600 font-extralight">
                <div>• Waterfront estate sales $5M+</div>
                <div>• Private island properties</div>
                <div>• Luxury condo developments</div>
                <div>• Investment property portfolio</div>
              </div>
            </Card>
          </Card>
        </div>

        {/* Market Insights Sidebar */}
        <Card className="rounded-2xl shadow-lg bg-gradient-to-br from-white to-orange-50 p-8 mb-16">
          <h3 className="text-2xl font-light text-slate-900 mb-6 text-center">Newport Beach Real Estate Market Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-lg font-light text-slate-900 mb-2">Market Appreciation</h4>
              <p className="text-3xl font-light text-orange-600 mb-2">6-8%</p>
              <p className="text-sm text-slate-600 font-extralight">Annual average over 10 years</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-lg font-light text-slate-900 mb-2">New Construction</h4>
              <p className="text-3xl font-light text-orange-600 mb-2">Limited</p>
              <p className="text-sm text-slate-600 font-extralight">Coastal development restrictions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-lg font-light text-slate-900 mb-2">Luxury Demand</h4>
              <p className="text-3xl font-light text-orange-600 mb-2">High</p>
              <p className="text-sm text-slate-600 font-extralight">Consistent buyer interest</p>
            </div>
          </div>
        </Card>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-center mb-8">
            Frequently Asked Questions - Newport Beach Real Estate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="rounded-2xl shadow-lg bg-gradient-to-br from-white to-orange-50">
              <CardHeader>
                <CardTitle className="text-lg font-light">What makes Newport Beach properties so valuable?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 font-extralight">
                  Newport Beach's premium waterfront location, limited inventory, exclusive communities, 
                  and lifestyle amenities including private beaches, marinas, and luxury shopping create 
                  exceptional property values and strong appreciation.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg bg-gradient-to-br from-white to-orange-50">
              <CardHeader>
                <CardTitle className="text-lg font-light">Are there investment opportunities in Newport Beach?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 font-extralight">
                  Yes! Vacation rentals, luxury condos, and waterfront properties offer strong rental yields. 
                  The market also provides excellent long-term appreciation potential due to limited supply 
                  and consistent high-end demand.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg bg-gradient-to-br from-white to-orange-50">
              <CardHeader>
                <CardTitle className="text-lg font-light">What should I know about waterfront properties?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 font-extralight">
                  Waterfront properties require specialized knowledge of dock rights, HOA regulations, 
                  flood zones, and marina rules. I provide expert guidance on these complex considerations 
                  to ensure smooth transactions.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg bg-gradient-to-br from-white to-orange-50">
              <CardHeader>
                <CardTitle className="text-lg font-light">How is the luxury market performing?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 font-extralight">
                  The Newport Beach luxury market remains strong with consistent demand from high-net-worth 
                  buyers. Properties over $5M typically see good activity, especially those with water views 
                  or unique coastal features.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>


        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-amber-600 to-orange-500 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-light mb-4">
            Ready to Explore Newport Beach Real Estate?
          </h2>
          <p className="text-xl mb-6 text-orange-100 font-extralight">
            Get expert guidance and exclusive access to Newport Beach luxury properties
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-light">
                Schedule Newport Beach Consultation
              </Button>
            </Link>
            <a href="tel:(949) 555-0123">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg font-light">
                <Phone className="w-5 h-5 mr-2" />
                Call (949) 555-0123
              </Button>
            </a>
          </div>
          <p className="text-sm text-orange-200 mt-4 font-extralight">
            Sarah Chen • DRE #02145678 • Newport Beach luxury real estate specialist
          </p>
        </div>
      </div>
    </div>
  );
}