// seed.ts
import pool from '@/lib/db';

async function seedDatabase() {
  try {
    const client = await pool.connect();

    // Drop tables if they exist (optional, for resetting)
    await client.query('DROP TABLE IF EXISTS users;');

    // Create tables
    await client.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100)
      );
    `);

    // Insert initial data
    await client.query(`
      INSERT INTO users (name, email) VALUES
      ($1, $2),
      ($3, $4);
    `, ['John Doe', 'john@example.com', 'Jane Doe', 'jane@example.com']);

    console.log('Database seeded successfully');
    client.release();
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    await pool.end();
  }
}

seedDatabase();
