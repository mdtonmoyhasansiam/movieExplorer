import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <h2>🎬 Movie Explorer</h2>

      <div>
        <a href="/">Home</a>
        <a href="/movies">Movies</a>
      </div>
    </nav>
  );
}

export default Navbar;