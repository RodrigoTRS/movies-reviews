import { Review } from "@prisma/client"
import clsx from "clsx"
import { Star } from "lucide-react"

interface ReviewProps {
    review: Review
}

export function ReviewCard({ review }: ReviewProps) {
    const ratings = [1, 2, 3, 4, 5]

    return (
        <div 
            className="bg-slate-700 p-8 flex flex-col gap-4 rounded-lg border"
        >
            <header className="flex items-center justify-between">
                <h3 className="text-lg font-bold">User name</h3>
                <div className="flex gap-2">
                    {ratings.map((_, index) => {
                        return (
                            <Star key={index} className={clsx(
                                "text-muted-foreground", {
                                "text-yellow-500": index < Number(review.rating)
                            })}/>
                        )
                    })}
                </div>
            </header>
            <p className="text-md text-muted-foreground">{review.review}</p>
        </div>
    )
}