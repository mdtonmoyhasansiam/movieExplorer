import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p>WELCOME TO MOVIE EXPLORER</p>

        <h1>Discover Your Next Favorite Movie</h1>

        <p>
          Explore amazing movies and shows from around the world.
          Find something interesting to watch today.
        </p>

        <Link to="/movies" className="hero-button">
          Explore Movies
        </Link>
      </div>
    </section>
  );
}

export default Hero;