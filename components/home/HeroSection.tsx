'use client';

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { TrendingUp, Home, Phone, ArrowRight, Users, Award, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const [marketStats, setMarketStats] = useState({
    avgHomePrice: "$1,250,000",
    monthsSupply: "2.1",
    soldLastMonth: "547"
  });
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-slate-900">Orange County Real Estate Agent – </span>
                <span className="text-blue-600">Your Home Expert</span>
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                I'm Sarah Chen, a dedicated real estate agent with Coastal Realty Group, proudly serving Orange County. Whether you're buying your first home, selling your current property, or investing in real estate, I provide personalized service and expert market knowledge to help you achieve your goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <Home className="w-5 h-5 mr-2" />
                  Find Your Home
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              
              <a href="tel:(949) 555-0123">
                <Button size="lg" variant="ghost" className="border border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  (949) 555-0123
                </Button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-12 pt-4 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 flex items-center">
                  <Users className="w-8 h-8 mr-2 text-blue-600"/>
                  500+
                </div>
                <div className="text-sm text-slate-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 flex items-center">
                  <TrendingUp className="w-8 h-8 mr-2 text-green-600"/>
                  Expert
                </div>
                <div className="text-sm text-slate-600">Market Knowledge</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 flex items-center">
                  <Award className="w-8 h-8 mr-2 text-blue-600"/>
                  Top
                </div>
                <div className="text-sm text-slate-600">Performance</div>
              </div>
            </div>
          </div>

          {/* Market Stats Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">Market Snapshot</h3>
                  <Badge className="bg-blue-100 text-blue-600 px-3 py-1">Orange County</Badge>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-slate-700">Avg Home Price</span>
                    <span className="text-2xl font-bold text-blue-600">{marketStats.avgHomePrice}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-slate-700">Months Supply</span>
                    <span className="text-2xl font-bold text-green-600">{marketStats.monthsSupply}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-slate-700">Sold Last Month</span>
                    <span className="text-2xl font-bold text-green-600">{marketStats.soldLastMonth}</span>
                  </div>
                </div>
                
                <p className="text-sm text-slate-500 text-center">
                  *Data updated monthly from OC market reports
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}