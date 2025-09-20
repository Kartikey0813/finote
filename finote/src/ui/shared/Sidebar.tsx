import React from 'react';
import { NavLink } from 'react-router-dom';

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink to={to} className={({ isActive }) => `block px-4 py-3 rounded-md ${isActive ? 'bg-panel-lite text-white' : 'text-slate-300 hover:bg-panel-lite'}`}>
      {children}
    </NavLink>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-64 bg-panel p-6 border-r border-white/5 hidden md:block">
      <div className="mb-8 text-xl font-bold">InvoicePro</div>
      <nav className="space-y-1">
        <NavItem to="/app/dashboard">Dashboard</NavItem>
        <NavItem to="/app/invoices">Invoices</NavItem>
        <NavItem to="/app/payments">Payments</NavItem>
        <NavItem to="/app/fraud">Fraud Alerts</NavItem>
        <NavItem to="/app/identity">Identity</NavItem>
        <NavItem to="/app/disputes">Disputes</NavItem>
        <NavItem to="/app/settings">Settings</NavItem>
      </nav>

      <div className="mt-8 text-slate-400 text-sm">Help & docs</div>
    </aside>
  );
}
