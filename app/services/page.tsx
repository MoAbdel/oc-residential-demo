import React from 'react';
import type { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Home, TrendingUp, Users, Award, Shield, Star } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Real Estate Services | Sarah Chen - Orange County Residential Specialist',
  description: 'Comprehensive real estate services in Orange County. Home buying, selling, investment properties, and luxury homes. Your trusted residential real estate expert.',
  openGraph: {
    title: 'Real Estate Services | Sarah Chen - Orange County Residential Specialist',
    description: 'Comprehensive real estate services in Orange County. Home buying, selling, investment properties, and luxury homes. Your trusted residential real estate expert.',
    type: 'website',
  },
};

const services = [
  {
    icon: Home,
    title: 'Home Buying Services',
    description: 'Expert guidance through every step of your home purchase journey in Orange County.',
    features: ['Market Analysis', 'Property Search', 'Negotiation', 'Closing Support'],
    link: '/services/home-buying',
  },
  {
    icon: TrendingUp,
    title: 'Home Selling Services',
    description: 'Maximize your home\'s value with strategic marketing and expert pricing.',
    features: ['Market Valuation', 'Professional Marketing', 'Staging Advice', 'Quick Sales'],
    link: '/services/home-selling',
  },
  {
    icon: Users,
    title: 'Investment Properties',
    description: 'Build wealth through Orange County real estate investment opportunities.',
    features: ['Investment Analysis', 'Rental Properties', 'Fix & Flip', 'Portfolio Growth'],
    link: '/services/investment-properties',
  },
  {
    icon: Award,
    title: 'First-Time Buyer Program',
    description: 'Special support and guidance for first-time homebuyers in Orange County.',
    features: ['Education & Guidance', 'Down Payment Assistance', 'Lender Connections', 'Step-by-Step Support'],
    link: '/services/first-time-buyer',
  },
  {
    icon: Shield,
    title: 'Luxury Home Specialist',
    description: 'Exclusive service for luxury properties and high-end real estate transactions.',
    features: ['Luxury Market Expertise', 'Discreet Marketing', 'High-Net-Worth Clients', 'Premium Service'],
    link: '/services/luxury-homes',
  },
  {
    icon: Star,
    title: 'Relocation Services',
    description: 'Complete relocation support for moving to or from Orange County.',
    features: ['Area Orientation', 'School Information', 'Community Resources', 'Moving Coordination'],
    link: '/services/relocation',
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect text-amber-600 text-sm font-light mb-4">
              <Award className="w-4 h-4 mr-2" />
              Professional Real Estate Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-6 leading-tight">
              Comprehensive
              <span className="block font-light bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Real Estate Services
              </span>
              <span className="block text-3xl md:text-4xl mt-2">in Orange County</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 font-light max-w-4xl mx-auto leading-relaxed">
              From first-time buyers to luxury estates, Sarah Chen provides expert real estate services 
              tailored to your unique needs in Orange County's competitive market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white font-light px-8 py-4 text-lg transition-all duration-300 shadow-xl hover:shadow-2xl">
                  Start Your Journey
                </Button>
              </Link>
              <Link href="tel:+19495550123">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-gray-900 font-light px-8 py-4 text-lg transition-all duration-300 backdrop-blur-sm">
                  Call (949) 555-0123
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-6">
              Expert
              <span className="block font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                Real Estate Services
              </span>
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Whether you're buying, selling, or investing, Sarah Chen provides personalized service 
              and market expertise for every real estate need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 font-light mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm font-light text-gray-700">
                        <div className="w-2 h-2 bg-gradient-to-r from-amber-600 to-orange-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Link href={service.link}>
                    <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white font-light py-3 rounded-xl text-base transition-all duration-300 shadow-lg hover:shadow-xl">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Sarah */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-6">
              Why Choose
              <span className="block font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                Sarah Chen?
              </span>
            </h2>
            <p className="text-xl font-light text-gray-600">
              Experience, expertise, and dedication to your real estate success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-light text-amber-600">5+</span>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-3">Years Experience</h3>
              <p className="text-gray-600 font-light">Proven track record in Orange County real estate</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-light text-amber-600">200+</span>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-3">Happy Clients</h3>
              <p className="text-gray-600 font-light">Successful transactions and satisfied customers</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-light text-amber-600">24/7</span>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-3">Client Support</h3>
              <p className="text-gray-600 font-light">Always available for your real estate needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extralight mb-6 leading-tight">
            Ready to Start Your
            <span className="block font-light bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Real Estate Journey?
            </span>
          </h2>
          <p className="text-xl mb-8 text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
            Let Sarah Chen guide you through Orange County's real estate market with expert advice and personalized service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white font-light px-8 py-4 text-lg transition-all duration-300 shadow-xl hover:shadow-2xl">
                Get Started Today
              </Button>
            </Link>
            <Link href="tel:+19495550123">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-gray-900 font-light px-8 py-4 text-lg transition-all duration-300 backdrop-blur-sm">
                Call (949) 555-0123
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}