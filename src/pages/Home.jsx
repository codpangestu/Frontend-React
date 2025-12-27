import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import MovieGrid from "../components/MovieGrid";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <section style={styles.features}>
        <FeatureCard
          title="Worldwide Trailers"
          desc="More content from countries worldwide."
        />
        <FeatureCard
          title="Thousands of Titles"
          desc="Movies, shows, and documentaries."
        />
        <FeatureCard
          title="Always 100% Free"
          desc="Watch without any payment."
        />
        <FeatureCard
          title="Device Friendly"
          desc="Stream on any device."
        />
      </section>

      <MovieGrid />
    </>
  );
};

const styles = {
  features: {
    display: "flex",
    gap: "20px",
    padding: "60px 80px",
    background: "linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))",
  },
};

export default Home;
