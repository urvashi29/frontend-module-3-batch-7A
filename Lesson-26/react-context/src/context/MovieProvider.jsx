import React, { createContext, useState } from "react";

export const MovieContext = createContext();
console.log(MovieContext);

const MovieProvider = (props) => {
  const [movies, setmovies] = useState([
    {
      id: 1,
      movieName: "bandersnatch",
      genre: "sci-fiction",
      year: 2010,
    },
    {
      id: 2,
      movieName: "inception",
      genre: "sci-fiction",
      year: 2012,
    },
    {
      id: 3,
      movieName: "jawan",
      genre: "thriller",
      year: 2023,
    },
  ]);

  console.log(props);
  console.log(props.children); //Movie, MovieCount
  return (
    <>
      <MovieContext.Provider value={movies}>
        {props.children}
      </MovieContext.Provider>
    </>
  );
};

export default MovieProvider;
