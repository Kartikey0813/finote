import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type User = { name: string; email: string; avatar?: string } | null;
type AuthContextValue = {
  user: User;
  loading: boolean;
  login: (email: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);
const AUTH_KEY = 'invoicepro_auth_v1';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const raw = localStorage.getItem(AUTH_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        setUser(parsed.user || null);
      } catch {
        setUser(null);
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 400));
    const mockUser = { name: email.split('@')[0], email, avatar: `https://i.pravatar.cc/40?u=${email}` };
    localStorage.setItem(AUTH_KEY, JSON.stringify({ user: mockUser, token: 'mock-token' }));
    setUser(mockUser);
    setLoading(false);
    navigate('/app/dashboard');
  };

  const logout = () => {
    localStorage.removeItem(AUTH_KEY);
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
