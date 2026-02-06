// overwatchapi.js
const BASE_URL = "https://overfast-api.tekrop.fr";
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes

// Simple in-memory cache
const cache = {};

/**
 * Fetch with retry for 429 (rate limit) and 504 (gateway timeout)
 */
async function fetchWithRetry(url, retries = 5, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);

      if (response.status === 429 || response.status === 504) {
        console.warn(
          response.status === 429
            ? `Rate limited. Retrying in ${delay}ms... (${i + 1})`
            : `Gateway timeout. Retrying in ${delay}ms... (${i + 1})`
        );
        await new Promise(r => setTimeout(r, delay));
        delay *= 2; // exponential backoff
        continue;
      }

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Failed to fetch: ${response.status} - ${text}`);
      }

      return await response.json();
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise(r => setTimeout(r, delay));
      delay *= 2;
    }
  }
}

/**
 * Get player summary only (avoids heavy career stats)
 */
export async function getAllPlayerData(battleTag) {
  try {
    // Use CORS proxy
    const url = `https://cors-anywhere.herokuapp.com/https://overfast-api.tekrop.fr/players/${battleTag}/stats/summary?platform=pc`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} - ${await response.text()}`);
    }

    const data = await response.json();

    // Now you can process and return it
    const summary = {
      username: data.username,
      avatar: data.avatar,
      title: data.title,
      endorsement: data.endorsement,
    };

    const stats = {
      competitive: data.competitive || {},
      quickplay: data.quickplay || {},
    };

    return { summary, stats };
  } catch (err) {
    console.error("Error fetching player data:", err);
    throw err;
  }
}


/**
 * Format seconds into hh:mm
 */
export function formatTime(seconds) {
  if (!seconds) return "N/A";
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  return `${hrs}h ${mins}m`;
}