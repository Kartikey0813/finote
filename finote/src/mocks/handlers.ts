// src/mocks/handlers.ts
// resilient handler file: namespace import + any-typed resolver
import * as msw from 'msw';

// use fallback if needed
const rest = (msw as any).rest;

// loose typing so noImplicitAny doesn't complain
type Responder = (req: any, res: any, ctx: any) => any;

export const handlers = [
  rest.get('/api/metrics', ((req: any, res: any, ctx: any) => {
    return res(ctx.json({ totalRevenue: 125450, outstandingPayments: 12300, avgInvoiceAmount: 1500 }));
  }) as Responder),

  rest.get('/api/invoices', ((req: any, res: any, ctx: any) => {
    return res(ctx.json([
      { id: 'INV-2024-001', client: 'Acme Corp', date: '2024-07-20', amount: 5000, status: 'Paid', verification: 'Verified' },
      { id: 'INV-2024-002', client: 'Beta Inc', date: '2024-07-25', amount: 2500, status: 'Pending', verification: 'Verified' },
    ]));
  }) as Responder),

  rest.get('/api/fraud-alerts', ((req: any, res: any, ctx: any) => {
    return res(ctx.json([
      { id: 'FA-001', type: 'Unusual Payment Amount', timestamp: '2024-03-15 14:30', target: 'Invoice #INV-2024-005', severity: 'High' }
    ]));
  }) as Responder),
];
