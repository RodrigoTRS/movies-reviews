"use server"

import { prisma } from "@/lib/prisma";

export async function fetchLatestReviews() {
    try {
        const reviews = await prisma.review.findMany({
            orderBy: {
                created_at: "desc"
            },
            take: 10
        })
        return reviews
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch latest reviews.');
    }
}
