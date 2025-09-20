// src/types/index.ts
export type Metric = {
  totalRevenue: number;
  outstandingPayments: number;
  avgInvoiceAmount: number;
};

export type Invoice = {
  id: string;
  client: string;
  date?: string;
  amount: number;
  status: string;
  verification?: string;
  cid?: string | null;
  anchorTx?: string | null;
};

export type FraudAlert = {
  id: string;
  type: string;
  timestamp: string;
  target: string;
  severity: 'Low' | 'Medium' | 'High';
};

export type Notification = {
  id: string;
  title: string;
  text: string;
  ts: string;
};

export type Identity = {
  fullName: string;
  email: string;
  phone: string;
  kycStatus: string;
};
