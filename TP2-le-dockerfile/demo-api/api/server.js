const express = require('express');
const db = require('./db');
const app = express();
const port = 3000; // changed comment // changed comment

app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

app.get('/', (req, res) => {
  res.json({ ok: true, app: 'demo-api' });
});

app.get('/products', async (req, res) => {
  try {
    const products = await db.getProducts();
    res.json(products);
  } catch (err) {
    res.status(503).json({ error: 'Database unavailable' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
