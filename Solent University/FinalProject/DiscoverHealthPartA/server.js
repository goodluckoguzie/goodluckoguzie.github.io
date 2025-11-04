const express = require('express');
const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const app = express();

// --- Open database with an absolute path + log what we opened
const dbPath = path.join(__dirname, 'discoverhealth.db');
console.log('[BOOT] Using DB at:', dbPath, fs.existsSync(dbPath) ? '(FOUND)' : '(MISSING)');
const db = new Database(dbPath);

// --- Optional: list tables at startup (super useful)
try {
  const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
  console.log('[BOOT] Tables in DB:', tables.map(t => t.name));
} catch (e) {
  console.error('[BOOT] Could not read sqlite_master:', e);
}

app.use(express.json());

// Optional: friendly root so you don’t see “Cannot GET /”
app.get('/', (req, res) => {
  res.send('DiscoverHealth API is running. Try <code>/api/resources?region=London</code>');
});

// --- Task 1: GET resources by region
app.get('/api/resources', (req, res) => {
  const { region } = req.query;
  if (!region) {
    return res.status(400).json({ error: 'Region query parameter is required' });
  }
  try {
    const stmt = db.prepare('SELECT * FROM healthcare_resources WHERE region = ?');
    const resources = stmt.all(region);
    res.json(resources);
  } catch (err) {
    console.error('[GET /api/resources] DB error:', err);
    res.status(500).json({ error: 'Failed to retrieve resources' });
  }
});

// --- Task 2: POST add a resource
app.post('/api/resources', (req, res) => {
  const { name, category, country, region, lat, lon, description } = req.body;
  try {
    const stmt = db.prepare(`
      INSERT INTO healthcare_resources
        (name, category, country, region, lat, lon, description, recommendations)
      VALUES (?, ?, ?, ?, ?, ?, ?, 0)
    `);
    const result = stmt.run(name, category, country, region, lat, lon, description);
    res.status(201).json({ id: result.lastInsertRowid });
  } catch (err) {
    console.error('[POST /api/resources] DB error:', err);
    res.status(500).json({ error: 'Failed to add resource' });
  }
});

// --- Task 3: POST like/recommend a resource
app.post('/api/resources/:id/recommend', (req, res) => {
  const { id } = req.params;
  try {
    const stmt = db.prepare(`
      UPDATE healthcare_resources
      SET recommendations = recommendations + 1
      WHERE id = ?
    `);
    const result = stmt.run(id);
    if (result.changes === 0) {
      return res.status(404).json({ error: 'Resource not found' });
    }
    res.json({ message: 'Recommendation added' });
  } catch (err) {
    console.error('[POST /api/resources/:id/recommend] DB error:', err);
    res.status(500).json({ error: 'Failed to recommend resource' });
  }
});

// --- Optional debug helpers (hit these in your browser if needed)
app.get('/debug/tables', (req, res) => {
  const rows = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
  res.json(rows.map(r => r.name));
});
app.get('/debug/regions', (req, res) => {
  try {
    const rows = db.prepare("SELECT DISTINCT region FROM healthcare_resources ORDER BY region").all();
    res.json(rows.map(r => r.region));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
