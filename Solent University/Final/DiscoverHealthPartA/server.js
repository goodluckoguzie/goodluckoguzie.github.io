const express = require('express');
const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const app = express();

// Locate the database file
const dbPath = path.join(__dirname, 'discoverhealth.db');
console.log('[BOOT] Using DB at:', dbPath, fs.existsSync(dbPath) ? '(FOUND)' : '(MISSING)');
const db = new Database(dbPath);

// Debug: list tables so you know the DB is correct
try {
  const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
  console.log('[BOOT] Tables in DB:', tables.map(t => t.name));
} catch (e) {
  console.error('[BOOT] Could not list tables:', e);
}

// Middleware to parse JSON in request bodies
app.use(express.json());

// Friendly root page
app.get('/', (req, res) => {
  res.send('DiscoverHealth API is running. Try <code>/api/resources?region=London</code>');
});

/* 1. GET /api/resources?region=RegionName
   Returns all resources in a given region (task 1). */
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

/* 2. POST /api/resources
   Adds a new resource (task 2). */
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

/* 3. POST /api/resources/:id/recommend
   Increments the like count for a resource (task 3). */
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

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});