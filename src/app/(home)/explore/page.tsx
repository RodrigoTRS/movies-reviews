import { fetchGenres } from "@/app/lib/actions/fetch-genre";
import { fetchTitles } from "@/app/lib/actions/fetch-titles";
import { Genre } from "@/app/lib/entities/Genre";
import { ShortTitle } from "@/app/lib/entities/ShortTitle";
import { fakeGenres } from "@/app/lib/mocked-data/fake-genres";
import { fakeShortTitles } from "@/app/lib/mocked-data/fake-short-titles";
import { GenresSelector } from "@/components/explore/genres-selector";
import { Search } from "@/components/explore/search";
import { TitlesGrid } from "@/components/explore/title-grid";
import { Pagination } from "@/components/pagination";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";

interface ExplorePageParams {
    searchParams?: {
        genre?: string;
        query?: string;
        page?: string;
    };
  }
  

export default async function Explore({ searchParams }: ExplorePageParams) {

    const query = searchParams?.query || "";
    const filteredGenre = Number(searchParams?.genre);
    const currentPage = Number(searchParams?.page) || 1;

    // const genres = await fetchGenres()
    const genres = fakeGenres

    // const { titles, total_pages } = await fetchTitles({page: currentPage, genres: filteredGenre})
    const { titles, total_pages } = fakeShortTitles

    return (
        <div className="w-full flex flex-col py-12 gap-8">
    
            <header className="w-full flex item-center justify-between">

                <div className="flex gap-4 items-center">
                    <SearchIcon className="text-primary" size={32} />
                    <h1 className="text-2xl">Explore</h1>
                </div>

                <Search />
            </header>

            <main className="flex flex-col gap-12">

                <section className="flex flex-col gap-2">
                    <h2 className="text-muted-foreground">Genres</h2>
                    <GenresSelector genres={genres} filteredGenre={filteredGenre} />
                </section>

                <section className="flex flex-col gap-2">
                    <h2 className="text-muted-foreground">Titles</h2>
                    <TitlesGrid
                        titles={titles}
                    />
                    <Pagination
                        currentPage={currentPage}
                        totalPages={total_pages}
                    />
                </section>
            </main>
        </div>
    )
}