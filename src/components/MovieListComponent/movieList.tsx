import React, { Component, useContext } from "react";
import { withRouter } from "react-router-dom";
import "./movieList.scss";

import MovieComponent from "../MovieComponent/movie";
import { MovieContext } from "../../movieContext";

const MovieListComponent = (props: any) => {
  const [moviePd, setMoviePd] = useContext(MovieContext);

  const onClick = (i: number) => {
    let newSelectedMovie = [...moviePd.moviesList][i];
    setMoviePd({ ...moviePd, selectedMovie: newSelectedMovie });
    props.history.push("/movie-description");
  };

  return (
    <div className="movieList">
      {moviePd.moviesList.map((e: any, i: any) => {
        return (
          <MovieComponent
            key={i}
            movieName={e.movieName}
            imgSrc={e.movieImageUrl}
            index={i}
            onClick={() => onClick(i)}
          />
        );
      })}
    </div>
  );
};
export default withRouter(MovieListComponent);
