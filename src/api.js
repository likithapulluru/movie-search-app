import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/search/movie";
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const fetchMovies = async (query) => {
  const response = await axios.get(API_URL, {
    params: { api_key: API_KEY, query },
  });
  return response.data.results;
};
