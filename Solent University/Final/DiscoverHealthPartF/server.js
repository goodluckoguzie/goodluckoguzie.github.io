const express = require('express');
const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const session = require('express-session');
const bcrypt = require('bcrypt');

const app = express();

// Enable CORS for React dev server
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

// Session middleware
app.use(session({
  secret: 'discoverhealth-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 } // 24 hours
}));

// Locate the database file
const dbPath = path.join(__dirname, 'discoverhealth.db');
console.log('[BOOT] Using DB at:', dbPath, fs.existsSync(dbPath) ? '(FOUND)' : '(MISSING)');
const db = new Database(dbPath);

// Debug: list tables
try {
  const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
  console.log('[BOOT] Tables in DB:', tables.map(t => t.name));
} catch (e) {
  console.error('[BOOT] Could not list tables:', e);
}

// Middleware to parse JSON
app.use(express.json());

// Authentication middleware
function isAuthenticated(req, res, next) {
  if (req.session.userId) {
    return next();
  }
  res.status(401).json({ error: 'Unauthorized: Please log in' });
}

// Get current user
app.get('/api/user', (req, res) => {
  if (req.session.userId) {
    try {
      const stmt = db.prepare('SELECT username FROM users WHERE id = ?');
      const user = stmt.get(req.session.userId);
      if (user) {
        return res.json({ username: user.username });
      }
    } catch (err) {
      console.error('[GET /api/user] DB error:', err);
    }
  }
  res.status(401).json({ error: 'Not logged in' });
});

// Friendly root page
app.get('/', (req, res) => {
  res.send('DiscoverHealth API is running. Try <code>/api/resources?region=London</code>');
});

/* POST /api/login */
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (!username?.trim() || !password?.trim()) {
    return res.status(400).json({ error: 'Username and password are required' });
  }
  try {
    const stmt = db.prepare('SELECT id, username, password FROM users WHERE username = ?');
    const user = stmt.get(username.trim());
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    // Assuming plain-text passwords
    if (user.password !== password.trim()) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    req.session.userId = user.id;
    res.json({ message: 'Login successful', username: user.username });
  } catch (err) {
    console.error('[POST /api/login] DB error:', err);
    res.status(500).json({ error: 'Failed to log in' });
  }
});

/* POST /api/signup */
app.post('/api/signup', (req, res) => {
  const { username, password } = req.body;
  if (!username?.trim() || !password?.trim()) {
    return res.status(400).json({ error: 'Username and password are required' });
  }
  try {
    // Check if username exists
    const stmtCheck = db.prepare('SELECT id FROM users WHERE username = ?');
    if (stmtCheck.get(username.trim())) {
      return res.status(400).json({ error: 'Username already exists' });
    }
    // Insert new user
    const stmt = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)');
    const result = stmt.run(username.trim(), password.trim());
    res.status(201).json({ message: 'User created', id: result.lastInsertRowid });
  } catch (err) {
    console.error('[POST /api/signup] DB error:', err);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

/* POST /api/logout */
app.post('/api/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error('[POST /api/logout] Session destroy error:', err);
      return res.status(500).json({ error: 'Failed to log out' });
    }
    res.json({ message: 'Logout successful' });
  });
});

/* GET /api/resources?region=RegionName */
app.get('/api/resources', (req, res) => {
  const { region } = req.query;
  if (!region) {
    return res.status(400).json({ error: 'Region query parameter is required' });
  }
  try {
    const stmt = db.prepare('SELECT * FROM healthcare_resources WHERE region = ?');
    const resources = stmt.all(region);
    // Fetch reviews for each resource
    const reviewStmt = db.prepare('SELECT review FROM reviews WHERE resource_id = ?');
    const resourcesWithReviews = resources.map(resource => ({
      ...resource,
      reviews: reviewStmt.all(resource.id).map(r => r.review)
    }));
    res.json(resourcesWithReviews);
  } catch (err) {
    console.error('[GET /api/resources] DB error:', err);
    res.status(500).json({ error: 'Failed to retrieve resources' });
  }
});

/* POST /api/resources */
app.post('/api/resources', isAuthenticated, (req, res) => {
  const { name, category, country, region, lat, lon, description } = req.body;
  // Validate all fields
  if (!name?.trim() || !category?.trim() || !country?.trim() || !region?.trim() || 
      lat === undefined || lon === undefined || !description?.trim()) {
    return res.status(400).json({ error: 'All fields are required: name, category, country, region, lat, lon, description' });
  }
  try {
    const stmt = db.prepare(`
      INSERT INTO healthcare_resources
        (name, category, country, region, lat, lon, description, recommendations)
      VALUES (?, ?, ?, ?, ?, ?, ?, 0)
    `);
    const result = stmt.run(name.trim(), category.trim(), country.trim(), region.trim(), lat, lon, description.trim());
    res.status(201).json({ id: result.lastInsertRowid });
  } catch (err) {
    console.error('[POST /api/resources] DB error:', err);
    res.status(500).json({ error: 'Failed to add resource' });
  }
});

/* POST /api/resources/:id/recommend */
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

/* POST /api/resources/:id/reviews */
app.post('/api/resources/:id/reviews', isAuthenticated, (req, res) => {
  const { id } = req.params;
  const { review } = req.body;
  if (!review?.trim()) {
    return res.status(400).json({ error: 'Review text is required' });
  }
  try {
    // Validate resource_id
    const resourceStmt = db.prepare('SELECT id FROM healthcare_resources WHERE id = ?');
    if (!resourceStmt.get(id)) {
      return res.status(404).json({ error: 'Resource not found' });
    }
    // Insert review
    const stmt = db.prepare(`
      INSERT INTO reviews (resource_id, user_id, review)
      VALUES (?, ?, ?)
    `);
    const result = stmt.run(id, req.session.userId, review.trim());
    res.status(201).json({ id: result.lastInsertRowid, message: 'Review added' });
  } catch (err) {
    console.error('[POST /api/resources/:id/reviews] DB error:', err);
    res.status(500).json({ error: 'Failed to add review' });
  }
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});