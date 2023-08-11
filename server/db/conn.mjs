import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient("mongodb+srv://maharajria05:4p1Rh8gndJUbBF7p@records.a1xuwwi.mongodb.net/records");

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = client.db("records");

export default db;