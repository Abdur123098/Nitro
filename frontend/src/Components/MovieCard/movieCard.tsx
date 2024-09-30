import Image from "next/image";
import React from "react";
import "../../Styles/moviecard/moviecard.css";

const MovieCard = () => {
  const movies = [
    { Title: "Avengers", src: "/imgs/avengers.png" },
    { Title: "Avengers: Infinity War", src: "/imgs/infinitywar.png" },
    { Title: "Avengers: Endgame", src: "/imgs/endgame.png" },
    { Title: "Harry Potter", src: "/imgs/harrypotter.png" },
    { Title: "Star Wars", src: "/imgs/starwars.png" },
    { Title: "The Conjuring", src: "/imgs/conjuring.png" },
    { Title: "Insidious", src: "/imgs/insidious.png" },
  ];
  return (
    <div className="movie-container">
      {movies?.map((movie, index) => (
        <div className="movie" key={index}>
          <div className="movie-img">
            <Image src={movie?.src} width={225} height={50} alt="logo" />
          </div>
          <h3 className="movie-title">{movie?.Title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
