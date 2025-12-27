import { useNavigate } from "react-router-dom";
import ImageHero from "../assets/Image.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section style={styles.hero}>
      <h1 style={styles.title}>Your Gateway to Every Epic Trailer</h1>
      <p style={styles.desc}>
        Stream upcoming movie previews, save your favorites, and never miss a
        premiere again.
      </p>
      <button style={styles.watchBtn} onClick={() => navigate("/watch")}>
        Watch Now
      </button>
    </section>
  );
};

const styles = {
  hero: {
    minHeight: "100vh",
    paddingTop: "10px",
    paddingLeft: "80px",  
    paddingRight: "80px",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.29), rgba(0, 0, 0, 0.32)), url(${ImageHero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",  
    color: "#fff",
  },
  title: {
    fontSize: "48px",
    maxWidth: "800px",
    marginBottom: "10px",
    
  },
  desc: {
    maxWidth: "600px",
    opacity: 0.85,
    marginBottom: "30px",
  },
  watchBtn: {
    width: "fit-content",
    background: "#facc15",
    border: "none",
    padding: "12px 28px",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "6px",
  },
};

export default Hero;
