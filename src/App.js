import React, { useState } from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import MovieDetailsModal from "./MovieDetailsModal";
import { fetchMovies } from "./api";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null); // New state for selected movie

  const handleSearch = async (query) => {
    setIsLoading(true);
    const data = await fetchMovies(query);
    setMovies(data);
    setIsLoading(false);
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie); // Set the selected movie for the modal
  };

  const closeModal = () => {
    setSelectedMovie(null); // Close the modal
  };

  return (
    <div>
      <h1 style={{ color: "#ffffff", textAlign: "center" }}>Movie Search App</h1>
      <SearchBar onSearch={handleSearch} />
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <MovieList movies={movies} onMovieClick={handleMovieClick} />
      )}
      <MovieDetailsModal movie={selectedMovie} onClose={closeModal} />
    </div>
  );
};

export default App;
