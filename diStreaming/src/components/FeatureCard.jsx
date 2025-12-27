const FeatureCard = ({ title, desc }) => {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p style={{ opacity: 0.8 }}>{desc}</p>
    </div>
  );
};

const styles = {
  card: {
    background: "#020617",
    padding: "24px",
    borderRadius: "14px",
    border: "1px solid #1e293b",
    boxShadow: "0 10px 30px rgba(6, 16, 84, 0.6)",
    flex: 1,
    color: "white"
  },
};

export default FeatureCard;
