"use server"

import { api } from "@/lib/axios";
import { ShortTitle } from "../entities/ShortTitle";
import { unstable_noStore as noStore } from 'next/cache';


interface FetchTitleRequestParams {
    page: number
    genres?: number
}

interface FetchTitleResponse {
    titles: ShortTitle[],
    page: number,
    total_results: number,
    total_pages: number
}

export async function fetchTitles({ page, genres }: FetchTitleRequestParams) {
    noStore()
    try {
        const limit = 15
        if (!genres) {
            const response = await api.get<FetchTitleResponse>("/list-titles", {
                params: {
                    apiKey: process.env.WATCHMODE_API_KEY,
                    page,
                    limit,
                }
            })
    
            return {
                limit,
                ...response.data
            };
        } else {
            const response = await api.get<FetchTitleResponse>("/list-titles", {
                params: {
                    apiKey: process.env.WATCHMODE_API_KEY,
                    page,
                    limit,
                    genres
                }
            })
    
            return {
                limit,
                ...response.data
            };
        }
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch titles.');
    }
}
