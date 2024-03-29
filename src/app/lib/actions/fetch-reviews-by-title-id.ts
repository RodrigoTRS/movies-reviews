"use server"

import { unstable_noStore as noStore } from 'next/cache';
import { prisma } from "@/lib/prisma";


interface FetchReviewsByTitleIDParams {
    titleId: number
}

export async function fetchReviewsByTitleID({ titleId }: FetchReviewsByTitleIDParams) {
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
