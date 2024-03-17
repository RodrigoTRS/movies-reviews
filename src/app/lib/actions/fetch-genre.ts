"use server"

import { api } from "@/lib/axios";
import { Genre } from "../entities/Genre";

export async function fetchGenres() {
    try {
        const response = await api.get<Genre[]>("/genres", {
            params: {
                apiKey: process.env.WATCHMODE_API_KEY
            }
        })

        const genres = response.data;

        return genres
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch categories.');
    }
}