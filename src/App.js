import React, { useState } from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import { fetchMovies } from "./api";

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const data = await fetchMovies(query);
    setMovies(data);
  };

  return (
    <div>
      <h1>Movie Search App</h1>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
