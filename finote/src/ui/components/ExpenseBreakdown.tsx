import React from 'react';

export default function ExpenseBreakdown() {
  const items = [
    { name: 'Software', pct: 45 },
    { name: 'Marketing', pct: 25 },
    { name: 'Travel', pct: 15 },
    { name: 'Office Supplies', pct: 10 },
    { name: 'Other', pct: 5 }
  ];

  return (
    <div className="panel p-4">
      <div className="text-sm text-slate-300 mb-4">Expenses by Category</div>
      {items.map((it) => (
        <div key={it.name} className="mb-3">
          <div className="flex justify-between text-sm mb-1">
            <div>{it.name}</div>
            <div>{it.pct}%</div>
          </div>
          <div className="h-2 bg-panel-lite rounded">
            <div style={{ width: `${it.pct}%` }} className="h-full bg-accent rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
