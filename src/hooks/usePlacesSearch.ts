import { useState } from "react";
import { getPlacesService } from "../services/getPlacesService";
import { Place } from "../models";

const usePlacesSearch = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const searchPlaces = async (query: string, limit: number, page: number) => {
    if (query.trim() === '') {
      setPlaces([]);
      return;
    }
    
    setLoading(true);
    try {
      const fetchedPlaces = await getPlacesService(query, limit, page);
      setPlaces(fetchedPlaces);
    } catch (error) {
      console.error(error);
      setPlaces([]); // Handle error gracefully
    } finally {
      setLoading(false);
    }
  };

  return { places, loading, searchPlaces };
};

export default usePlacesSearch;
