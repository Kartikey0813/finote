import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchInvoices } from '../../services/api';
import { Invoice } from '../../types/index';

export default function PaymentsPage() {
  const { data: invoices } = useQuery<Invoice[]>({ queryKey: ['invoices'], queryFn: fetchInvoices });


  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Payments</h1>
      <div className="panel p-4">
        <div className="text-sm text-slate-300 mb-3">Outgoing Payments</div>
        <table className="w-full">
          <thead className="text-slate-400">
            <tr><th>Payer</th><th>Amount</th><th>Date</th><th>Status</th></tr>
          </thead>
          <tbody>
            {(invoices || []).map((inv: any) => (
              <tr key={inv.id} className="border-t border-white/5">
                <td className="py-3">{inv.client}</td>
                <td>${inv.amount}</td>
                <td>{inv.date || '—'}</td>
                <td>{inv.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
