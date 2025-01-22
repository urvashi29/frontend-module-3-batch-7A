import React from "react";
import { useContext } from "react";
import { MovieContext } from "./context/MovieProvider";

const MovieCount = () => {
  const movies = useContext(MovieContext);
  
  return <>Movie Count: {movies.length}</>;
};

export default MovieCount;
