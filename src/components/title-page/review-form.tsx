"use client"

import { Star } from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import clsx from "clsx";

export function ReviewForm() {
    const [rating, setRating] = useState<number>(0)

    const ratingScale = [1, 2, 3, 4, 5]

    function handleSetRating(item: number) {
        setRating(item)
    }

    return (
        <div className="flex flex-col bg-slate-800 p-12 gap-4 rounded-lg">
            <div className="flex justify-between items-center">
                <span className="text-xl font-bold">Review this film</span>
                <div className="flex gap">
                    { 
                        ratingScale.map((item, index) => {
                            return (
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className={clsx("text-slate-50 w-[32px] h-[32px] hover:text-yellow-200", {
                                        "text-yellow-500 font-bold": item <= rating
                                    })}
                                    onClick={() => handleSetRating(item)}
                                    key={index}
                                >
                                    <Star />
                                </Button>
                            )
                        })
                    }
                </div>
            </div>
            <Textarea
                className="border-2 border-slate-700 rounded-lg resize-none h-[100px]"
                placeholder="What are your thoughts about this film?"
            />
        </div>
    )
}