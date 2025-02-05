import React from "react";

const MovieCard = ({ movie }) => {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie-card">
      <img src={IMAGE_BASE_URL + movie.poster_path} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>⭐ {movie.vote_average}</p>
    </div>
  );
};

export default MovieCard;
