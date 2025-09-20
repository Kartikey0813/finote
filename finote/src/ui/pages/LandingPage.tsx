import React from 'react';
import Header from '../../sections/Header';
import Hero from '../../sections/Hero';
import Metrics from '../../sections/Metrics';
import Features from '../../sections/Features';
import RecentTransactions from '../../sections/RecentTransactions';
import Footer from '../../sections/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-slate-900">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6">
          <Hero />
          <Metrics />
          <Features />
          <RecentTransactions />
        </div>
      </main>
      <Footer />
    </div>
  );
}
