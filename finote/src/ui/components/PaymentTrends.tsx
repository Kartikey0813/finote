import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const mock = [
  { month: 'Jan', value: 8000 },
  { month: 'Feb', value: 6000 },
  { month: 'Mar', value: 9000 },
  { month: 'Apr', value: 7000 },
  { month: 'May', value: 11000 },
  { month: 'Jun', value: 9000 }
];

export default function PaymentTrends() {
  return (
    <div className="panel p-4 h-64">
      <div className="text-sm text-slate-300 mb-2">Revenue Over Time</div>
      <div className="h-44">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mock}>
            <Line type="monotone" dataKey="value" stroke="#24d3b8" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
