import { db } from '@vercel/postgres';
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const client = await db.connect();
 
  try {
    await client.sql`CREATE TABLE add_Pets ( ( Id serial PRIMARY KEY Name varchar(255), Owner varchar(255) birds_Name );`;
    const names = ['Aseel', 'shahab','gava',,];
    await client.sql`INSERT INTO add_Pets (Name, bieds_Name,Owner) VALUES (${names[0]}, ${names[1]},${names[2]});`;
  } catch (error) {
    return NextResponse.json({ error }, {
        status: 500,
        
      });
  }

  const add_pets = await client.sql`SELECT * FROM Pets;`;
  return NextResponse.json({ add_pets });
  }