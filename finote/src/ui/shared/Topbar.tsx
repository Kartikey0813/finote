import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../auth/AuthProvider';

export default function Topbar() {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <header className="h-16 bg-panel flex items-center justify-between px-6 border-b border-white/5">
      <div className="flex items-center gap-6">
        <div className="text-lg font-semibold">InvoicePro</div>
        <nav className="hidden md:flex gap-4 text-slate-300">
          <Link to="/app/dashboard" className="hover:text-white">Dashboard</Link>
          <Link to="/app/invoices" className="hover:text-white">Invoices</Link>
          <Link to="/app/payments" className="hover:text-white">Payments</Link>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        {!isAuthenticated ? (
          <>
            <Link to="/login" className="px-3 py-2 border rounded text-slate-300">Sign in</Link>
            <Link to="/login" className="px-3 py-2 bg-accent text-black rounded">Get Started</Link>
          </>
        ) : (
          <>
            <Link to="/app/notifications" className="px-3 py-2 rounded bg-panel-lite">🔔</Link>
            <div className="flex items-center gap-3">
              <img src={user?.avatar} alt="avatar" className="w-9 h-9 rounded-full border border-white/10" />
              <div className="text-sm">
                <div className="font-medium">{user?.name}</div>
                <button onClick={() => logout()} className="text-xs text-slate-400">Sign out</button>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
