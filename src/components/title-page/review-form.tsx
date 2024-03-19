"use client"

import { Star } from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { useForm } from "react-hook-form"
import clsx from "clsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { backend } from "@/lib/axios";
import { createReview } from "@/app/lib/actions/create-review";

const reviewFormSchema = z.object({
    review: z.string().min(3),
})

type ReviewFormData = z.infer<typeof reviewFormSchema>

interface ReviewFormProps {
    titleId: number
}

export function ReviewForm({ titleId }: ReviewFormProps) {
    const [rating, setRating] = useState<number>(0)

    const isRatingFilled = rating > 0

    const { handleSubmit, reset, register} = useForm<ReviewFormData>({
        resolver: zodResolver(reviewFormSchema)
    })

    async function handleReviewSubmit(data: ReviewFormData) {
        const formData = { titleId, rating, ...data}
        await createReview(formData)
        setRating(0)
        reset()
    }

    const ratingScale = [1, 2, 3, 4, 5]

    return (
        <form onSubmit={handleSubmit(handleReviewSubmit)}
            className="flex flex-col bg-slate-800 p-8 gap-4 rounded-lg"
        >
            <div className="flex justify-between items-center">
                <span className="text-xl font-bold">Review this film</span>
                <div className="flex gap">
                    { 
                        ratingScale.map((item, index) => {
                            return (
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className={clsx("text-slate-50 w-[32px] h-[32px] hover:text-yellow-200", {
                                        "text-yellow-500 font-bold": item <= rating
                                    })}
                                    onClick={() => setRating(item)}
                                    type="button"
                                    key={index}
                                >
                                    <Star />
                                </Button>
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex gap-4">
                <Textarea
                    className="border-2 border-slate-700 rounded-lg resize-none h-[60px]"
                    placeholder="What are your thoughts about this film?"
                    {...register("review")}
                />
                <Button
                    className="h-[60px] rounded-lg text-white"
                    disabled={!isRatingFilled}
                    type="submit"
                >
                    Submit review
                </Button>
            </div>
        </form>
    )
}