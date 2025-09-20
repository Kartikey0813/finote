import React from 'react';

const rows = [
  { company: 'Acme Corp', id: 'INV-001', time: '2 hours ago', amount: 2400, status: 'Paid' },
  { company: 'TechStart Inc', id: 'INV-002', time: '1 day ago', amount: 1800, status: 'Pending' },
  { company: 'Unknown Source', id: 'ALT-003', time: '3 hours ago', amount: 500, status: 'Fraud' },
  { company: 'Design Studio', id: 'INV-004', time: '2 days ago', amount: 3200, status: 'Paid' },
  { company: 'Marketing Pro', id: 'INV-005', time: '1 week ago', amount: 950, status: 'Overdue' }
];

function StatusPill({ status }: { status: string }) {
  const map: Record<string, string> = {
    Paid: 'bg-emerald-600 text-white',
    Pending: 'bg-amber-500 text-white',
    Fraud: 'bg-rose-500 text-white',
    Overdue: 'bg-red-600 text-white'
  };
  return <span className={`px-3 py-1 rounded-full text-xs ${map[status] ?? 'bg-gray-200 text-slate-800'}`}>{status}</span>;
}

export default function RecentTransactions() {
  return (
    <section className="mt-10">
      <div className="card">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">Recent Transactions & Alerts</h3>
          <button className="text-sm text-slate-600 hover:text-slate-800">Live Dashboard Preview</button>
        </div>

        <div className="mt-6">
          <div className="space-y-3">
            {rows.map((r) => (
              <div key={r.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-md border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-md bg-gray-100 flex items-center justify-center text-slate-700">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#e2e8f0" strokeWidth="1"/></svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-900">{r.company}</div>
                    <div className="text-xs text-slate-500">{r.id} • {r.time}</div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-sm font-semibold text-slate-900">${r.amount.toLocaleString()}</div>
                  <StatusPill status={r.status}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
