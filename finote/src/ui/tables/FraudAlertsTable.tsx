// src/ui/tables/FraudAlertsTable.tsx
import React from 'react';
import { FraudAlert } from '../../types/index';

type Props = { data?: FraudAlert[] };

export default function FraudAlertsTable({ data = [] }: Props) {
  return (
    <div className="panel p-4">
      <table className="w-full text-left">
        <thead className="text-slate-400 text-sm">
          <tr>
            <th className="py-2">Type</th>
            <th>Timestamp</th>
            <th>Invoice/Transaction</th>
            <th>Severity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((r) => (
            <tr key={r.id} className="border-t border-white/5">
              <td className="py-3">{r.type}</td>
              <td>{r.timestamp}</td>
              <td>{r.target}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    r.severity === 'High' ? 'bg-red-700' : r.severity === 'Medium' ? 'bg-yellow-700' : 'bg-green-700'
                  }`}
                >
                  {r.severity}
                </span>
              </td>
              <td className="text-right text-slate-400">View Details</td>
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan={5} className="py-6 text-center text-slate-400">No fraud alerts found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
