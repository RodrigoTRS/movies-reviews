import { getTitle } from "@/app/lib/actions/get-title";
import { fakeFullTitle } from "@/app/lib/mocked-data/fake-full-title";
import { TitleHeader } from "./header";
import { Backdrop } from "@/components/title-page/backdrop";
import { TitleCard } from "@/components/title-page/title-card";
import { FullTitle } from "@/app/lib/entities/FullTitle";
import { ReviewForm } from "@/components/title-page/review-form";
import { fetchReviewsByTitle } from "@/app/lib/actions/fetch-reviews-by-title";
import { ReviewCard } from "@/components/title-page/review-card";

interface TitlePageParams {
    params: {
        id: string
    }
}

export default async function TitlePage({ params }: TitlePageParams) {
    const id = Number(params.id);

    // const title = await getTitle({id})
    const title: FullTitle = fakeFullTitle

    const reviews = await fetchReviewsByTitle({ titleId: id})
    
    return (
        <main className="w-full flex flex-col py-12 gap-8">
            <TitleHeader />
            <TitleCard title={title} />
            <ReviewForm titleId={title.id}/>
            <h2 className="text-lg ml-4">Reviews</h2>

            <div className="flex flex-col gap-2">
                {reviews.map((review, index) => {
                    return <ReviewCard review={review} key={index} />
                })}
            </div>
            
            <Backdrop url={title.backdrop} />
        </main>
    )
}