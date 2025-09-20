import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-100 to-brand-400 rounded-lg"></div>
            <div className="text-lg font-semibold">FinanceHub</div>
          </div>
          <p className="text-sm text-slate-600">Empowering freelancers and small businesses with intelligent financial management, real-time insights, and advanced fraud protection.</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Product</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>Features</li>
            <li>Dashboard</li>
            <li>Security</li>
            <li>API</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Tutorials</li>
            <li>Status</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-100 text-sm text-slate-600 py-6">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div>© {new Date().getFullYear()} FinanceHub. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a className="text-slate-600 hover:text-slate-800">Privacy</a>
            <a className="text-slate-600 hover:text-slate-800">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
