'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Calculator, FileText, Phone, Menu, X, User, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { createPageUrl } from '@/lib/utils';
import Image from 'next/image';

const realEstateServicesDropdown = [
  { title: 'All Services', url: '/services' },
  { title: 'Home Buying Services', url: '/services/home-buying' },
  { title: 'Home Selling Services', url: '/services/home-selling' },
  { title: 'Investment Properties', url: '/services/investment-properties' },
  { title: 'First-Time Buyer Program', url: '/services/first-time-buyer' },
  { title: 'Luxury Home Specialist', url: '/services/luxury-homes' }
];

const serviceAreasDropdown = [
  { title: 'All Service Areas', url: '/areas' },
  { title: 'Irvine Real Estate', url: '/areas/irvine-real-estate' },
  { title: 'Mission Viejo Real Estate', url: '/areas/mission-viejo-real-estate' },
  { title: 'Anaheim Real Estate', url: '/areas/anaheim-real-estate' },
  { title: 'Newport Beach Real Estate', url: '/areas/newport-beach-real-estate' },
  { title: 'Costa Mesa Real Estate', url: '/areas/costa-mesa-real-estate' },
  { title: 'Huntington Beach Real Estate', url: '/areas/huntington-beach-real-estate' },
  { title: 'Santa Ana Real Estate', url: '/areas/santa-ana-real-estate' }
];

const navigationItems = [
  {
    title: 'Home',
    page: 'Home',
    url: createPageUrl('Home'),
    icon: Home,
  },
  {
    title: 'Property Calculator',
    page: 'Calculator',
    url: createPageUrl('Calculator'),
    icon: Calculator,
  },
  {
    title: 'Real Estate Services',
    page: 'Services',
    url: createPageUrl('Services'),
    icon: FileText,
    hasDropdown: true,
    dropdownItems: realEstateServicesDropdown
  },
  {
    title: 'Service Areas',
    page: 'Areas',
    url: createPageUrl('Areas'),
    icon: Home,
    hasDropdown: true,
    dropdownItems: serviceAreasDropdown
  },
  {
    title: 'About',
    page: 'About',
    url: createPageUrl('About'),
    icon: User,
  },
  {
    title: 'Contact',
    page: 'Contact',
    url: createPageUrl('Contact'),
    icon: Phone,
  },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);

  return (
    <header className="bg-transparent backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28 md:h-40 py-2 md:py-4">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl md:text-3xl font-bold text-white">
              Sarah Chen
              <div className="text-sm md:text-base font-normal text-white/80">
                Orange County Real Estate
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.title} className="relative">
                {item.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => {
                      if (item.page === 'Services') {
                        setProgramsDropdownOpen(true);
                      } else if (item.page === 'Areas') {
                        setAreasDropdownOpen(true);
                      }
                    }}
                    onMouseLeave={() => {
                      if (item.page === 'Services') {
                        setProgramsDropdownOpen(false);
                      } else if (item.page === 'Areas') {
                        setAreasDropdownOpen(false);
                      }
                    }}
                  >
                    <button
                      className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                        (item.page === 'Services' && pathname.startsWith('/services')) ||
                        (item.page === 'Areas' && pathname.startsWith('/areas'))
                          ? 'text-orange-500 bg-orange-50/20 backdrop-blur-sm'
                          : 'text-white/90 hover:text-orange-400 hover:bg-white/10 backdrop-blur-sm'
                      }`}
                    >
                      {item.title}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        (item.page === 'Services' && programsDropdownOpen) ||
                        (item.page === 'Areas' && areasDropdownOpen) ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {((item.page === 'Services' && programsDropdownOpen) ||
                      (item.page === 'Areas' && areasDropdownOpen)) && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
                        {item.dropdownItems?.map((dropdownItem, index) => (
                          <Link
                            key={index}
                            href={dropdownItem.url}
                            className="block px-4 py-2 text-sm text-slate-700 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-150"
                          >
                            {dropdownItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.url}
                    className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      pathname === item.url
                        ? 'text-orange-500 bg-orange-50/20 backdrop-blur-sm'
                        : 'text-white/90 hover:text-orange-400 hover:bg-white/10 backdrop-blur-sm'
                    }`}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:(949) 555-0123" className="text-white font-medium hover:text-orange-400">
              (949) 555-0123
            </a>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white px-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Contact Me
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-sm border-t border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <div key={item.title}>
                {item.hasDropdown ? (
                  <div>
                    <Link
                      href={item.url}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        (item.page === 'Services' && pathname.startsWith('/services')) ||
                        (item.page === 'Areas' && pathname.startsWith('/areas'))
                          ? 'text-orange-500 bg-orange-50'
                          : 'text-slate-700 hover:text-orange-500 hover:bg-orange-50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                    {/* Mobile dropdown items */}
                    <div className="pl-4 space-y-1">
                      {item.dropdownItems?.map((dropdownItem, index) => (
                        <Link
                          key={index}
                          href={dropdownItem.url}
                          className="block px-3 py-1 text-sm text-slate-600 hover:text-orange-500 hover:bg-orange-50 rounded-md"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.url}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      pathname === item.url
                        ? 'text-orange-500 bg-orange-50'
                        : 'text-slate-700 hover:text-orange-500 hover:bg-orange-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-slate-200 mt-4">
              <a href="tel:(949) 555-0123" className="block px-3 py-2 text-orange-500 font-medium">
                (949) 555-0123
              </a>
              <Link href="/contact" className="block px-3 py-2">
                <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white shadow-lg hover:shadow-xl">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}