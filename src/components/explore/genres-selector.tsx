"use client"

import { Genre } from "@/app/lib/entities/Genre"
import { Badge } from "../ui/badge"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

interface GenresSelectorProps {
    genres: Genre[]
    filteredGenre?: number;
}

export function GenresSelector({ genres, filteredGenre }: GenresSelectorProps) {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function setAsSelected(genre?: number) {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (genre) {
            if (!genre) {
                params.delete("genre")
            } else {
                params.set("genre", String(genre));
            }
        } else {
            params.delete("genre");
        }
    
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="flex items-center gap-2 flex-wrap">
            <Badge
                className="whitespace-nowrap rounded-full hover:cursor-pointer"
                onClick={() => setAsSelected()}
                variant={!filteredGenre ? "default" : "outline"}
            >   
                All
            </Badge>
        {genres.map((genre) => {
            return (
                <Badge 
                    key={genre.id}
                    className="whitespace-nowrap rounded-full hover:cursor-pointer"
                    onClick={() => setAsSelected(genre.id)}
                    variant={filteredGenre === genre.id ? "default" : "outline" }
                >
                    {genre.name}
                </Badge>
            )
        })}
    </div>
    )
}