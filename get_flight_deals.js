import { neon } from '@neondatabase/serverless';

export async function handler() {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const rows = await sql('SELECT * FROM flight_deals ORDER BY departure_date ASC');
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rows)
    };
  } catch (error) {
    console.error('Error fetching flight deals:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Failed to fetch flight deals' })
    };
  }
}