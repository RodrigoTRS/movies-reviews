"use client"

import { ShortTitle, ShortTitleTypeMapper } from "@/app/lib/entities/ShortTitle"
import { Badge } from "../ui/badge"
import { capitalizeString } from "@/utils/capitalize-string"
import { Calendar } from "lucide-react"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"

interface TitlesGridProps {
    titles: ShortTitle[],
}

export function TitlesGrid({ titles }: TitlesGridProps) {
    const router = useRouter()

    return (
        <div className="grid grid-cols-3 gap-8">
            {titles.map((title) => {

                const type = ShortTitleTypeMapper.find((mapper) => {
                    return mapper.type === title.type
                })

                return (
                    <div key={title.id} className="flex flex-col justify-between gap-6 p-4 bg-slate-900 rounded-lg border-2 border-slate-800">
                        <div className="flex flex-col gap-6">
                            <span><Badge variant="secondary">{type?.map}</Badge></span>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg">{capitalizeString(title.title)}</h3>
                                <div className="flex gap-2 text-muted-foreground">
                                    <Calendar className="w-6 h-6" />
                                    {title.year}
                                </div>
                            </div>
                        </div>

                        <Button variant="outline"
                            onClick={() => router.push(`explore/${title.id}`)}
                        >
                            Show more
                        </Button>
                    </div>
                )
            })}
        </div>
    )
}