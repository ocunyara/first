import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');
    const firstName = searchParams.get('firstName');

  try {
    if (!email) throw new Error('Email is required');

    const result = await sql`SELECT * FROM People WHERE (email, first_name) = (${email}, ${firstName});`;

    if (result.rowCount === 0) {
      return NextResponse.json({ exists: false }, { status: 200 });
    } else {
      return NextResponse.json({ exists: true, person: result.rows[0] }, { status: 200 });
    }
  } catch (error: unknown) {
    let errorMessage = 'An unexpected error occurred';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}