import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Heart, CheckCircle, Phone, ArrowRight, GraduationCap, Shield, Calculator } from 'lucide-react';

export const metadata: Metadata = {
  title: 'First-Time Home Buyer Program Orange County | Real Estate Agent | Sarah Chen',
  description: 'First-time home buyer specialist in Orange County. Down payment assistance, FHA loans, buyer education. Make homeownership a reality. Call (949) 555-0123.',
  keywords: 'first time home buyer Orange County, FHA loans, down payment assistance, home buyer education, first time buyer programs'
};

export default function FirstTimeBuyerPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Heart className="w-4 h-4 mr-2" />
            First-Time Buyer Specialist
          </div>
          <h1 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-6">
            Your First Home <span className="font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">Journey Starts Here</span>
          </h1>
          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto mb-8">
            Navigate the home buying process with confidence. From pre-approval to closing, 
            we'll guide you through every step of purchasing your first home in Orange County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white px-8 py-3 text-lg font-light shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Start Your Home Journey
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
              <GraduationCap className="w-8 h-8 text-orange-500 mb-4" />
              <CardTitle className="text-xl font-light text-gray-900">Buyer Education</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-700 font-light">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  Home buying process walkthrough
                </li>
                <li className="flex items-center text-sm text-gray-700 font-light">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  Market conditions explained
                </li>
                <li className="flex items-center text-sm text-gray-700 font-light">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  Timeline and expectations
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
            <CardHeader className="bg-gradient-to-br from-stone-50 to-gray-50 pb-6">
              <Calculator className="w-8 h-8 text-orange-500 mb-4" />
              <CardTitle className="text-xl font-light text-gray-900">Financial Guidance</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-700 font-light">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  Down payment assistance programs
                </li>
                <li className="flex items-center text-sm text-gray-700 font-light">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  FHA and VA loan options
                </li>
                <li className="flex items-center text-sm text-gray-700 font-light">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  Budget planning and affordability
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
            <CardHeader className="bg-gradient-to-br from-stone-50 to-gray-50 pb-6">
              <Shield className="w-8 h-8 text-orange-500 mb-4" />
              <CardTitle className="text-xl font-light text-gray-900">Full Support</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-700 font-light">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  Lender and inspector referrals
                </li>
                <li className="flex items-center text-sm text-gray-700 font-light">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  Negotiation and contract support
                </li>
                <li className="flex items-center text-sm text-gray-700 font-light">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  Closing day assistance
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* First-Time Buyer Programs */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extralight text-center mb-8 text-gray-900">
            Available <span className="font-light bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">First-Time Buyer Programs</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardHeader className="bg-gradient-to-br from-stone-50 to-gray-50">
                <CardTitle className="text-xl font-light text-gray-900">FHA Loans</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-light">Down Payment:</span>
                    <span className="text-orange-500 font-light">As low as 3.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-light">Credit Score:</span>
                    <span className="text-orange-500 font-light">580+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-light">Loan Limit (2024):</span>
                    <span className="text-orange-500 font-light">$766,550</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardHeader className="bg-gradient-to-br from-stone-50 to-gray-50">
                <CardTitle className="text-xl font-light text-gray-900">Conventional Loans</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-light">Down Payment:</span>
                    <span className="text-orange-500 font-light">As low as 3%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-light">Credit Score:</span>
                    <span className="text-orange-500 font-light">620+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-light">PMI Removal:</span>
                    <span className="text-orange-500 font-light">At 20% equity</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-amber-600 to-orange-500 rounded-2xl p-8 text-white">
          <h2 className="text-3xl md:text-4xl font-extralight mb-4">
            Ready to Buy Your First Home?
          </h2>
          <p className="text-xl font-light mb-6 text-orange-100">
            Let's make homeownership a reality with the right guidance and support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-orange-500 hover:bg-orange-50 px-8 py-3 text-lg font-light shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Schedule First-Time Buyer Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          <p className="text-sm text-orange-200 mt-6 font-light">
            Licensed Orange County Real Estate Professional • DRE #02145678 • First-Time Buyer Specialist
          </p>
        </div>
      </div>
    </div>
  );
}