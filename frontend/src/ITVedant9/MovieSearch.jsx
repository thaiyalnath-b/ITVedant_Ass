import React, { useState, useEffect } from "react";
import MovieModal from "./MovieModel";
import "./Moviesearch.css";

const API_KEY = "0a29d0b18a015f5b930e495750ce3de4";

function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        setMovies(data.results);
      } else {
        setError("No popular movies found.");
      }
    } catch {
      setError("Failed to load popular movies.");
    } finally {
      setLoading(false);
    }
  };

  const searchMovies = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      fetchPopularMovies(); 
      return;
    }

    setLoading(true);
    setError("");
    setMovies([]);

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
          query
        )}`
      );
      const data = await res.json();

      if (data.results && data.results.length > 0) {
        setMovies(data.results);
      } else {
        setError("No movies found.");
      }
    } catch {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="movie-container">
      <h1>Movie Search</h1>

      <form className="search-form" onSubmit={searchMovies}>
        <input
          className="search-input"
          placeholder="Search movies by title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>

      {loading && <p className="info">Loading...</p>}
      {error && <p className="error">{error}</p>}

      <h2 className="section-title">
        {query ? "Search Results" : "Popular Movies"}
      </h2>

      <div className="results-grid">
        {movies.map((m) => (
          <div
            key={m.id}
            className="movie-card"
            onClick={() => setSelectedMovie(m)}
          >
            <img
              src={
                m.poster_path
                  ? `https://image.tmdb.org/t/p/w300${m.poster_path}`
                  : "https://via.placeholder.com/300x450?text=No+Poster"
              }
              alt={m.title}
            />
            <div className="movie-info">
              <h3>{m.title}</h3>
              <p>{m.release_date ? m.release_date.slice(0, 4) : "N/A"}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}

export default MovieSearch;
