import { getTitleByID } from "@/app/lib/actions/get-title-by-id"
import { getUserByID } from "@/app/lib/actions/get-user-by-id"
import { Review } from "@prisma/client"
import clsx from "clsx"
import { Star } from "lucide-react"

interface ReviewProps {
    review: Review
}

export async function ReviewCard({ review }: ReviewProps) {
    const ratings = [1, 2, 3, 4, 5]
    const title = await getTitleByID({ id: review.title_id})
    return (
        <div 
            className="bg-slate-700 p-8 flex flex-col gap-4 rounded-lg border"
        >
            <header className="flex items-center justify-between">
                <div className="text-sm">
                    <span className="text-sm text-muted-foreground">Title</span>
                    <h3 className="text-xl font-bold">{title.title}</h3>
                </div>
            </header>
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
            <p className="text-md">{review.review}</p>
        </div>
    )
}