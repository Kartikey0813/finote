import React from 'react';

export default function MetricCard({ title, value, sub }: { title: string; value: React.ReactNode; sub?: React.ReactNode }) {
  return (
    <div className="panel p-4">
      <div className="text-sm text-slate-300">{title}</div>
      <div className="text-2xl font-bold mt-2">{value}</div>
      {sub && <div className="text-sm text-slate-400 mt-1">{sub}</div>}
    </div>
  );
}
