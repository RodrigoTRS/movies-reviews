"use server"

import { unstable_noStore as noStore } from 'next/cache';
import { prisma } from "@/lib/prisma";


interface FetchReviewsByIdParams {
    titleId: number
}

export async function fetchReviewsById({ titleId }: FetchReviewsByIdParams) {
    noStore()
    try {
        const reviews = await prisma.review.findMany({
            where: {
                title_id: titleId,
            }
        })
        return reviews
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch reviews.');
    }
}
