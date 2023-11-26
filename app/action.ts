"use server";

import axios from "axios";

export const fetchAnime = async (page: number) => {
  const { data } = await axios.get(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  return data;
};
