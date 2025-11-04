const Database = require('better-sqlite3');
const path = require('path');

// Create or open the database file in this folder
const dbPath = path.join(__dirname, 'discoverhealth.db');
const db = new Database(dbPath);

// Enforce foreign-key constraints
db.exec('PRAGMA foreign_keys = ON;');

// Create tables if they don't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS healthcare_resources (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    country TEXT NOT NULL,
    region TEXT NOT NULL,
    lat REAL NOT NULL,
    lon REAL NOT NULL,
    description TEXT NOT NULL,
    recommendations INTEGER NOT NULL DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    isAdmin INTEGER NOT NULL DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    resource_id INTEGER NOT NULL,
    review TEXT NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY(resource_id) REFERENCES healthcare_resources(id) ON DELETE CASCADE,
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
  );
`);

// Insert sample healthcare resources (so queries return data)
db.exec(`
  INSERT INTO healthcare_resources (name, category, country, region, lat, lon, description, recommendations)
  VALUES
    ('St Thomas Hospital', 'Hospital', 'UK', 'London', 51.4980, -0.1195, 'Major teaching hospital on the Thames.', 5),
    ('Manchester Clinic', 'Clinic', 'UK', 'Manchester', 53.4808, -2.2426, 'Community clinic in central Manchester.', 2),
    ('Southampton Health Centre', 'Health Centre', 'UK', 'Southampton', 50.9097, -1.4044, 'General health services for families.', 0)
`);

// Insert a sample user
db.exec(`
  INSERT OR IGNORE INTO users (username, password, isAdmin)
  VALUES ('admin', 'password', 1), ('user', 'password', 0)
`);

console.log('Database created and seeded successfully at', dbPath);
