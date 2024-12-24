import { MongoClient } from "mongodb";

const uri = process.env.mongoConnectionURL; // Use your custom environment variable
const options = {};

let client;
let clientPromise;

if (!process.env.mongoConnectionURL) {
  throw new Error("Please add your MongoDB connection URL to .env.local as 'mongoConnectionURL'");
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

