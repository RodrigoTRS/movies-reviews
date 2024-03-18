import { getTitle } from "@/app/lib/actions/get-title";
import { fakeFullTitle } from "@/app/lib/mocked-data/fake-full-title";
import { TitleHeader } from "./header";
import { Backdrop } from "@/components/title-page/backdrop";
import { TitleCard } from "@/components/title-page/title-card";
import { FullTitle } from "@/app/lib/entities/FullTitle";
import { ReviewForm } from "@/components/title-page/review-form";

interface TitlePageParams {
    params: {
        id: string
    }
}

export default async function TitlePage({ params }: TitlePageParams) {
    const id = Number(params.id);

    // const title = await getTitle({id})
    const title:FullTitle = fakeFullTitle
    
    return (
        <main className="w-full flex flex-col py-12 gap-8">
            <TitleHeader />
            <TitleCard title={title} />
            <ReviewForm />
            <Backdrop url={title.backdrop} />
        </main>
    )
}