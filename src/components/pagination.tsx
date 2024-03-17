"use client"

import { useRouter } from "next/navigation"
import { Button } from "./ui/button"

interface PaginationProps {
    currentPage: number,
    totalResults: number,
    totalPages: number,
    limit: number
}

export function Pagination(
    { currentPage, totalResults, totalPages, limit }: PaginationProps
) {
    const router = useRouter()

    const paginationArray = generatePaginationArray(currentPage, totalPages)
    
    const isLastPage = currentPage === totalPages

    function handleChangePage(page: number) {
        router.push(`explore?page=${page}`)
    }

    return (
        <div className=" w-full flex justify-between gap-2 mt-12">
            <div>
                {`Page ${currentPage} of ${totalPages} pages.`}
            </div>
            <div className="flex gap-2">
                {
                    paginationArray.map((item) =>{
                        return (
                            <Button
                                key={item}
                                size="icon"
                                variant={item === currentPage ? "default" : "outline"}
                                className="rounded-lg"
                                onClick={() => handleChangePage(item)}
                            >
                            {item}
                        </Button>
                        )
                    })
                }
            </div>
        </div>
    )
}

function generatePaginationArray(currentPage: number, totalPages: number): number[] {

    let paginationArray = []
    let initialItem: number, finalItem:number
    

    initialItem = 1
    finalItem = 5

    if (totalPages > 5) {
        const isOneOfTheFirstTwoPages = currentPage < 3
        const isOneOfTheLaseTwoPages = (totalPages - currentPage) < 2

        if (isOneOfTheFirstTwoPages) {
            initialItem = 1
            finalItem = 5
        } else if (isOneOfTheLaseTwoPages) {
            initialItem = totalPages - 4
            finalItem = totalPages
        } else {
            initialItem = currentPage - 2
            finalItem = currentPage + 2
        }
    } else {
        initialItem = 1
        finalItem = totalPages
    }

    for (let i = initialItem;i <= finalItem;i++) {
        paginationArray.push(i)
    }


    return paginationArray
}