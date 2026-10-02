/**
 * Payment Service - dummy demo implementation
 * Demo microservice for processing payments.
 *
 * In-memory CRUD API matching openapi.yaml. No real persistence or auth -
 * for demo purposes only.
 */
const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4004;

let payments = [
  {
    "id": "p-1",
    "orderId": "o-1",
    "amount": 49.99,
    "currency": "USD",
    "status": "completed"
  },
  {
    "id": "p-2",
    "orderId": "o-2",
    "amount": 19.99,
    "currency": "USD",
    "status": "pending"
  }
];

function nextId() {
  return 'p-' + (Math.floor(Math.random() * 90000) + 10000);
}

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/payments', (req, res) => {
  res.json(payments);
});

app.get('/payments/:id', (req, res) => {
  const found = payments.find((r) => r.id === req.params.id);
  if (!found) return res.status(404).json({ error: 'payment not found' });
  res.json(found);
});

app.post('/payments', (req, res) => {
  const created = { id: nextId(), ...req.body };
  payments.push(created);
  res.status(201).json(created);
});

app.put('/payments/:id', (req, res) => {
  const idx = payments.findIndex((r) => r.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'payment not found' });
  payments[idx] = { ...payments[idx], ...req.body, id: req.params.id };
  res.json(payments[idx]);
});

app.delete('/payments/:id', (req, res) => {
  const idx = payments.findIndex((r) => r.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'payment not found' });
  payments.splice(idx, 1);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Payment Service demo listening on http://localhost:${PORT}`);
});

module.exports = app;
