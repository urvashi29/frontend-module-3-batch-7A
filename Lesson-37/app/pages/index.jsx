import React from "react";
import { connectToDatabase } from "@/mongo";

const Home = ({ movies }) => {
  console.log(movies);
  return <>Home</>;
};

export default Home;

export async function getServerSideProps() {
  const client = await connectToDatabase();
  const db = client.db();
  const moviesCollection = db.collection("movies");
  const movies = await moviesCollection.find().toArray();

  return {
    props: {
      movies: movies.map((movie) => ({
        id: movie._id.toString(),
        title: movie.title,
        director: movie.director,
      })),
    },
  };
}
