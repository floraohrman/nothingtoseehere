
import { useNavigate } from "react-router-dom"; // <--- glöm inte detta

function Home() {
  const navigate = useNavigate(); // <--- här, direkt i början av komponenten

  return (
    <section
      style={{
        textAlign: "center",
        padding: "4rem 2rem",
      }}
    >
      <h1
        style={{
          fontSize: "3.2rem",
          marginBottom: "1rem",
          background: "linear-gradient(90deg,#ffffff,#9f7aea)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Welcome to my Portfolio
      </h1>

      <p
        style={{
          opacity: 0.75,
          maxWidth: "600px",
          margin: "0 auto 2.5rem auto",
        }}
      >
        React SPA with API integration, routing and interactivity.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <button
          onClick={() => navigate("/projects")} // <--- navigate fungerar nu
          style={{
            padding: "0.9rem 2rem",
            borderRadius: "999px",
            border: "none",
            background: "linear-gradient(90deg,#ff5ccf,#8b5cf6)",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          View Projects
        </button>
      </div>
    </section>
  );
}

export default Home;