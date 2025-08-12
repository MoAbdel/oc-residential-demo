"use client";

import React from "react";
import Link from "next/link";
import { Phone, ArrowDown, Star, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop"
          alt="Luxury Home Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-amber-400 text-sm font-light">
            <Award className="w-4 h-4 mr-2" />
            Orange County's #1 Luxury Agent 2024
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extralight text-white leading-tight">
            Exceptional
            <span className="block font-light bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Real Estate
            </span>
            <span className="block text-4xl md:text-5xl mt-2">Experience</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
            Curating extraordinary properties and delivering 
            <span className="text-amber-400"> personalized service</span> that exceeds expectations.
          </p>
          
          {/* Stats Row */}
          <div className="flex justify-center items-center space-x-12 py-8">
            <div className="text-center">
              <div className="text-3xl font-light text-white">$150M+</div>
              <div className="text-sm text-white/70 font-light mt-1">Sales Volume</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-light text-white">250+</div>
              <div className="text-sm text-white/70 font-light mt-1">Homes Sold</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-light text-white">5.0</div>
              <div className="text-sm text-white/70 font-light mt-1">
                <div className="flex items-center justify-center">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-amber-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+19495550123">
              <button className="bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white font-light px-8 py-4 rounded-xl text-lg transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                Call (949) 555-0123
              </button>
            </a>
            
            <Link href="/contact">
              <button className="border border-white/30 text-white hover:bg-white hover:text-gray-900 font-light px-8 py-4 rounded-xl text-lg transition-all duration-300 backdrop-blur-sm">
                Schedule Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/70" />
        </div>
      </div>
    </section>
  );
}