import React from "react";

const placeholderImage = "https://moviesearchtmdb.netlify.app/image-not-found.png";
const MovieCard = ({ movie, onClick }) => {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
  const imageUrl = movie.poster_path ? IMAGE_BASE_URL + movie.poster_path : placeholderImage; // Fallback to placeholder if no image

  return (
    <div className="movie-card" onClick={() => onClick(movie)}>
      <img src={imageUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>⭐ {movie.vote_average}</p>
    </div>
  );
};

export default MovieCard;
