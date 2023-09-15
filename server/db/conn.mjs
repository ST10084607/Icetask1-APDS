import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

//const connectionString = process.env.ATLAS_URI || "";

//const client = new MongoClient("mongodb+srv://maharajria05:4p1Rh8gndJUbBF7p@records.a1xuwwi.mongodb.net/records");

const variable = process.env.MONGO_CONN_STRING
console.log(variable);

const client = new MongoClient(variable);

let conn;
try {
  conn = await client.connect();
  console.log("successfully connected to Db")
} catch(e) {
  console.error(e);
}

let db = client.db("records");

export default db;