"use server"

import { api } from "@/lib/axios";
import { Title } from "../entities/Title";

interface FetchTitleRequestParams {
    page?: number
}

interface FetchTitleResponse {
    titles: Title[],
    page: number,
    total_results: number,
    total_pages: number
}

export async function fetchTitles({ page }: FetchTitleRequestParams) {
    try {
        const limit = 15
        const response = await api.get<FetchTitleResponse>("/list-titles", {
            params: {
                apiKey: process.env.WATCHMODE_API_KEY,
                page: page ? page : 1,
                limit
            }
        })

        return {
            limit,
            ...response.data
        };
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch titles.');
    }
}
