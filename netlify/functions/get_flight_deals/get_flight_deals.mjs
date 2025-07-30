import { neon } from '@netlify/neon';

export async function handler() {
  try {
    const sql = neon();
    const rows = await sql`SELECT * FROM flight_deals ORDER BY departure_date ASC`;
    console.log('Query result:', rows.map(row => ({
      ...row,
      deal_price_type: typeof row.deal_price,
      regular_price_previous_years_type: typeof row.regular_price_previous_years
    })));
    if (!rows || rows.length === 0) {
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify([])
      };
    }
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
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
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ error: `Failed to fetch flight deals: ${error.message}` })
    };
  }
}