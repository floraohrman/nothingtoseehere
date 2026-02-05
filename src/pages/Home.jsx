import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPlayer } from "../services/overwatchapi"; // adjust path

function Home() {
  const navigate = useNavigate();

  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getPlayer() {
    try {
      const res = await fetch(
        "https://best-overwatch-api.herokuapp.com/player/pc/eu/strand-21806"
      );

      const data = await res.json();

      setPlayer(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
  async function fetchPlayer() {
    try {
      const data = await getPlayer("pc", "eu", "strand-21806");
      setPlayer(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  fetchPlayer();
}, []);

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

      <button
        onClick={() => navigate("/projects")}
        style={{
          padding: "0.9rem 2rem",
          borderRadius: "999px",
          border: "none",
          background: "linear-gradient(90deg,#ff5ccf,#8b5cf6)",
          color: "white",
          fontWeight: "600",
          cursor: "pointer",
          marginBottom: "3rem",
        }}
      >
        View Projects
      </button>

      {/* PLAYER CARD */}
      <div
        style={{
          maxWidth: "650px",
          margin: "0 auto",
          padding: "2rem",
          borderRadius: "14px",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h2>My Overwatch Stats</h2>

        {loading && <p>Loading stats...</p>}

        {player && (
          <>
            <img
              src={player.portrait}
              alt="portrait"
              style={{
                width: "120px",
                borderRadius: "50%",
                marginBottom: "1rem",
              }}
            />

            <h3>{player.username}</h3>

            <p>⭐ Level: {player.level}</p>

            <p>
              🎮 Quickplay Wins:{" "}
              {player.games?.quickplay?.won ?? "N/A"}
            </p>

            <p>
              🏆 Competitive Wins:{" "}
              {player.games?.competitive?.won ?? "N/A"}
            </p>

            <p>
              ⏱ Quickplay Time:{" "}
              {player.playtime?.quickplay ?? "N/A"}
            </p>

            <p>
              ⏱ Competitive Time:{" "}
              {player.playtime?.competitive ?? "N/A"}
            </p>

            {player.private && (
              <p>⚠ Profile is private</p>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default Home;