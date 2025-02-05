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
const addToFavorites = (movie) => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push(movie);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };
  
  <button onClick={() => addToFavorites(movie)}>❤️ Add to Favorites</button>;
  
export default MovieCard;
