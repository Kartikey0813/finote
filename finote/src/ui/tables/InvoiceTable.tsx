// src/ui/tables/InvoiceTable.tsx
import React from 'react';
import { Invoice } from '../../types/index';
import { Link } from 'react-router-dom';

type Props = { data?: Invoice[] };

export default function InvoiceTable({ data = [] }: Props) {
  return (
    <div className="panel p-4">
      <table className="w-full text-left">
        <thead className="text-slate-400 text-sm">
          <tr>
            <th className="py-2">Invoice #</th>
            <th>Client</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Verification</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-t border-white/5">
              <td className="py-3">{row.id}</td>
              <td>{row.client}</td>
              <td>{row.date || ''}</td>
              <td>${row.amount?.toLocaleString?.()}</td>
              <td>{row.status}</td>
              <td>{row.verification}</td>
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan={6} className="py-6 text-center text-slate-400">No invoices found.</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="mt-4 flex justify-end">
        <Link to="/app/invoices/new" className="px-3 py-2 bg-accent rounded text-black">New Invoice</Link>
      </div>
    </div>
  );
}
