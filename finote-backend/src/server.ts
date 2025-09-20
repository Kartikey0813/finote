import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import fs from 'fs';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

/**
 * Simple in-memory storage for demo.
 * Not persistent. Suitable for development only.
 */
const db: any = {
  invoices: [
    { id: 'INV-2024-001', client: 'Acme Corp', date: '2024-07-20', amount: 5000, status: 'Paid', verification: 'Verified' },
    { id: 'INV-2024-002', client: 'Beta Inc', date: '2024-07-25', amount: 2500, status: 'Pending', verification: 'Verified' },
    { id: 'INV-2024-003', client: 'Gamma LLC', date: '2024-07-30', amount: 7500, status: 'Overdue', verification: 'Unverified' }
  ],
  escrows: [],
  payments: [
    { id: 'P-001', invoiceId: 'INV-2024-001', payer: 'Acme Corp', amount: 5000, date: '2024-07-20', status: 'Completed', txHash: '0xabc' }
  ],
  fraudAlerts: [
    { id: 'FA-001', type: 'Unusual Payment Amount', timestamp: '2024-03-15 14:30', target: 'Invoice #INV-2024-005', severity: 'High' },
    { id: 'FA-002', type: 'Suspicious IP Address', timestamp: '2024-03-14 22:15', target: 'Transaction #TXN-2024-012', severity: 'Medium' }
  ],
  notifications: [
    { id: 'N-1', title: 'Payment Received', text: 'Received payment of $500 from Tech Solutions Inc.', ts: '2 hours ago' },
    { id: 'N-2', title: 'Fraud Alert', text: 'A potential fraudulent transaction was detected. Please review.', ts: '4 hours ago' }
  ],
  identity: [
    { fullName: 'Sophia Carter', email: 'sophia.carter@email.com', phone: '+1 (555) 123-4567', kycStatus: 'Verified' },
  {
    fullName: 'Udit Bhatt', email: 'udit.bhatt@email.com', phone: '+91 9876543210', kycStatus: 'Verified' 
  },
  {"fullName":"ABC Bhatt","email":"ABC@email.com","phone":"+91 9876543210","kycStatus":"NOT VERIFIED"}
  ],
  disputes: [
    { id: '#12345', parties: 'Tech Solutions Inc. vs. Freelancer Alex', dateFiled: '2024-07-15', status: 'Negotiation' },
    { id: '#67890', parties: 'Design Studio vs. Client Sarah', dateFiled: '2024-07-20', status: 'Mediation' }
  ]
};

// --- Auth (mock) ---
app.post('/auth/wallet/login', (req: Request, res: Response) => {
  const { address } = req.body || {};
  // For demo, just respond with a mock token and user
  const user = { name: (address || 'demo').toString().split('@')[0] || 'demo', email: `${address || 'user'}@example.com`, avatar: `https://i.pravatar.cc/40?u=${address || 'demo'}` };
  return res.json({ token: 'mock-token', user });
});

// --- Metrics ---
app.get('/metrics', (req: Request, res: Response) => {
  return res.json({ totalRevenue: 125450, outstandingPayments: 12300, avgInvoiceAmount: 1500 });
});

// --- Invoices ---
app.get('/invoices', (req: Request, res: Response) => {
  return res.json(db.invoices);
});

app.post('/invoices', (req: Request, res: Response) => {
  const payload = req.body;
  const id = `INV-${Date.now()}`;
  const invoice = { id, client: payload.client, clientEmail: payload.clientEmail, items: payload.items, amount: payload.items.reduce((s: number, it: any) => s + it.qty * it.rate, 0), status: 'Pending' };
  db.invoices.push(invoice);
  return res.status(201).json(invoice);
});

app.get('/invoices/:invoiceId', (req: Request, res: Response) => {
  const inv = db.invoices.find((i: any) => i.id === req.params.invoiceId);
  if (!inv) return res.status(404).json({ message: 'Not found' });
  return res.json(inv);
});

app.post('/invoices/:invoiceId/anchor', (req: Request, res: Response) => {
  // Mock behavior: create a fake tx hash and attach to invoice
  const inv = db.invoices.find((i: any) => i.id === req.params.invoiceId);
  if (!inv) return res.status(404).json({ message: 'Invoice not found' });
  const txHash = `0xanchor${Math.floor(Math.random() * 1e8).toString(16)}`;
  inv.anchorTx = txHash;
  inv.cid = `bafy${Math.floor(Math.random() * 1e6)}`;
  // In production you'd enqueue a background job to call on-chain anchor
  return res.json({ success: true, txHash });
});

// --- Escrows ---
app.post('/escrows', (req: Request, res: Response) => {
  const { invoiceId, tokenAddress, amount } = req.body;
  const id = `ESC-${Date.now()}`;
  const escrow = { id, invoiceId, contractAddress: `0xescrow${id}`, tokenAddress: tokenAddress || '0xmock', depositedAmount: amount || 0, status: 'Pending' };
  db.escrows.push(escrow);
  return res.status(201).json(escrow);
});

app.post('/escrows/:escrowId/deposit', (req: Request, res: Response) => {
  const esc = db.escrows.find((e: any) => e.id === req.params.escrowId);
  if (!esc) return res.status(404).json({ message: 'Escrow not found' });
  const { from, txHash } = req.body;
  esc.depositedAmount = (esc.depositedAmount || 0) + (req.body.amount || 0);
  esc.status = 'Deposited';
  return res.json(esc);
});

// --- Payments ---
app.get('/payments', (req: Request, res: Response) => {
  return res.json(db.payments);
});

// --- Fraud alerts ---
app.get('/fraud-alerts', (req: Request, res: Response) => {
  return res.json(db.fraudAlerts);
});

// --- Notifications ---
app.get('/notifications', (req: Request, res: Response) => {
  return res.json(db.notifications);
});

// --- Identity ---
app.get('/identity', (req: Request, res: Response) => {
  return res.json(db.identity);
});

// --- Disputes ---
app.get('/disputes', (req: Request, res: Response) => {
  return res.json(db.disputes);
});

app.post('/disputes', (req: Request, res: Response) => {
  const { invoiceId, reason } = req.body;
  const id = `D-${Date.now()}`;
  const dispute = { id, parties: `Unknown vs Unknown (invoice ${invoiceId})`, dateFiled: new Date().toISOString(), status: 'Open', reason };
  db.disputes.push(dispute);
  return res.status(201).json(dispute);
});

// --- Health & openapi.json convenience ---
app.get('/health', (req: Request, res: Response) => res.json({ status: 'ok' }));

app.get('/openapi.yaml', (req: Request, res: Response) => {
  // If you placed openapi.yaml in project root, serve it
  const p = path.resolve(process.cwd(), 'openapi.yaml');
  if (fs.existsSync(p)) return res.sendFile(p);
  return res.status(404).send('openapi.yaml not found');
});

app.listen(PORT, () => {
  console.log(`Finote backend mock API listening at http://localhost:${PORT}`);
});
