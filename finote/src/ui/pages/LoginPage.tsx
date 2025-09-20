import React, { useState } from 'react';
import { useAuth } from '../../auth/AuthProvider';

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState('alex.doe@example.com');
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg p-6">
      <div className="w-full max-w-md panel p-8">
        <h2 className="text-2xl font-bold mb-2">Sign in to Finote</h2>
        <p className="text-slate-400 mb-6">Use any email to try the demo. This is a mock login for frontend preview.</p>

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="text-sm text-slate-400">Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} className="w-full mt-2 px-3 py-2 rounded-md bg-panel-lite" />
          </div>

          <div>
            <label className="text-sm text-slate-400">Password</label>
            <input type="password" placeholder="(not required for demo)" className="w-full mt-2 px-3 py-2 rounded-md bg-panel-lite" />
          </div>

          <div className="flex justify-between items-center">
            <button type="submit" disabled={loading} className="px-4 py-2 bg-accent text-black rounded-md">
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
            <a className="text-sm text-slate-400">Forgot?</a>
          </div>
        </form>

        <div className="text-sm text-slate-500 mt-4">
          Demo credentials: any email will work. After login you'll be routed to the Dashboard.
        </div>
      </div>
    </div>
  );
}
