import { db } from '@vercel/postgres';
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const client = await db.connect();
 
  try {
    await client.sql`CREATE TABLE Pets1 ( Name varchar(255), birds varchar(255) );`;
    const names = ['Fiona', 'Lucy'];
    await client.sql`INSERT INTO Pets (Name, Owner) VALUES (${names[0]}, ${names[1]});`;
  } catch (error) {
    return NextResponse.json({ error }, {
        status: 500,
        
      });
  }

  const pets1 = await client.sql`SELECT * FROM Pets1;`;
  return NextResponse.json({ pets1 });
  }