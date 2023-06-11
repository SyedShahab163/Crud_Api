import { db } from '@vercel/postgres';
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const client = await db.connect();
 
  // try {
    // await client.sql`SELECT * from pets;`;
  // } catch (error) {
    // return NextResponse.json({ error }, {
        // status: 500,
        // 
      // });
  // }

  const pets = await client.sql`DELETE FROM Todos WHERE id = 5;`;
  console.log('++++++++++++++++++++++++++++++++++++',pets)
  return NextResponse.json({ pets });
  }