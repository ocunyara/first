import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ID = searchParams.get('ID');

  try {
    if (!ID) throw new Error('ID is required');
    await sql`DELETE FROM People WHERE id = ${ID};`;
  } catch (error: unknown) {
    let errorMessage = 'An unexpected error occurred';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }

  const message = 'Person removed';
  return NextResponse.json({ message }, { status: 200 });
}
