"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export function TitleHeader() {
    const router = useRouter()

    return (
        <header>
            <Button variant="ghost" className="gap-2 pl-2" onClick={() => router.push("/explore")}>
                <ChevronLeft size={20} />
                <span>Back</span>
            </Button>
        </header>
    )
}