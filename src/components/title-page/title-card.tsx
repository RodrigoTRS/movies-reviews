import { FullTitle } from "@/app/lib/entities/FullTitle";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Star } from "lucide-react";

interface TitleCardProps {
    title: FullTitle
}

export function TitleCard({title}: TitleCardProps) {
    return (
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
    )
}