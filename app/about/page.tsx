import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { seoData } from '@/lib/seo';
import Image from 'next/image';

export const metadata: Metadata = {
  title: seoData.About.title,
  description: seoData.About.description,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-lg bg-blue-100">
            <div className="w-full h-full flex items-center justify-center text-blue-600 text-6xl font-bold">
              SC
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Sarah Chen
          </h1>
          <p className="text-xl text-slate-600">
            Your Orange County Home Expert
          </p>
          <p className="text-lg text-blue-600 mt-2">DRE #02145678 | Coastal Realty Group</p>
        </div>

        {/* Story Section */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Your Home. Your Dreams. Your Success.</h2>
            <p className="text-slate-700 mb-4">
              As a dedicated real estate agent serving Orange County, I specialize in helping clients navigate the dynamic residential property market with confidence and expertise. Whether you're a first-time homebuyer, looking to sell your current property, or investing in real estate, I bring deep local market knowledge and personalized service to every transaction.
            </p>
            <p className="text-slate-700 mb-4">
              Your home represents more than just a place to live—it's your sanctuary, your investment, and often your family's future.
            </p>
            <p className="text-slate-700 mb-4">
              From luxury estates in Newport Beach to family homes in Irvine, from investment properties in Costa Mesa to first-time buyer opportunities throughout Orange County, I have the expertise and market insights to help you achieve your real estate goals.
            </p>
            <p className="text-slate-700 mb-4">
              What sets me apart is my commitment to understanding your unique needs and delivering results that exceed your expectations. I don't just help you buy or sell a house—I guide you through one of life's most important financial decisions with transparency, integrity, and expert market knowledge.
            </p>
            <p className="text-slate-700">
              My clients appreciate my proactive communication, thorough market analysis, and the fact that I'm available seven days a week to ensure their real estate journey is smooth and successful. I believe buying or selling a home should be exciting and rewarding, not stressful.
            </p>
          </div>

          {/* Credentials */}
          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Credentials & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Professional Credentials</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• DRE License #02145678</li>
                  <li>• Coastal Realty Group Agent</li>
                  <li>• California Real Estate License</li>
                  <li>• NAR Member (National Association of Realtors)</li>
                  <li>• Orange County Association of Realtors</li>
                  <li>• Continuing Education Current</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Specializations</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• First-Time Homebuyers</li>
                  <li>• Luxury Home Sales</li>
                  <li>• Investment Properties</li>
                  <li>• Property Marketing & Staging</li>
                  <li>• Market Analysis & Pricing Strategy</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose Sarah */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Sarah Chen?</h2>
            <p className="text-slate-700 mb-4">
              Unlike agents who treat real estate as just another transaction, I focus on building lasting 
              relationships and providing exceptional service. My deep knowledge of Orange County neighborhoods, 
              current market trends, and proven negotiation skills ensure you get the best possible outcome.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-sm text-slate-600">Happy Clients</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">7 Days</div>
                <div className="text-sm text-slate-600">Weekly Availability</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-sm text-slate-600">Dedicated Service</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-blue-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-xl mb-6 text-blue-100">
            Let's discuss your real estate goals and start your journey to homeownership or successful sale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                Schedule Free Consultation
              </Button>
            </Link>
            <a href="tel:(949) 555-0123">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                Call (949) 555-0123
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}