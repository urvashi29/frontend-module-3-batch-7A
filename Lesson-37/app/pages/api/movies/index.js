import { connectToDatabase } from "@/mongo";

export default async function handler(req, res) {
  // console.log(req.method, req.query);
  // if (req.method === "GET") {
  //   res.status(200).json({ name: "Alex" });
  // } else {
  //   res.status(404).json({ message: "Not found!" });
  // }

  // access movies data from mongodb
  const client = await connectToDatabase(); //built a connect with db
  const db = client.db();
  const moviesCollection = db.collection("movies");
  const movies = await moviesCollection.find().toArray();

  res.status(200).json(movies);
}
