export const seoData = {
  Home: { 
    title: "Sarah Chen | Orange County Real Estate Agent | DRE #02145678", 
    description: "Looking for homes in Orange County? Sarah Chen, your trusted real estate agent specializing in residential properties. Expert guidance for buying, selling & investing!" 
  },
  About: { 
    title: "About Sarah Chen | Coastal Realty Group Real Estate Agent in Orange County", 
    description: "Meet Sarah Chen – licensed real estate agent helping clients buy, sell, and invest in Orange County residential properties with expert market knowledge." 
  },
  Services: { 
    title: "Real Estate Services | Home Buying, Selling & Investment Properties in Orange County", 
    description: "Comprehensive real estate services including home buying, selling, luxury properties, and investment opportunities throughout Orange County." 
  },
  Calculator: { 
    title: "Property Calculator | Estimate Home Values & Affordability in Orange County", 
    description: "Use our free property calculators to estimate home values, affordability, and investment potential in Orange County's real estate market." 
  },
  Contact: { 
    title: "Contact Sarah Chen | Orange County Real Estate Agent", 
    description: "Ready to buy or sell your home? Contact Sarah Chen, your Orange County real estate expert for personalized service and market insights." 
  }
};

export const structuredData = {
  "@context": "https://schema.org",
  "@type": ["RealEstateAgent", "LocalBusiness"],
  "name": "Sarah Chen - Orange County Real Estate",
  "serviceType": "Real Estate Agent",
  "provider": {
    "@type": "Person",
    "name": "Sarah Chen",
    "jobTitle": "Real Estate Agent",
    "worksFor": {
      "@type": "Organization",
      "name": "Coastal Realty Group"
    }
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea", 
      "name": "Orange County, CA"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Irvine, CA"
    },
    {
      "@type": "AdministrativeArea", 
      "name": "Newport Beach, CA"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Huntington Beach, CA" 
    },
    {
      "@type": "AdministrativeArea",
      "name": "Costa Mesa, CA"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Orange County",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "telephone": "+1-949-555-0123",
  "email": "sarah@coastalrealtyoc.com",
  "url": "https://sarahchen-realestate.com",
  "priceRange": "$$$$",
  "description": "Licensed real estate agent specializing in residential properties in Orange County. Expert guidance for home buying, selling, and investment properties. DRE #02145678.",
  "image": "/images/sarah-chen-headshot.webp",
  "openingHours": "Mo-Su 07:00-21:00",
  "paymentAccepted": ["Cash", "Check", "Wire Transfer", "Credit Card"],
  "currenciesAccepted": "USD"
};

export const realEstateServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Orange County Real Estate Services",
  "description": "Comprehensive real estate services including home buying, selling, luxury properties, and investment opportunities in Orange County, CA",
  "provider": {
    "@type": "RealEstateAgent",
    "name": "Sarah Chen - Orange County Real Estate",
    "serviceType": "Real Estate Agent"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Home Buying Services",
      "description": "Expert guidance for first-time and experienced home buyers in Orange County",
      "url": "/services/home-buying"
    },
    {
      "@type": "Offer", 
      "name": "Home Selling Services",
      "description": "Professional marketing and negotiation for sellers looking to maximize their home's value",
      "url": "/services/home-selling"
    },
    {
      "@type": "Offer",
      "name": "Investment Properties",
      "description": "Specialized service for real estate investors seeking rental and flip opportunities",
      "url": "/services/investment-properties"
    },
    {
      "@type": "Offer",
      "name": "First-Time Buyer Program",
      "description": "Dedicated support and education for first-time home buyers",
      "url": "/services/first-time-buyer"
    },
    {
      "@type": "Offer",
      "name": "Luxury Home Specialist",
      "description": "Premium service for luxury and high-end property transactions",
      "url": "/services/luxury-homes"
    }
  ]
};

export type PageName = keyof typeof seoData;