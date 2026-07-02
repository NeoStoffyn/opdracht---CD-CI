const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>CI/CD Demo App</h1>
    <p>Deze app draait in een Docker container.</p>
    <p>Versie: 1.0.1</p>
    <p>Tijdstip server start: ${new Date().toISOString()}</p>
  `);
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`App luistert op poort ${PORT}`);
});
