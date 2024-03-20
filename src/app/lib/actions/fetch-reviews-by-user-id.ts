"use server"

import { unstable_noStore as noStore } from 'next/cache';
import { prisma } from "@/lib/prisma";


interface FetchReviewsByUserIDParams {
    userId: string
}

export async function fetchReviewsByUserID({ userId }: FetchReviewsByUserIDParams) {
    noStore()
    try {
        const reviews = await prisma.review.findMany({
            where: {
                user_id: userId,
            }
        })
        return reviews
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch reviews.');
    }
}
