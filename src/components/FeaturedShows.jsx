import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FeaturedShows.css";

function FeaturedShows() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => {
        setShows(data.slice(0, 6));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="featured-shows">
      <div className="featured-container">
        <div className="featured-heading">
          <div>
            <p>FEATURED COLLECTION</p>
            <h2>Popular Shows</h2>
          </div>

          <Link to="/movies" className="view-all-button">
            View All
          </Link>
        </div>

        <div className="featured-grid">
          {shows.map((show) => (
            <div className="featured-card" key={show.id}>
              <img
                src={show.image?.medium}
                alt={show.name}
              />

              <div className="featured-card-content">
                <h3>{show.name}</h3>

                <div className="featured-info">
                  <span>⭐ {show.rating?.average || "N/A"}</span>

                  <span>
                    {show.premiered
                      ? show.premiered.slice(0, 4)
                      : "N/A"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedShows;