import React from "react";

const DisplayMovie = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => (
        <p>{movie.movieName}</p>
      ))}
    </>
  );
};

export default DisplayMovie;
