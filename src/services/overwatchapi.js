const BASE_URL = "https://overfast-api.tekrop.fr";

export async function getPlayerSummary(playerId) {
  const response = await fetch(`${BASE_URL}/players/${playerId}/stats/summary?platform=pc`);
  if (!response.ok) {
    throw new Error("Failed to fetch player summary");
  }
  return response.json();
}

export async function getPlayerCareerStats(playerId, gamemode = "competitive") {
  const response = await fetch(
    `${BASE_URL}/players/${playerId}/stats/career?platform=pc&gamemode=${gamemode}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch player career stats");
  }
  return response.json();
}