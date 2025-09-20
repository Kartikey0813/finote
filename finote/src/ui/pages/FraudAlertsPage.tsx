import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchFraudAlerts } from '../../services/api';
import FraudAlertsTable from '../tables/FraudAlertsTable';
import { FraudAlert } from '../../types/index';

export default function FraudAlertsPage() {
  const { data } = useQuery<FraudAlert[]>({ queryKey: ['fraud-alerts'], queryFn: fetchFraudAlerts });


  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Fraud Alerts</h1>
      <FraudAlertsTable data={data || []} />
    </div>
  );
}
