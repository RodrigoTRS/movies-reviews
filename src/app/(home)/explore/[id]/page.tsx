import { getTitle } from "@/app/lib/actions/get-title";
import { fakeFullTitle } from "@/app/lib/mocked-data/fake-full-title";
import { Backdrop } from "@/components/backdrop";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import { TitleHeader } from "./header";

interface TitlePageParams {
    params: {
        id: string
    }
}

export default async function TitlePage({ params }: TitlePageParams) {
    const id = Number(params.id);

    const title = await getTitle({id})

    
    return (
        <main className="w-full flex flex-col py-12 gap-8">
            <TitleHeader />
            <div className="flex p-12 gap-12 items-start">

                <Image src={title.poster} alt={`${title.title} Poster`} width={180} height={270} className="rounded-lg border-2 "/>
                
                <div className="flex flex-col gap-6">

                    <div className="flex gap-2">
                    {
                        title.genre_names.map((genre, index) => {
                            return (
                                <Badge key={index}>{genre}</Badge>
                            )
                        })}
                    </div>

                    <span className="w-full flex justify-between">
                        <h1 className="font-bold text-3xl">{title.title}</h1>
                        <div className="flex gap-2 items-center">
                            <Star className="text-yellow-400"/>
                            {title.critic_score}
                        </div>
                    </span>

                    <p className="text-muted-foreground">{title.plot_overview}</p>

                </div>
            </div>

            <Backdrop url={title.backdrop} />
        </main>
    )
}