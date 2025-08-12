import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Home, CheckCircle, Phone, ArrowRight, Users, TrendingUp, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Home Buying Services Orange County | Real Estate Agent | Sarah Chen',
  description: 'Expert home buying services in Orange County. Professional guidance, market analysis, negotiation expertise. First-time buyer programs available. Call (949) 555-0123.',
  keywords: 'home buying Orange County, real estate agent, first time homebuyer, home purchase assistance, Orange County homes'
};

export default function HomeBuyingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Home className="w-4 h-4 mr-2" />
            Professional Home Buying Services
          </div>
          <h1 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-6">
            Your Dream Home <span className="font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">Awaits</span>
          </h1>
          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto mb-8">
            Expert guidance through every step of your home buying journey in Orange County. 
            From first-time buyers to luxury properties, we make your homeownership dreams reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white px-8 py-3 text-lg font-light shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Start Your Home Search
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
            <CardHeader className="bg-gradient-to-br from-stone-50 to-gray-50 pb-6">
              <Users className="w-8 h-8 text-orange-500 mb-4" />
              <CardTitle className="text-xl font-light text-gray-900">First-Time Buyers</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-700 font-light">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  Down payment assistance programs
                </li>
                <li className="flex items-center text-sm text-gray-700 font-light">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  Credit and financing guidance
                </li>
                <li className="flex items-center text-sm text-gray-700 font-light">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  Step-by-step process walkthrough
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
            <CardHeader className="bg-gradient-to-br from-stone-50 to-gray-50 pb-6">
              <TrendingUp className="w-8 h-8 text-orange-500 mb-4" />
              <CardTitle className="text-xl font-light text-gray-900">Market Analysis</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-700 font-light">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  Comprehensive market reports
                </li>
                <li className="flex items-center text-sm text-gray-700 font-light">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  Neighborhood comparisons
                </li>
                <li className="flex items-center text-sm text-gray-700 font-light">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  Price trend analysis
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
            <CardHeader className="bg-gradient-to-br from-stone-50 to-gray-50 pb-6">
              <Shield className="w-8 h-8 text-orange-500 mb-4" />
              <CardTitle className="text-xl font-light text-gray-900">Expert Negotiation</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-700 font-light">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  Strategic offer preparation
                </li>
                <li className="flex items-center text-sm text-gray-700 font-light">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  Contract terms optimization
                </li>
                <li className="flex items-center text-sm text-gray-700 font-light">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  Closing cost negotiations
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-amber-600 to-orange-500 rounded-2xl p-8 text-white">
          <h2 className="text-3xl md:text-4xl font-extralight mb-4">
            Ready to Buy Your Dream Home?
          </h2>
          <p className="text-xl font-light mb-6 text-orange-100">
            Let's start your home buying journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-orange-500 hover:bg-orange-50 px-8 py-3 text-lg font-light shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          <p className="text-sm text-orange-200 mt-6 font-light">
            Licensed Orange County Real Estate Professional • DRE #02145678
          </p>
        </div>
      </div>
    </div>
  );
}