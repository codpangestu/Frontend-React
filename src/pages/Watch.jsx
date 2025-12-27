import Navbar from "../components/Navbar";

const movies = [
  { title: "Five Nights at Freddy’s", year: 2025 },
  { title: "Fallout", year: 2024 },
  { title: "Sisu: Road to Revenge", year: 2025 },
  { title: "Now You See Me", year: 2025 },
  { title: "The Running Man", year: 2025 },
  { title: "Wake Up Dead Man", year: 2025 },
  { title: "Percy Jackson", year: 2024 },
  { title: "Chainsaw Man", year: 2024 },
  { title: "Tron: Ares", year: 2025 },
  { title: "Stranger Things", year: 2024 },
];

const Watch = () => {
  return (

    <div style={styles.page}>
    <Navbar />
      <h2 style={styles.sectionTitle}>Featured</h2>

      <div style={styles.grid}>
        {movies.map((movie, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.poster}>
              <span style={styles.badge}>FEATURED</span>
            </div>

            <h4 style={styles.title}>{movie.title}</h4>
            <p style={styles.year}>{movie.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0b0b0b",
    padding: "100px 60px",
    color: "#fff",
  },

  sectionTitle: {
    marginBottom: "24px",
    fontSize: "22px",
    letterSpacing: "1px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "24px",
  },

  card: {
    cursor: "pointer",
  },

  poster: {
    height: "260px",
    background: "linear-gradient(135deg, #111, #222)",
    borderRadius: "12px",
    position: "relative",
    marginBottom: "10px",
    transition: "transform 0.3s",
  },

  badge: {
    position: "absolute",
    top: "10px",
    left: "10px",
    background: "#e50914",
    color: "#fff",
    fontSize: "11px",
    padding: "4px 8px",
    borderRadius: "4px",
    fontWeight: "bold",
  },

  title: {
    fontSize: "14px",
    margin: "6px 0 2px",
  },

  year: {
    fontSize: "12px",
    opacity: 0.6,
  },
};

export default Watch;
