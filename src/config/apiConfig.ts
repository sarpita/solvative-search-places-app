export const API_BASE_URL = import.meta.env.VITE_API_URL;
export const API_KEY = import.meta.env.VITE_API_KEY;

export const API_ENDPOINTS = {
  searchPlaces: (query: string, limit: number, page: number) => 
    `${API_BASE_URL}?namePrefix=${query}&limit=${limit}&offset=${page * limit}`,
};