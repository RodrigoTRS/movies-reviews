"use server"

import { backend } from "@/lib/axios";
import { revalidatePath } from "next/cache";

interface CreateReviewRequestProps {
    titleId: number,
    rating: number,
    review: string
}

export async function createReview(data: CreateReviewRequestProps) {
    try {
        await backend.post("/reviews", data) 
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch categories.');
    }

    revalidatePath(`/explore/${data.titleId}`)
}