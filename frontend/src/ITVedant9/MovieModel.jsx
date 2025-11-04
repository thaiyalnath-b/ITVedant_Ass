import React, { useEffect, useState } from "react";
import "./MovieSearch.css"

function MovieModel({ imdbID, onClose, apiKey }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchDetails = async () => {
      setLoading(true);
      
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}&plot=full`
        );
        const data = await res.json();
        if (mounted)
          setDetails(data.Response === "True" ? data : { Error: data.Error || "Not found" });
      } catch (err) {
        if (mounted) setDetails({ Error: "Network error" });
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchDetails();
    return () => {
      mounted = false;
    };
  }, [imdbID, apiKey]);

  return (
    <div className="model-overlay" onClick={onClose}>
      <div className="model" onClick={(e) => e.stopPropagation()}>
        <button className="model-close" onClick={onClose}>
          &times;
        </button>

        {loading && <p className="info">Loading details...</p>}

        {!loading && details && details.Error && (
          <div className="error">{details.Error}</div>
        )}

        {!loading && details && !details.Error && (
          <div className="detail-body">
            <div className="detail-left">
              <img
                src={
                  details.Poster !== "N/A"
                    ? details.Poster
                    : `${process.env.PUBLIC_URL}/no-poster.png`
                }
                alt={details.Title}
              />
            </div>
            <div className="detail-right">
              <h2>
                {details.Title} <span className="year">({details.Year})</span>
              </h2>
              <p><strong>Genre:</strong> {details.Genre}</p>
              <p><strong>Runtime:</strong> {details.Runtime}</p>
              <p><strong>Director:</strong> {details.Director}</p>
              <p><strong>Actors:</strong> {details.Actors}</p>
              <p><strong>IMDb Rating:</strong> {details.imdbRating}</p>
              <p className="plot"><strong>Plot:</strong> {details.Plot}</p>
              <p><strong>Awards:</strong> {details.Awards}</p>
              <a
                className="imdb-link"
                href={`https://www.imdb.com/title/${details.imdbID}/`}
                target="_blank"
                rel="noreferrer"
              >
                View on IMDb
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieModel;
