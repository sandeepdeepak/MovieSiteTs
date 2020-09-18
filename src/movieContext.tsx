import React, { useState, createContext } from "react";

export const MovieContext = createContext<any>(null);

export const MovieProvider = (props: any) => {
  const [moviePd, setMoviePd] = useState({
    isAdmin: false,
    selectedMovie: {
      movieName: "",
      movieImageUrl: "",
    },
    moviesList: [
      {
        movieName: "Euphorio",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/show_103832475.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Friends",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/show_0108778.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Lucifier",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/show_022d9669e2b1aa3d24796c818a52d572.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Boys",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/show_103832445.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "The Sonic",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/nBPwOKRmvwA6vURmwEUXwpkl9P.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Castle",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/show_a638446a918bd32ab4b39d8c8a4d7ce4.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "The Office",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/show_0386676.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Attack on Titan",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/show_bd37b71cca6f0d354bbbec9b4c8df725.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Jumanji",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/movie_3a9c64e3de4a4bb4370d69574902ed37.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Good Doctor",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/show_103830699.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Avatar",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/show_0417299.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Family Guy",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/show_0182576.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Come Play",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/movie_36d5e4208e9974be08acd94b8487cf96.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "The 100",
        movieImageUrl:
          "https://img.popcorntime.watch/220/330/thumbs/show_2661044.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Tenant",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/9n0Tu51I53Lb63hejFrvW6YPCXr.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "The Blackout",
        movieImageUrl:
          "https://img.popcorntime.watch/220/330/thumbs/671Md7eYvHzsnuGsLJHRR7htLNr.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "The Connected",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/movie_17982837d3209c1e19f52a822b5d2f7f.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Euphorio",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/show_103832475.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Friends",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/show_0108778.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Lucifier",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/show_022d9669e2b1aa3d24796c818a52d572.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Boys",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/show_103832445.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "The Sonic",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/nBPwOKRmvwA6vURmwEUXwpkl9P.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Euphorio",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/show_103832475.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Friends",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/show_0108778.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Lucifier",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/show_022d9669e2b1aa3d24796c818a52d572.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Boys",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/show_103832445.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "The Sonic",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/nBPwOKRmvwA6vURmwEUXwpkl9P.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Castle",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/show_a638446a918bd32ab4b39d8c8a4d7ce4.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "The Office",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/show_0386676.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Attack on Titan",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/show_bd37b71cca6f0d354bbbec9b4c8df725.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Jumanji",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/movie_3a9c64e3de4a4bb4370d69574902ed37.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Good Doctor",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/show_103830699.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Avatar",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/show_0417299.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Family Guy",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/show_0182576.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Come Play",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/movie_36d5e4208e9974be08acd94b8487cf96.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "The 100",
        movieImageUrl:
          "https://img.popcorntime.watch/220/330/thumbs/show_2661044.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Tenant",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/9n0Tu51I53Lb63hejFrvW6YPCXr.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "The Blackout",
        movieImageUrl:
          "https://img.popcorntime.watch/220/330/thumbs/671Md7eYvHzsnuGsLJHRR7htLNr.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "The Connected",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/movie_17982837d3209c1e19f52a822b5d2f7f.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Euphorio",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/show_103832475.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Friends",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/show_0108778.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Lucifier",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/show_022d9669e2b1aa3d24796c818a52d572.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "Boys",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/show_103832445.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
      {
        movieName: "The Sonic",
        movieImageUrl:
          "https://img.popcorntime.watch/300/450/thumbs/nBPwOKRmvwA6vURmwEUXwpkl9P.jpg",
        moviePlot:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. Starring: Robert Downey Jr. Robert Downey Jr. Chris Evans Director: Anthony Russo Genres: Action, Adventure, Fantasy, Sci-Fi",
        starring: "Robert Downey Jr. Robert Downey Jr. Chris Evans",
        director: "Jeff Fowler",
        genres: "Action, Adventure, Fantasy, Sci-Fi",
      },
    ],
  });
  return (
    <MovieContext.Provider value={[moviePd, setMoviePd]}>
      {props.children}
    </MovieContext.Provider>
  );
};
