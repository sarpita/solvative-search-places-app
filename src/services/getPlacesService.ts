import axios from 'axios';
import { Place } from '../models';
import { API_ENDPOINTS } from '../config/apiConfig';
interface PlacesResponse {
  data: Place[];
}

export const getPlacesService = async (query: string, limit: number, page: number): Promise<Place[]> => {
  const options = {
    method: 'GET',
    url: API_ENDPOINTS.searchPlaces(query, limit, page),
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_API_KEY!,
      'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
    }
  };

  try {
    const response = await axios.request<PlacesResponse>(options);
    return response.data?.data || [];
  } catch (error) {
    console.error("Error fetching places", error);
    return [];
  }
};
