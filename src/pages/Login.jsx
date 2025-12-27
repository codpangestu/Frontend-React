const Login = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.title}>Login</h1>

        <input
          type="email"
          placeholder="Email"
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          style={styles.input}
        />

        <button style={styles.button}>Login</button>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.9))",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },

  card: {
    width: "360px",
    background: "#020617",
    padding: "32px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,.6)",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  title: {
    textAlign: "center",
    marginBottom: "8px",
  },

  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #1e293b",
    background: "#020617",
    color: "#fff",
    outline: "none",
  },

  button: {
    marginTop: "8px",
    padding: "12px",
    background: "#facc15",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Login;
