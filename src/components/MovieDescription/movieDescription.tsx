import React, { Component, useContext } from "react";
import "./movieDescription.scss";

import { MovieContext } from "../../movieContext";
import MovieComponent from "../MovieComponent/movie";

const MovieDescriptionComponent = (props: any) => {
  const [moviePd, setMoviePd] = useContext(MovieContext);

  return (
    <div className="movieDesc">
      <MovieComponent
        movieName={moviePd.selectedMovie.movieName}
        imgSrc={moviePd.selectedMovie.movieImageUrl}
      />
      <div className="right-content">
        <p className="story">{moviePd.selectedMovie.moviePlot}</p>
        <p>
          <b>Starring: </b>
          <i>{moviePd.selectedMovie.starring}</i>
        </p>
        <p>
          <b>Director: </b>
          <i>{moviePd.selectedMovie.director}</i>
        </p>
        <p>
          <b>Genres: </b>
          <i>{moviePd.selectedMovie.genres}</i>
        </p>
      </div>
    </div>
  );
};
export default MovieDescriptionComponent;
