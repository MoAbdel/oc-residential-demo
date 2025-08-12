import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ValueProposition from '@/components/home/ValueProposition';
import RecentSales from '@/components/home/RecentSales';
import Testimonials from '@/components/home/Testimonials';
import HomeValuationCTA from '@/components/home/HomeValuationCTA';
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      
      <ValueProposition />
      
      <RecentSales />
      
      <Testimonials />
      
      <HomeValuationCTA />

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make Your Real Estate Dreams Reality?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your goals and create a personalized strategy for your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+19495550123">
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (949) 555-0123
              </button>
            </a>
            <Link href="/contact">
              <button className="border border-white text-white hover:bg-white hover:text-blue-800 font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200">
                <Mail className="w-5 h-5 mr-2" />
                Schedule Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}