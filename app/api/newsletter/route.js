// app/api/newsletter/route.js

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
const dbName = "newsletterDB"; // You can change the DB name if needed

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, country, consent } = body;

    if (!name || !email || !country || !consent) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        {
          status: 400,
        }
      );
    }

    const conn = await client.connect();
    const db = conn.db(dbName);
    const collection = db.collection("signups");

    await collection.insertOne({
      name,
      email,
      country,
      consent,
      date: new Date(),
    });

    return new Response(JSON.stringify({ message: "Signup successful." }), {
      status: 201,
    });
  } catch (err) {
    console.error("Newsletter signup failed:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
