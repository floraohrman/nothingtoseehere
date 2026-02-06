import { useEffect, useState } from "react";
import { getAllPlayerData, formatTime } from "../services/overwatchapi";

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const playerData = await getAllPlayerData("strand-21806");
        setData(playerData);
      } catch (err) {
        console.error("Error fetching player data:", err);
        setError("Failed to load player data.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading stats...</p>;
  if (error) return <p>{error}</p>;

  const summary = data.summary;
  const stats = data.stats.pc;

  return (
    <div>
      <h1>{summary.username}</h1>
      <p>Endorsement: {summary.endorsement?.level ?? "N/A"}</p>
      <p>Competitive Time Played: {formatTime(stats.competitive.time_played)}</p>
      <p>Quickplay Time Played: {formatTime(stats.quickplay.time_played)}</p>
    </div>
  );
}

export default Home;