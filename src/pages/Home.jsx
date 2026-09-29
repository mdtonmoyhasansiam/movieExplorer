import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedShows from "../components/FeaturedShows";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedShows />
      <Footer />
    </div>
  );
}

export default Home;