import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchMetrics, fetchInvoices, fetchFraudAlerts } from '../../services/api';
import MetricCard from '../components/MetricCard';
import PaymentTrends from '../components/PaymentTrends';
import ExpenseBreakdown from '../components/ExpenseBreakdown';
import InvoiceTable from '../tables/InvoiceTable';
import FraudAlertsTable from '../tables/FraudAlertsTable';
import { Metric, Invoice, FraudAlert } from '../../types';

export default function DashboardPage() {
  const { data: metrics } = useQuery<Metric>({
    queryKey: ['metrics'],
    queryFn: fetchMetrics
  });

  const { data: invoices } = useQuery<Invoice[]>({
    queryKey: ['invoices'],
    queryFn: fetchInvoices
  });

  const { data: alerts } = useQuery<FraudAlert[]>({
    queryKey: ['fraud-alerts'],
    queryFn: fetchFraudAlerts
  });
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        <MetricCard title="Total Revenue" value={metrics ? `$${metrics.totalRevenue.toLocaleString()}` : '—'} sub="+15%" />
        <MetricCard title="Outstanding Payments" value={metrics ? `$${metrics.outstandingPayments.toLocaleString()}` : '—'} sub="-5%" />
        <MetricCard title="Avg Invoice" value={metrics ? `$${metrics.avgInvoiceAmount.toLocaleString()}` : '—'} sub="+10%" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <PaymentTrends />
        <ExpenseBreakdown />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-3">Recent Invoices</h2>
          <InvoiceTable data={invoices || []} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">Fraud Alerts</h2>
          <FraudAlertsTable data={alerts || []} />
        </div>
      </div>
    </div>
  );
}
