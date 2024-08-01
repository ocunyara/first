import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    // Fetch all people from the database
    const people = await sql`SELECT * FROM People;`;

    // Return the list of people
    return NextResponse.json({ people }, { status: 200 });
  } catch (error) {
    // Handle errors
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}