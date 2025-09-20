import React from 'react';

const rows = [
  { id: '#12345', parties: 'Tech Solutions Inc. vs. Freelancer Alex', date: '2024-07-15', status: 'Negotiation' },
  { id: '#67890', parties: 'Design Studio vs. Client Sarah', date: '2024-07-20', status: 'Mediation' },
  { id: '#11223', parties: 'Marketing Agency vs. Contractor Mike', date: '2024-07-25', status: 'Arbitration' }
];

export default function DisputesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Disputes</h1>
      <div className="panel p-4">
        <table className="w-full text-left">
          <thead className="text-slate-400"><tr><th>ID</th><th>Parties</th><th>Date Filed</th><th>Status</th><th></th></tr></thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.id} className="border-t border-white/5">
                <td className="py-3">{r.id}</td>
                <td>{r.parties}</td>
                <td>{r.date}</td>
                <td>{r.status}</td>
                <td className="text-right text-slate-400">View Details</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
