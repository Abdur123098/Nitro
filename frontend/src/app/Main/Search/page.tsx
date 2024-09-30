import React from "react";
import "../../../Styles/Search/search.css"; // Assuming you have a styles.css file for custom styles
import Image from "next/image";
import MovieCard from "@/Components/MovieCard/movieCard";

const Page = () => {
  const genres = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Romance"];

  return (
    <div className="main-div">
      <div className="input-container">
        <div className="logo">
          <Image
            src={"/imgs/nitrologo.jpg"}
            width={50}
            height={50}
            alt="logo"
          />
        </div>
        <input
          type="text"
          className="search-bar"
          placeholder="Search movies..."
        />
        <select className="genre-selector">
          <option value="">Select Genre</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <MovieCard />
    </div>
  );
};

export default Page;
