import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import NavComponent from "./components/NavComponent/nav";
import MovieListComponent from "./components/MovieListComponent/movieList";
import { moviesList } from "./mock-data/moviesListMock";
import { MovieProvider } from "./movieContext";

ReactDOM.render(
  <React.StrictMode>
    <MovieProvider>
      <NavComponent />
      <MovieListComponent />
    </MovieProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
