import { API_OPTIONS } from "./constants";

export const fetchFromTMDB = async (url) => {
  try {
    const response = await fetch(url, API_OPTIONS);

    if (!response.ok) {
      console.error(
        `TMDB API Error: ${response.status} ${response.statusText} for ${url}`,
      );
      return null;
    }

    const data = await response.json();
    console.log(`✅ TMDB API Success for ${url}:`, data);
    return data;
  } catch (error) {
    console.error("Error fetching from TMDB:", error);
    return null;
  }
};
