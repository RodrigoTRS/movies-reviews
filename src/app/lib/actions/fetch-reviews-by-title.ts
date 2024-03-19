"use server"

import { backend } from "@/lib/axios";
import { unstable_noStore as noStore } from 'next/cache';
import { Review } from "../entities/Review";


interface FetchReviewsByTitleParams {
    titleId: number
}



export async function fetchReviewsByTitle({ titleId }: FetchReviewsByTitleParams) {
    noStore()
    try {
        const response = await backend.get<Review[]>("/reviews", {
            params: {
                titleId
            }
        })

        return response.data
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch titles.');
    }
}
