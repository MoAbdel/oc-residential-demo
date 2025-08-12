import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Star, Award, Camera, Users, TrendingUp, Home, Phone, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Luxury Homes Real Estate Agent Orange County | Sarah Chen | Premium Properties',
  description: 'Orange County luxury real estate specialist. Expert in multi-million dollar homes, estates, and premium properties. Professional luxury home marketing and negotiation. Call (949) 555-0123.',
  keywords: 'luxury real estate Orange County, luxury homes agent, million dollar homes, estate properties, luxury real estate specialist, premium homes Orange County'
};

export default function LuxuryHomesPage() {
  const luxuryServices = [
    {
      title: 'Premium Property Marketing',
      description: 'Sophisticated marketing campaigns designed for high-end properties',
      features: ['Professional photography & videography', 'Virtual staging & 3D tours', 'Luxury lifestyle brochures', 'Targeted affluent buyer network'],
      icon: <Camera className="w-8 h-8 text-orange-500" />
    },
    {
      title: 'Exclusive Buyer Network',
      description: 'Access to qualified luxury buyers and off-market opportunities',
      features: ['Pre-qualified high-net-worth buyers', 'International buyer connections', 'Off-market property access', 'Discreet transaction handling'],
      icon: <Users className="w-8 h-8 text-orange-500" />
    },
    {
      title: 'Luxury Market Analysis',
      description: 'Comprehensive market intelligence for premium properties',
      features: ['Comparable luxury sales analysis', 'Market timing optimization', 'Investment potential assessment', 'Appreciation trend forecasting'],
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />
    }
  ];

  const luxuryMarkets = [
    {
      area: 'Newport Beach',
      priceRange: '$3M - $20M+',
      specialty: 'Waterfront Estates',
      highlights: ['Ocean views', 'Private docks', 'Luxury amenities']
    },
    {
      area: 'Laguna Beach',
      priceRange: '$2M - $15M+',
      specialty: 'Coastal Luxury',
      highlights: ['Artistic community', 'Ocean panoramas', 'Unique architecture']
    },
    {
      area: 'Irvine',
      priceRange: '$1.5M - $5M+',
      specialty: 'Modern Luxury',
      highlights: ['Master-planned', 'New construction', 'Top schools']
    },
    {
      area: 'Mission Viejo',
      priceRange: '$1M - $3M+',
      specialty: 'Family Luxury',
      highlights: ['Gated communities', 'Golf course homes', 'Resort amenities']
    }
  ];

  const luxuryFeatures = [
    'Smart home technology integration',
    'Premium finishes and materials',
    'Gourmet chef kitchens',
    'Resort-style outdoor spaces',
    'Wine cellars and entertainment rooms',
    'Multi-car garages and workshops',
    'Guest houses and ADUs',
    'Infinity pools and spas',
    'Home theaters and gyms',
    'Sustainable luxury features'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1920&h=1080&fit=crop"
            alt="Luxury Home Exterior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect text-orange-400 text-sm font-light">
              <Sparkles className="w-4 h-4 mr-2" />
              Luxury Real Estate Specialist
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extralight text-white leading-tight">
              Exceptional
              <span className="block font-light bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Luxury Homes
              </span>
              <span className="block text-4xl md:text-5xl mt-2 font-extralight">in Orange County</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
              Curating extraordinary properties and delivering 
              <span className="text-orange-400"> personalized luxury service</span> that exceeds expectations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white font-light px-8 py-4 rounded-xl text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                  View Luxury Listings
                </Button>
              </Link>
              <a href="tel:(949) 555-0123">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-gray-900 font-light px-8 py-4 rounded-xl text-lg transition-all duration-300 backdrop-blur-sm">
                  <Phone className="w-4 h-4 mr-2" />
                  Call (949) 555-0123
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Luxury Services */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extralight text-center mb-8 text-gray-900">
            Luxury Real Estate <span className="font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {luxuryServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-stone-50 to-gray-50 pb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    {service.icon}
                    <CardTitle className="text-xl font-light text-gray-900">{service.title}</CardTitle>
                  </div>
                  <p className="text-gray-600 font-light">{service.description}</p>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-700 font-light">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link href="/contact">
                    <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white font-light">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Luxury Markets */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extralight text-center mb-8 text-gray-900">
            Orange County <span className="font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">Luxury Markets</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {luxuryMarkets.map((market, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-stone-50 to-gray-50">
                  <CardTitle className="text-xl font-light text-gray-900">{market.area}</CardTitle>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-orange-500 font-light">{market.priceRange}</span>
                    <span className="text-sm text-gray-600 font-light">{market.specialty}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-2">
                    {market.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600 font-light">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Sarah for Luxury */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-6">
              Why Choose Sarah for 
              <span className="block font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                Luxury Real Estate
              </span>
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4 mt-1">
                  <Award className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-gray-900 mb-2">Proven Luxury Track Record</h3>
                  <p className="text-gray-600 font-light">
                    Extensive experience with multi-million dollar transactions and a deep understanding 
                    of the luxury market dynamics in Orange County.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 mt-1">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-gray-900 mb-2">Exclusive Client Network</h3>
                  <p className="text-gray-600 font-light">
                    Access to qualified high-net-worth buyers and sellers, plus connections 
                    with luxury service providers for seamless transactions.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 mt-1">
                  <Camera className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-gray-900 mb-2">Premium Marketing Approach</h3>
                  <p className="text-gray-600 font-light">
                    Professional photography, virtual tours, luxury brochures, and targeted 
                    marketing to showcase your property's finest features.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-stone-50 to-gray-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-light text-gray-900 mb-6 text-center">Luxury Home Features</h3>
            <div className="grid grid-cols-1 gap-3">
              {luxuryFeatures.map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-gray-700 font-light py-1">
                  <Star className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-white rounded-xl border border-gray-100 text-center">
              <h4 className="font-light text-gray-900 mb-2">Average Sale Price</h4>
              <div className="text-2xl font-light text-orange-500">$2.8M</div>
              <p className="text-sm text-gray-600 font-light mt-1">Luxury homes sold by Sarah</p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extralight text-center mb-12 text-gray-900">
            The Luxury Real Estate <span className="font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-light text-orange-600">1</span>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Luxury Consultation</h3>
              <p className="text-gray-600 font-light">
                Comprehensive assessment of your luxury property goals, timeline, and unique requirements
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-light text-orange-600">2</span>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Strategic Marketing</h3>
              <p className="text-gray-600 font-light">
                Premium marketing campaign with professional media, luxury staging, and targeted buyer outreach
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-light text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Expert Negotiation</h3>
              <p className="text-gray-600 font-light">
                Skilled negotiation and transaction management to secure the best terms for your luxury property
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-amber-600 to-orange-500 rounded-2xl p-8 text-white">
          <h2 className="text-3xl md:text-4xl font-extralight mb-4">
            Ready to Experience Luxury Real Estate Excellence?
          </h2>
          <p className="text-xl font-light mb-6 text-orange-100">
            Let's discuss your luxury property goals and create a personalized strategy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-orange-500 hover:bg-orange-50 px-8 py-3 text-lg font-light shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Schedule Luxury Consultation
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
            Licensed Orange County Real Estate Professional • DRE #02145678 • Luxury Property Specialist
          </p>
        </div>
      </div>
    </div>
  );
}