import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const firstName = searchParams.get('firstName');
  const lastName = searchParams.get('lastName');
  const age = searchParams.get('age');
  const email = searchParams.get('email');

  try {
    if (!firstName || !lastName) throw new Error('First name and last name are required');
    await sql`INSERT INTO People (first_name, last_name, age, email) VALUES (${firstName}, ${lastName}, ${age}, ${email});`;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const people = await sql`SELECT * FROM People;`;
  return NextResponse.json({ people }, { status: 200 });
}
