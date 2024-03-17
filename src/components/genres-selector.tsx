"use client"

import { Genre } from "@/app/lib/entities/Genre"
import { Badge } from "./ui/badge"
import { useState } from "react"

interface GenresSelectorProps {
    genres: Genre[]
}

export function GenresSelector({ genres }: GenresSelectorProps) {
    const [selectedGenre, setSelectedGenre] = useState<number>(0)

    function setAsSelected(genreId: number) {
        setSelectedGenre(genreId)
    }

    const allGenre: Genre = {
        id: 0,
        name: "All",
        tmdb_id: null,
    }

    const allGenresArray = [allGenre, ...genres] 

    return (
        <div className="flex items-center gap-2 flex-wrap">
        {allGenresArray.map((genre) => {
            return (
                <Badge 
                    key={genre.id}
                    className="whitespace-nowrap rounded-full hover:cursor-pointer"
                    onClick={() => setAsSelected(genre.id)}
                    variant={genre.id === selectedGenre ? "default" : "outline"}
                >
                    {genre.name}
                </Badge>
            )
        })}
    </div>
    )
}