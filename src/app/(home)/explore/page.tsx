import { fetchGenres } from "@/app/lib/actions/fetch-genre";
import { fetchTitles } from "@/app/lib/actions/fetch-titles";
import { Genre } from "@/app/lib/entities/Genre";
import { ShortTitle } from "@/app/lib/entities/ShortTitle";
import { fakeGenres } from "@/app/lib/mocked-data/fake-genres";
import { fakeShortTitles } from "@/app/lib/mocked-data/fake-short-titles";
import { GenresSelector } from "@/components/genres-selector";
import { Pagination } from "@/components/pagination";
import { TitlesGrid } from "@/components/title-grid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface ExplorePageParams {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }
  

export default async function Explore({ searchParams }: ExplorePageParams) {

    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    // const genres = await fetchGenres()
    const genres = fakeGenres

    // const { titles, Ttotal_pages } = await fetchTitles({page: currentPage})
    const { titles, total_pages } = fakeShortTitles

    return (
        <div className="w-full flex flex-col py-12 gap-8">
    
            <header className="w-full flex item-center justify-between">

                <div className="flex gap-4 items-center">
                    <Search className="text-primary" size={32} />
                    <h1 className="text-2xl">Explore</h1>
                </div>

                <div className="flex gap-2 items-center">
                    <Input placeholder="Search for a movie..." className="rounded-lg" />
                    <Button size="default" variant="secondary" className="rounded-lg">
                        Search
                    </Button>
                </div>
            </header>

            <main className="flex flex-col gap-12">

                <section className="flex flex-col gap-2">
                    <h2 className="text-muted-foreground">Genres</h2>
                    <GenresSelector genres={genres} />
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