const BASE_URL = "https://best-overwatch-api.herokuapp.com";

export async function getHeroes() {
  const response = await fetch(`${BASE_URL}/heroes`);

  if (!response.ok) {
    throw new Error("Failed to fetch heroes");
  }

  return response.json();
}

export async function getHero(tag) {
  const response = await fetch(`${BASE_URL}/heroes/${tag}`);

  if (!response.ok) {
    throw new Error("Failed to fetch hero");
  }

  return response.json();
}
