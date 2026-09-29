import "./MovieModal.css";

function MovieModal({ movie, onClose }) {
  if (!movie) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="movie-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>
          ✕
        </button>

        <img
          className="modal-image"
          src={movie.image?.original || movie.image?.medium}
          alt={movie.name}
        />

        <div className="modal-content">
          <h2>{movie.name}</h2>

          <div className="modal-info">
            <span>⭐ {movie.rating?.average || "N/A"}</span>

            <span>
              📅{" "}
              {movie.premiered
                ? movie.premiered
                : "N/A"}
            </span>
          </div>

          <p>
            <strong>Genre:</strong>{" "}
            {movie.genres?.length
              ? movie.genres.join(", ")
              : "N/A"}
          </p>

          <h3>Overview</h3>

          <div
            className="movie-summary"
            dangerouslySetInnerHTML={{
              __html: movie.summary || "No summary available.",
            }}
          />

          <button className="modal-close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;