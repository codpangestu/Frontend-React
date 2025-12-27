import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>diStreaming</h2>
      <button style={styles.loginBtn} onClick={() => navigate("/login")}>
        Login
      </button>
    </nav>
  );
};

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "70px",
    background: "rgba(0, 0, 0, 0.66)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 40px",
    zIndex: 1000,
  },
  logo: {
    color: "#facc15",
    margin: 0,
  },
  loginBtn: {
    background: "#facc15",
    border: "none",
    padding: "8px 16px",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "6px",
  },
};

export default Navbar;
