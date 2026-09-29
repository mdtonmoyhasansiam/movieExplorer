import { useEffect, useState } from "react";
import "./MovieList.css";
import MovieModal from "./MovieModal";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMovies = (url) => {
    setLoading(true);
    setError("");

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        return response.json();
      })
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Unable to load movies. Please try again.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMovies("https://api.tvmaze.com/shows");
  }, []);

  const handleSearch = () => {
    if (search.trim() === "") {
      fetchMovies("https://api.tvmaze.com/shows");
      return;
    }

    fetchMovies(
      `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(
        search
      )}`
    );
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="movie-list">
      <div className="movie-list-container">
        <h1>Explore Movies & Shows</h1>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyDown={handleKeyDown}
          />

          <button onClick={handleSearch}>Search</button>
        </div>

        {loading && (
          <div className="status-message">
            <p>Loading movies...</p>
          </div>
        )}

        {!loading && error && (
          <div className="status-message error-message">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && movies.length === 0 && (
          <div className="status-message">
            <p>No movies or shows found.</p>
          </div>
        )}

        {!loading && !error && movies.length > 0 && (
          <div className="movie-grid">
            {movies.map((movie) => (
              <div className="movie-card" key={movie.id}>
                <img
                  src={
                    movie.image?.medium ||
                    "https://via.placeholder.com/300x450?text=No+Image"
                  }
                  alt={movie.name}
                />

                <div className="movie-card-content">
                  <h3>{movie.name}</h3>

                  <div className="movie-info">
                    <span>
                      ⭐ {movie.rating?.average || "N/A"}
                    </span>

                    <span>
                      📅{" "}
                      {movie.premiered
                        ? movie.premiered.slice(0, 4)
                        : "N/A"}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedMovie(movie)}
                  >
                    See Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </section>
  );
}

export default MovieList;