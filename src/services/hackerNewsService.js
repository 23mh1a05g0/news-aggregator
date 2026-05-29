const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchTopStories = async () => {
  const response = await fetch(
    `${API_BASE_URL}/topstories.json`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch top stories");
  }

  return response.json();
};

export const fetchStoryById = async (id) => {
  const response = await fetch(
    `${API_BASE_URL}/item/${id}.json`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch story ${id}`);
  }

  return response.json();
};