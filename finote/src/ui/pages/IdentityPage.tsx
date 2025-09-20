import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchIdentity } from '../../services/api';
import { Identity } from '../../types/index';

export default function IdentityPage() {
  const { data } = useQuery<Identity>({ queryKey: ['identity'], queryFn: fetchIdentity });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Identity Management</h1>
      <div className="panel p-4">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="text-sm text-slate-400">Full Name</div>
            <div className="font-medium">{data?.fullName}</div>
          </div>
          <div>
            <div className="text-sm text-slate-400">Email</div>
            <div className="font-medium">{data?.email}</div>
          </div>
          <div>
            <div className="text-sm text-slate-400">Phone</div>
            <div className="font-medium">{data?.phone}</div>
          </div>
          <div>
            <div className="text-sm text-slate-400">KYC Status</div>
            <div className="font-medium">{data?.kycStatus}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
