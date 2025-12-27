import { useNavigate } from "react-router-dom";

const MovieGrid = () => {
  const navigate = useNavigate();

  return (
    <section style={styles.wrapper}>
      <div>
        <h2 style={{ fontSize: "36px", color: "#000" }}>See what's new on diStreaming.</h2>
        <p style={{ color: "#111", maxWidth: "500px" }}>
          Select your favorite streaming services to discover more, search
          faster, and get curated recommendations.
        </p>
        <button style={styles.discoverBtn} onClick={() => navigate("/discover")}>
          Discover More Now
        </button>
      </div>

      <div style={styles.grid}>
        {["Movie 1", "Movie 2", "Movie 3", "Movie 4", "Movie 5", "Movie 6"].map(
          (m, i) => (
            <div key={i} style={styles.box}>
              {m}
            </div>
          )
        )}
      </div>
    </section>
  );
};

const styles = {
  wrapper: {
    background: "#facc15",
    padding: "80px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "40px",
    color: "#000",
  },
  discoverBtn: {
    background: "#000",
    color: "#fff",
    border: "none",
    padding: "12px 24px",
    cursor: "pointer",
    borderRadius: "6px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 120px)",
    gap: "14px",
  },
  box: {
    height: "180px",
    background: "#000",
    color: "#fff",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default MovieGrid;
