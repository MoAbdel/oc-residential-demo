import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { structuredData, realEstateServiceSchema } from '@/lib/seo';
import './globals-simple.css';

export const metadata: Metadata = {
  title: 'Sarah Chen | Orange County Real Estate Agent | DRE #02145678',
  description: 'Looking for homes in Orange County? Sarah Chen, your trusted real estate agent specializing in residential properties. Expert guidance for buying, selling & investing!',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Sarah Chen | Orange County Real Estate Agent | DRE #02145678',
    description: 'Looking for homes in Orange County? Sarah Chen, your trusted real estate agent specializing in residential properties. Expert guidance for buying, selling & investing!',
    type: 'website',
    locale: 'en_US',
    siteName: 'Sarah Chen - Orange County Real Estate',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="realestate">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateServiceSchema) }}
        />
        <meta name="build-timestamp" content={new Date().toISOString()} />
        <meta name="deployment-id" content="BGDyiFiyb-rollback" />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}