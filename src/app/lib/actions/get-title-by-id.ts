"use server"

import { api } from "@/lib/axios";
import { FullTitle } from "../entities/FullTitle";

interface GetTitleRequestParams {
    id: number
}


export async function getTitleByID({ id }: GetTitleRequestParams) {
    try {
        const response = await api.get<FullTitle>(`/title/${id}/details/`, {
            params: {
                apiKey: process.env.WATCHMODE_API_KEY,
            }
        })

        const title = response.data

        return title
    } catch (error) {
      console.error(error);
      throw new Error('Failed to get title.');
    }
}
