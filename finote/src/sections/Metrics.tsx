import React from 'react';

export default function Metrics() {
  return (
    <section id="dashboard" className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="text-sm text-slate-500">Total Revenue</div>
          <div className="mt-2 text-2xl font-bold text-slate-900">$24,890</div>
          <div className="mt-2 text-sm text-green-600">+12.5%</div>
        </div>

        <div className="card">
          <div className="text-sm text-slate-500">Pending Invoices</div>
          <div className="mt-2 text-2xl font-bold text-slate-900">8</div>
          <div className="mt-2 text-sm text-slate-700">-3 from last week</div>
        </div>

        <div className="card">
          <div className="text-sm text-slate-500">Active Clients</div>
          <div className="mt-2 text-2xl font-bold text-slate-900">42</div>
          <div className="mt-2 text-sm text-green-600">+5 this month</div>
        </div>
      </div>
    </section>
  );
}
