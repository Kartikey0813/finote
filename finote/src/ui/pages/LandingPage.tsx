import React from 'react';
import { Link } from 'react-router-dom';

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="panel p-6">
      <div className="text-sm font-semibold mb-2">{title}</div>
      <div className="text-sm text-slate-400">{desc}</div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071014] to-[#041216] text-white">
      <header className="p-8 max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">FinanceHub</div>
        <div className="flex gap-4 items-center">
          <a className="text-slate-400">Features</a>
          <Link to="/login" className="px-4 py-2 bg-accent rounded-md text-black">Get Started</Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-8">
        <section className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-7">
            <h1 className="text-5xl font-extrabold leading-tight mb-4">
              Manage Your <span className="text-accent">Finances</span> Smarter
            </h1>
            <p className="text-slate-400 text-lg mb-6">
              A powerful hub for freelancers and small businesses to track invoices, monitor payments, and detect fraud with intelligent alerts.
            </p>

            <div className="flex gap-3 mb-6">
              <Link to="/login" className="px-4 py-2 bg-accent rounded-md text-black">Start Free Trial</Link>
              <button className="px-4 py-2 bg-panel-lite rounded-md">Watch Demo</button>
            </div>

            <div className="flex gap-8 items-center mt-8 text-slate-300">
              <div><div className="text-2xl font-semibold">$2.4M+</div><div className="text-sm">Processed</div></div>
              <div><div className="text-2xl font-semibold">99.9%</div><div className="text-sm">Uptime</div></div>
              <div><div className="text-2xl font-semibold">24/7</div><div className="text-sm">Support</div></div>
            </div>
          </div>

          <div className="col-span-5">
            <div className="panel p-6 shadow-lg">
              <div className="h-56 bg-panel-lite rounded-md flex items-center justify-center">
                <div className="text-slate-400">Hero Dashboard Preview</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Everything You Need to <span className="text-accent">Succeed</span></h2>
          <p className="text-slate-400 mb-6">Comprehensive financial management tools designed specifically for freelancers and small businesses who want to focus on growth, not paperwork.</p>

          <div className="grid grid-cols-3 gap-6">
            <FeatureCard title="Invoice Management" desc="Create, send, and track professional invoices." />
            <FeatureCard title="Payment Processing" desc="Accept payments with secure, fast processing." />
            <FeatureCard title="Fraud Detection" desc="Advanced AI-powered fraud detection with instant alerts." />
            <FeatureCard title="Analytics Dashboard" desc="Comprehensive insights and reporting." />
            <FeatureCard title="Automated Workflows" desc="Streamline repetitive tasks with automation." />
            <FeatureCard title="Team Collaboration" desc="Role-based access and collaboration features." />
          </div>
        </section>

        <section className="mt-12">
          <div className="panel p-6 flex items-center justify-between">
            <div>
              <div className="text-lg font-semibold">Ready to Transform Your Finance Management?</div>
              <div className="text-slate-400">Join thousands of freelancers and small businesses who trust FinanceHub.</div>
            </div>
            <Link to="/login" className="px-4 py-2 bg-accent rounded-md text-black">Start Your Free Trial</Link>
          </div>
        </section>

        <section className="mt-12">
          <h3 className="text-xl font-bold mb-4">Your Financial Command Center</h3>
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="panel p-4">Total Revenue <div className="text-lg font-bold mt-2">$24,890</div></div>
            <div className="panel p-4">Pending Invoices <div className="text-lg font-bold mt-2">8</div></div>
            <div className="panel p-4">Active Clients <div className="text-lg font-bold mt-2">42</div></div>
            <div className="panel p-4">Avg. Payment Time <div className="text-lg font-bold mt-2">12 days</div></div>
          </div>

          <div className="panel p-6">
            <div className="text-lg font-semibold mb-4">Recent Transactions & Alerts</div>
            <div className="divide-y divide-slate-800">
              <div className="py-3 flex justify-between items-center"><div><div className="font-medium">Acme Corp</div><div className="text-sm text-slate-400">INV-001 • 2 hours ago</div></div><div className="font-semibold">$2,400</div></div>
              <div className="py-3 flex justify-between items-center"><div><div className="font-medium">TechStart Inc</div><div className="text-sm text-slate-400">INV-002 • 1 day ago</div></div><div className="font-semibold">$1,800</div></div>
              <div className="py-3 flex justify-between items-center"><div><div className="font-medium">Unknown Source</div><div className="text-sm text-slate-400">ALT-003 • 3 hours ago</div></div><div className="font-semibold">$500</div></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="p-8 mt-12 text-slate-400 text-sm text-center">© 2025 FinanceHub. All rights reserved.</footer>
    </div>
  );
}
