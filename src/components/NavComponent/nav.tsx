import React, { Component, useContext, useState } from "react";
import "./nav.scss";
import ButtonComponent from "../ButtonComponent/button";
import ModalComponent from "../ModalComponent/modal";
import { MovieContext } from "../../movieContext";

const NavComponent = (props: any) => {
  const [moviePd, setMoviePd] = useContext(MovieContext);
  const [show, setShow] = useState(false);
  const [movieName, setMovieName] = useState("");
  const [movieImgUrl, setMovieImgUrl] = useState("");

  const showModal = (e: any) => {
    setShow(!show);
    if (show) {
      onAddMovie(movieName, movieImgUrl);
    }
  };

  const onAddMovie = (movieName: any, movieImageUrl: any) => {
    let newMovieList = [...moviePd.moviesList];
    newMovieList.push({
      movieName,
      movieImageUrl,
    });
    setMoviePd({ ...moviePd, moviesList: newMovieList });
  };

  const updateMovieNameInput = (event: any) => {
    setMovieName(event.target.value);
  };

  const updateMovieImgUrlInput = (event: any) => {
    setMovieImgUrl(event.target.value);
  };

  const changeIsAdmin = (value: any) => {
    console.log(value);
    setMoviePd({ ...moviePd, isAdmin: value });
    console.log(moviePd);
  };

  return (
    <div className="nav">
      <div className="nav-image">
        <img
          className="logo"
          src="https://popcorntime.watch/templates/cartoonhd/assets/images/logo.png"
        ></img>
      </div>
      <div className="nav-remaining">
        <ButtonComponent
          bgColor="black"
          color="white"
          height="2rem"
          width="5rem"
          buttonText="Admin"
          borderColor="#4fb5f5"
          isFocused={moviePd.isAdmin}
          onClick={() => changeIsAdmin(true)}
        />
        <ButtonComponent
          bgColor="black"
          color="white"
          height="2rem"
          width="5rem"
          buttonText="User"
          borderColor="#4fb5f5"
          isFocused={!moviePd.isAdmin}
          onClick={() => changeIsAdmin(false)}
        />
        {moviePd.isAdmin && (
          <div className="App">
            <ButtonComponent
              className="add-button"
              bgColor="white"
              color="black"
              height="2.5rem"
              width="7rem"
              buttonText="Add Movie"
              borderColor="white"
              onClick={showModal}
            />

            <ModalComponent onClose={showModal} show={show} title="Add Movie">
              <h4>Movie name : </h4>
              <input
                style={{ width: "20rem" }}
                type="text"
                onChange={updateMovieNameInput}
              ></input>

              <h4>Movie Img Url : </h4>
              <input
                style={{ width: "20rem" }}
                type="text"
                onChange={updateMovieImgUrlInput}
              ></input>
            </ModalComponent>
          </div>
        )}
      </div>
    </div>
  );
};
export default NavComponent;
