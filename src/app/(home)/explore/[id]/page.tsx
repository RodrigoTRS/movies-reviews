import { fakeFullTitle } from "@/app/lib/mocked-data/fake-full-title";
import { Backdrop } from "@/components/title-page/backdrop";
import { TitleCard } from "@/components/title-page/title-card";
import { FullTitle } from "@/app/lib/entities/FullTitle";
import { ReviewForm } from "@/components/title-page/review-form";
import { fetchReviewsByTitleID } from "@/app/lib/actions/fetch-reviews-by-title-id";
import { ReviewCard } from "@/components/title-page/review-card";
import { ChevronLeft, LogIn } from "lucide-react";
import Link from "next/link";
import { auth } from "../../../../../auth";
import { Card } from "@/components/ui/card";
import { getUserByEmail } from "@/app/lib/actions/get-user-by-email";
import { RedirectToLoginButton } from "@/components/title-page/redirect-to-login-button";
import { getUserByID } from "@/app/lib/actions/get-user-by-id";

interface TitlePageParams {
    params: {
        id: string
    }
}

export default async function TitlePage({ params }: TitlePageParams) {
    const id = Number(params.id);

    const session = await auth()
    const user = await getUserByID({ id: session?.user?.id!})
    const reviews = await fetchReviewsByTitleID({ titleId: id})
    // const title = await getTitle({id})

    const title: FullTitle = fakeFullTitle

    
        return (
            <main className="w-full flex flex-col py-12 gap-8">
                <header>
                    <Link href="/explore" className="gap-2 pl-2 flex items-center">
                        <ChevronLeft size={20} />
                        <span>Back</span>
                    </Link>
                </header>
                <TitleCard title={title} />
    
                <Card className="bg-slate-900 p-8">
                    {session
                        ? <ReviewForm titleId={title.id} userId={user?.id!} />
                        : <MustBeLoggedIn />
                    }
                </Card>
    
    
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

function MustBeLoggedIn() {
    return (
        <div className="flex items-center justify-between w-full">
            <span className="text-lg">You must be logged in to make a review.</span>
            <RedirectToLoginButton />
        </div>
    )
}