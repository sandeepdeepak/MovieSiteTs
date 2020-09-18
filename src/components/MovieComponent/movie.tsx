import React, { Component, useContext } from "react";
import ButtonComponent from "../ButtonComponent/button";

import { MovieContext } from "../../movieContext";

import "./movie.scss";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

const MovieComponent = (props: any) => {
  const [moviePd, setMoviePd] = useContext(MovieContext);

  const onDelete = (i: any) => {
    console.log(i);
    let newMovieList = moviePd.moviesList.filter(
      (movie: any, index: any) => index != i
    );
    setMoviePd({ ...moviePd, moviesList: newMovieList });
  };

  return (
    <div className="movie">
      <input
        type="image"
        className="movie-image"
        src={props.imgSrc}
        onClick={props.onClick}
      />
      {/* <LazyLoadImage className="movie-image" src={props.imgSrc} effect="blur" /> */}
      <h4 className="movie-name">{props.movieName}</h4>
      {moviePd.isAdmin && (
        <div className="delete-button-placement">
          <ButtonComponent
            bgColor="black"
            color="#FF6463"
            height="2rem"
            width="8rem"
            buttonText="Delete Movie"
            borderColor="#FF6463"
            onClick={() => onDelete(props.index)}
          />
        </div>
      )}
    </div>
  );
};
export default MovieComponent;
