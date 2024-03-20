"use server"

import { backend } from "@/lib/axios";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface CreateReviewRequestProps {
    userId: string,
    titleId: number,
    rating: number,
    review: string,
}

export async function createReview({
    userId, titleId, rating, review
}: CreateReviewRequestProps) {
    try {
        await prisma.review.create({
            data: {
                user_id: userId,
                title_id: titleId,
                rating,
                review,
            }
        })
    } catch (error) {
      console.error(error);
      throw new Error('Failed to create reviews.');
    }

    revalidatePath(`/explore/${titleId}`)
}