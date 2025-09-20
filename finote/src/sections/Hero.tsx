import React from 'react';

export default function Hero() {
  return (
    <section className="pt-12 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
            Manage Your <span className="text-brand-600">Finances</span> Smarter
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl">
            A powerful hub for freelancers and small businesses to track invoices, monitor payments, and detect fraud with intelligent alerts.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-cta bg-brand-500 text-white hover:bg-brand-600" href="#signup">Start Free Trial</a>
            <button className="btn-cta border border-gray-200 text-slate-700 hover:bg-gray-100">Watch Demo</button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-6 max-w-xl">
            <div className="card text-center">
              <div className="text-xs text-slate-500">Processed</div>
              <div className="mt-2 font-semibold text-slate-900">$2.4M+ <span className="text-green-600 text-sm">+12.5%</span></div>
            </div>
            <div className="card text-center">
              <div className="text-xs text-slate-500">Uptime</div>
              <div className="mt-2 font-semibold text-slate-900">99.9%</div>
            </div>
            <div className="card text-center">
              <div className="text-xs text-slate-500">Support</div>
              <div className="mt-2 font-semibold text-slate-900">24/7</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="card">
            <div className="flex items-center justify-between">
              <h3 className="text-sm text-slate-700">Live Dashboard Preview</h3>
              <div className="px-3 py-1 bg-gray-100 rounded-full text-xs text-slate-700">Beta</div>
            </div>

            <div className="mt-4 h-56 bg-gradient-to-b from-white to-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
              {/* placeholder illustration */}
              <svg width="220" height="140" viewBox="0 0 220 140" fill="none">
                <rect x="2" y="2" width="216" height="136" rx="12" fill="#f8fafc" stroke="#eef2f7"/>
              </svg>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
              <div>Fraud Alert: <span className="text-amber-600 font-medium">Suspicious Activity</span></div>
              <div className="text-slate-700">+ $2,400</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
