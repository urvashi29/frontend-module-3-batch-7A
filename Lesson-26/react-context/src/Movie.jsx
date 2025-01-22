import React, { useContext, useState } from "react";
import DisplayMovie from "./DisplayMovie";
import { MovieContext } from "./context/MovieProvider";

const Movie = () => {
  const movies = useContext(MovieContext);
  
  return <DisplayMovie movies={movies} />;
};

export default Movie;
