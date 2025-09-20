import React from 'react';
import { useParams } from 'react-router-dom';

export default function SmartContractPage() {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Smart Contract Details</h1>
      <div className="panel p-4">
        <div>Contract ID: {id}</div>
        <div className="mt-3 text-slate-400">This screen would show escrow milestones, statuses, and actions to approve release or raise a dispute. For now it is a placeholder.</div>
      </div>
    </div>
  );
}
