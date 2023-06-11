import { db } from '@vercel/postgres';
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
    const client = await db.connect();
//  const pets = " "
//  console.log('++++++++++++++++++++',pets)
  // try {
    const res = await request.json();
   
   
    const id = res['id']
    const NAME = res['NAME']
        
  if(id) {
    const result = await client.sql`update pets set Name = ${NAME} where id =${id};`;
  } else {
    return NextResponse.json( 'plz inter your id', {
        status: 500,
        
      });
  }


  const p = await client.sql`SELECT * from pets ;`;

  return NextResponse.json({  p });
  }