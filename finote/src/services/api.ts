// src/services/api.ts
import { api } from '../api/client';
import { Metric, Invoice, FraudAlert, Notification, Identity } from '../types/index';

export const fetchMetrics = async (): Promise<Metric> => {
  const res = await api.get<Metric>('/metrics');
  return res.data;
};

export const fetchInvoices = async (): Promise<Invoice[]> => {
  const res = await api.get<Invoice[]>('/invoices');
  return res.data;
};

export const fetchFraudAlerts = async (): Promise<FraudAlert[]> => {
  const res = await api.get<FraudAlert[]>('/fraud-alerts');
  return res.data;
};

export const fetchNotifications = async (): Promise<Notification[]> => {
  const res = await api.get<Notification[]>('/notifications');
  return res.data;
};

export const fetchIdentity = async (): Promise<Identity> => {
  const res = await api.get<Identity>('/identity');
  return res.data;
};
