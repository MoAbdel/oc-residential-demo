import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Building, CheckCircle, Phone, ArrowRight, TrendingUp, Calculator, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Investment Properties Orange County | Real Estate Investment | Sarah Chen',
  description: 'Expert investment property services in Orange County. Rental properties, fix & flip, commercial real estate. Cash flow analysis and market insights. Call (949) 555-0123.',
  keywords: 'investment properties Orange County, rental properties, real estate investment, cash flow analysis, commercial real estate, fix and flip'
};

export default function InvestmentPropertiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Building className="w-4 h-4 mr-2" />
            Investment Property Specialist
          </div>
          <h1 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-6">
            Build Wealth Through <span className="font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">Real Estate</span>
          </h1>
          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto mb-8">
            Strategic investment property acquisition in Orange County's most promising markets. 
            From rental properties to fix & flip opportunities, maximize your real estate portfolio returns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white px-8 py-3 text-lg font-light shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Analyze Investment Opportunities
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
              <Calculator className="w-8 h-8 text-orange-500 mb-4" />
              <CardTitle className="text-xl font-light text-gray-900">Cash Flow Analysis</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-700 font-light">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  ROI calculations and projections
                </li>
                <li className="flex items-center text-sm text-gray-700 font-light">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  Operating expense analysis
                </li>
                <li className="flex items-center text-sm text-gray-700 font-light">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  Cap rate and cash-on-cash returns
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
            <CardHeader className="bg-gradient-to-br from-stone-50 to-gray-50 pb-6">
              <TrendingUp className="w-8 h-8 text-orange-500 mb-4" />
              <CardTitle className="text-xl font-light text-gray-900">Market Intelligence</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-700 font-light">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  Emerging market identification
                </li>
                <li className="flex items-center text-sm text-gray-700 font-light">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  Rental demand analysis
                </li>
                <li className="flex items-center text-sm text-gray-700 font-light">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  Appreciation potential assessment
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
            <CardHeader className="bg-gradient-to-br from-stone-50 to-gray-50 pb-6">
              <Shield className="w-8 h-8 text-orange-500 mb-4" />
              <CardTitle className="text-xl font-light text-gray-900">Risk Management</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-700 font-light">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  Due diligence and inspections
                </li>
                <li className="flex items-center text-sm text-gray-700 font-light">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  Property management referrals
                </li>
                <li className="flex items-center text-sm text-gray-700 font-light">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  Exit strategy planning
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Investment Markets */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extralight text-center mb-8 text-gray-900">
            Top Orange County <span className="font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">Investment Markets</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardHeader className="bg-gradient-to-br from-stone-50 to-gray-50">
                <CardTitle className="text-xl font-light text-gray-900">Rental Properties</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-light">Average Cap Rate:</span>
                    <span className="text-orange-500 font-light">4-6%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-light">Rental Yield:</span>
                    <span className="text-orange-500 font-light">5-8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-light">Best Areas:</span>
                    <span className="text-orange-500 font-light">Costa Mesa, Anaheim</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardHeader className="bg-gradient-to-br from-stone-50 to-gray-50">
                <CardTitle className="text-xl font-light text-gray-900">Fix & Flip</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-light">Target Margin:</span>
                    <span className="text-orange-500 font-light">20-30%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-light">Hold Time:</span>
                    <span className="text-orange-500 font-light">6-9 months</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-light">Best Areas:</span>
                    <span className="text-orange-500 font-light">Santa Ana, Garden Grove</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-amber-600 to-orange-500 rounded-2xl p-8 text-white">
          <h2 className="text-3xl md:text-4xl font-extralight mb-4">
            Ready to Build Your Real Estate Portfolio?
          </h2>
          <p className="text-xl font-light mb-6 text-orange-100">
            Let's identify the best investment opportunities for your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-orange-500 hover:bg-orange-50 px-8 py-3 text-lg font-light shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Start Investment Analysis
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          <p className="text-sm text-orange-200 mt-6 font-light">
            Licensed Orange County Real Estate Professional • DRE #02145678 • Investment Specialist
          </p>
        </div>
      </div>
    </div>
  );
}