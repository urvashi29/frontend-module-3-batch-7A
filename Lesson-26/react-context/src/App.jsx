import React from "react";
import MovieCount from "./MovieCount";
import Movie from "./Movie";
import MovieProvider from "./context/MovieProvider";

const App = () => {
  // state uplifting
  // const [movies, setmovies] = useState([
  //   {
  //     id: 1,
  //     movieName: "bandersnatch",
  //     genre: "sci-fiction",
  //     year: 2010,
  //   },
  //   {
  //     id: 2,
  //     movieName: "inception",
  //     genre: "sci-fiction",
  //     year: 2012,
  //   },
  //   {
  //     id: 3,
  //     movieName: "jawan",
  //     genre: "thriller",
  //     year: 2023,
  //   },
  // ]);

  return (
    <>
      <MovieProvider>
        <Movie />
        <MovieCount />
      </MovieProvider>
    </>
  );
};

export default App;
