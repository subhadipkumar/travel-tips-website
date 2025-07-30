import { neon } from '@neondatabase/serverless';

export async function handler() {
  try {
    if (!process.env.NETLIFY_DATABASE_URL) {
      throw new Error('NETLIFY_DATABASE_URL environment variable is not set. Please configure it in Netlify Dashboard or CLI.');
    }
    const sql = neon(process.env.NETLIFY_DATABASE_URL, {
      fetchOptions: { cache: 'no-store', priority: 'high' }
    });
    const rows = await sql`SELECT * FROM flight_deals ORDER BY departure_date ASC`;
    if (!rows || rows.length === 0) {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([])
      };
    }
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rows)
    };
  } catch (error) {
    console.error('Error fetching flight deals:', {
      message: error.message,
      stack: error.stack,
      name: error.name,
      code: error.code || 'N/A',
      detail: error.detail || 'N/A'
    });
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: `Failed to fetch flight deals: ${error.message}` })
    };
  }
}