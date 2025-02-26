import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb://localhost:27017/Moviesdata"
  );

  return client;
}
