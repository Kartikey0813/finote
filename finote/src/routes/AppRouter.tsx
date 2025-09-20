import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../ui/pages/LandingPage';
import LoginPage from '../ui/pages/LoginPage';
import MainLayout from '../ui/layouts/MainLayout';
import DashboardPage from '../ui/pages/DashboardPage';
import InvoicesPage from '../ui/pages/InvoicesPage';
import CreateInvoicePage from '../ui/pages/CreateInvoicePage';
import PaymentsPage from '../ui/pages/PaymentsPage';
import FraudAlertsPage from '../ui/pages/FraudAlertsPage';
import IdentityPage from '../ui/pages/IdentityPage';
import SmartContractPage from '../ui/pages/SmartContractPage';
import SettingsPage from '../ui/pages/SettingsPage';
import DisputesPage from '../ui/pages/DisputesPage';
import NotificationsPage from '../ui/pages/NotificationsPage';
import ProfileSettingsPage from '../ui/pages/ProfileSettingsPage';
import { AuthProvider } from '../auth/AuthProvider';
import ProtectedRoute from './ProtectedRoute';

export default function AppRouter() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="invoices" element={<InvoicesPage />} />
          <Route path="invoices/new" element={<CreateInvoicePage />} />
          <Route path="payments" element={<PaymentsPage />} />
          <Route path="fraud" element={<FraudAlertsPage />} />
          <Route path="identity" element={<IdentityPage />} />
          <Route path="contract/:id" element={<SmartContractPage />} />
          <Route path="disputes" element={<DisputesPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="profile" element={<ProfileSettingsPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}
