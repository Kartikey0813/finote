import React from 'react';
import logo from '../assets/fevicon.png'; // adjust path if assets folder is elsewhere
import login from '../ui/pages/LoginPage'; // adjust path if pages folder is elsewhere

export default function Header() {
  return (
    <header className="py-6">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo + Brand name */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Finote Logo"
            className="w-10 h-10 rounded-md shadow"
          />
          <span className="font-semibold text-lg tracking-tight">Finote</span>
        </div>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-slate-600">
          <a className="hover:text-slate-800 transition" href="#features">
            Features
          </a>
          <a className="hover:text-slate-800 transition" href="#dashboard">
            Dashboard
          </a>
          <a className="hover:text-slate-800 transition" href="#security">
            Security
          </a>
          <a className="hover:text-slate-800 transition" href="#pricing">
            Pricing
          </a>
        </nav>

        {/* Auth buttons */}
        <div className="flex items-center gap-3">
          <button
            className="hidden md:inline-block px-4 py-2 border border-gray-200 rounded-md text-sm text-slate-700 hover:bg-gray-50"
            onClick={() => {
              // if you have a login modal, trigger it here
              window.location.href = "login"; // redirect to login page
            }}
          >
            Sign In
          </button>

          {/* Sign Up / Get Started linked to LandingPage sign-up section */}
          <a
            href="#signup" // anchor in LandingPage.tsx
            className="ml-2 px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-md text-sm font-medium shadow"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
