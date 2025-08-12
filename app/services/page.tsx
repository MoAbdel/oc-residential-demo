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
    color: 'blue'
  },
  {
    icon: TrendingUp,
    title: 'Home Selling Services',
    description: 'Maximize your home\'s value with strategic marketing and expert pricing.',
    features: ['Market Valuation', 'Professional Marketing', 'Staging Advice', 'Quick Sales'],
    link: '/services/home-selling',
    color: 'green'
  },
  {
    icon: Users,
    title: 'Investment Properties',
    description: 'Build wealth through Orange County real estate investment opportunities.',
    features: ['Investment Analysis', 'Rental Properties', 'Fix & Flip', 'Portfolio Growth'],
    link: '/services/investment-properties',
    color: 'purple'
  },
  {
    icon: Award,
    title: 'First-Time Buyer Program',
    description: 'Special support and guidance for first-time homebuyers in Orange County.',
    features: ['Education & Guidance', 'Down Payment Assistance', 'Lender Connections', 'Step-by-Step Support'],
    link: '/services/first-time-buyer',
    color: 'orange'
  },
  {
    icon: Shield,
    title: 'Luxury Home Specialist',
    description: 'Exclusive service for luxury properties and high-end real estate transactions.',
    features: ['Luxury Market Expertise', 'Discreet Marketing', 'High-Net-Worth Clients', 'Premium Service'],
    link: '/services/luxury-homes',
    color: 'indigo'
  },
  {
    icon: Star,
    title: 'Relocation Services',
    description: 'Complete relocation support for moving to or from Orange County.',
    features: ['Area Orientation', 'School Information', 'Community Resources', 'Moving Coordination'],
    link: '/services/relocation',
    color: 'pink'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-white/20 text-white mb-4 border-white/30">
              Professional Real Estate Services
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Comprehensive Real Estate Services in Orange County
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              From first-time buyers to luxury estates, Sarah Chen provides expert real estate services 
              tailored to your unique needs in Orange County's competitive market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                  Start Your Journey
                </Button>
              </Link>
              <Link href="tel:+19495550123">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                  Call (949) 555-0123
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Expert Real Estate Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Whether you're buying, selling, or investing, Sarah Chen provides personalized service 
              and market expertise for every real estate need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-br from-${service.color}-100 to-${service.color}-200 rounded-lg flex items-center justify-center mb-4`}>
                    <service.icon className={`w-6 h-6 text-${service.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-700">
                        <div className={`w-2 h-2 bg-${service.color}-500 rounded-full mr-2`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Link href={service.link}>
                    <Button className={`w-full bg-${service.color}-600 hover:bg-${service.color}-700 text-white`}>
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Sarah */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Sarah Chen?
            </h2>
            <p className="text-xl text-slate-600">
              Experience, expertise, and dedication to your real estate success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">5+</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Years Experience</h3>
              <p className="text-slate-600">Proven track record in Orange County real estate</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">200+</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Happy Clients</h3>
              <p className="text-slate-600">Successful transactions and satisfied customers</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">24/7</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Client Support</h3>
              <p className="text-slate-600">Always available for your real estate needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Real Estate Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let Sarah Chen guide you through Orange County's real estate market with expert advice and personalized service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                Get Started Today
              </Button>
            </Link>
            <Link href="tel:+19495550123">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                Call (949) 555-0123
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}