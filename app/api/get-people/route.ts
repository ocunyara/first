import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch all people from the database
    const { rows } = await sql`SELECT * FROM People;`;

    // Return the list of people
    return NextResponse.json({ rows }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}