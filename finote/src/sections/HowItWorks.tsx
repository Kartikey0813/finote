import React from 'react';

export default function HowItWorks(){
  const steps = [
    { title: 'Create & Issue', text: 'Create invoices with on-chain references and privacy controls.' },
    { title: 'Escrow & Milestones', text: 'Lock payments in smart contracts and release on verified milestones.' },
    { title: 'Clear & Audit', text: 'Immutable ledger + AI audit trails speed dispute resolution.' }
  ];
  return (
    <section id="how" className="mt-12">
      <h2 className="text-2xl font-semibold">How It Works</h2>
      <p className="mt-2 text-slate-300 max-w-2xl">From invoice creation to secure payment, every step is automated and auditable.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((s, idx) => (
          <div key={s.title} className="card">
            <div className="text-sm text-slate-400">Step {idx+1}</div>
            <h3 className="mt-2 font-semibold">{s.title}</h3>
            <p className="mt-2 text-slate-300 text-sm">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
