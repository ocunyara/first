import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(peopleID: number) {
  try {
    // Delete the person with id 1 from the database
    await sql`DELETE FROM People WHERE id = ?#{[0].property}`;

    // Return a success message
    return NextResponse.json({ message: `Person with id ${peopleID} deleted successfully` }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}