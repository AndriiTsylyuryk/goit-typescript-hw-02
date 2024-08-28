import axios from "axios";
import { Photo } from "./types";

interface FetchPhotosResponse {
  data: Photo[];
  headers: any;
}

export const fetchPhotos = async (
  query: string,
  page: number,
  perPage: number
): Promise<FetchPhotosResponse> => {
  const response = await axios.get(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        query,
        page,
        per_page: perPage,
      },
      headers: {
        Authorization: "Client-ID _1lGAIPsgisF2RbcbqEmlfXQPecGaCH0SHkv5XVfpI0",
      },
    }
  );
  return {
    data: response.data.results,
    headers: response.headers,
  };
};
