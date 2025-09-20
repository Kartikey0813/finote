import React from 'react';
const items = [
  { title: 'Invoice Management', text: 'Create, send, and track professional invoices with automated reminders.' },
  { title: 'Payment Processing', text: 'Accept payments anywhere with secure, fast processing and real-time notifications.' },
  { title: 'Fraud Detection', text: 'Advanced AI-powered fraud detection with instant alerts and preventive measures.' },
  { title: 'Analytics Dashboard', text: 'Comprehensive insights into your financial data with customizable reports.' },
  { title: 'Automated Workflows', text: 'Streamline repetitive tasks with intelligent automation and custom business rules.' },
  { title: 'Team Collaboration', text: 'Work seamlessly with your team using role-based access and collaborative features.' }
];

export default function Features() {
  return (
    <section id="features" className="mt-14 pb-8">
      <h2 className="text-2xl font-semibold text-slate-900">Everything You Need to <span className="text-brand-600">Succeed</span></h2>
      <p className="mt-2 text-slate-600 max-w-2xl">Comprehensive financial management tools designed specifically for freelancers and small businesses who want to focus on growth, not paperwork.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="card">
            <div className="h-12 w-12 mb-3 rounded-lg bg-gradient-to-br from-brand-100 to-brand-400 flex items-center justify-center text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 7h18" stroke="white" strokeWidth="1.4" strokeLinecap="round"/></svg>
            </div>
            <h3 className="font-semibold text-slate-900">{it.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
