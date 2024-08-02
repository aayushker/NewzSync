import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const api = process.env.NEXT_PUBLIC_API;

export const getNews = async () => {
  const response = await axios.get(`${api}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data.articles;
};
