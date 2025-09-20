import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchInvoices } from '../../services/api';
import InvoiceTable from '../tables/InvoiceTable';
import { Invoice } from '../../types/index';

export default function InvoicesPage() {
  const { data: invoices } = useQuery<Invoice[]>({ queryKey: ['invoices'], queryFn: fetchInvoices });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Invoices</h1>
      <InvoiceTable data={invoices || []} />
    </div>
  );
}
