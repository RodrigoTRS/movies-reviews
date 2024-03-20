import { LineChart } from "lucide-react"
import { fetchLatestReviews } from "../lib/actions/fetch-lastest-reviews";
import { ReviewCard } from "@/components/home/review-card";

export default async function Home() {
  const reviews = await fetchLatestReviews()

  return (
    <div className="flex flex-col py-12 gap-12">

        <header className="flex gap-4 items-center">
          <LineChart className="text-primary" size={32} />
          <h1 className="text-2xl">Início</h1>
        </header>

        <main className="flex flex-col gap-6">
          <h2 className="text-muted-foreground">Avaliações mais recentes</h2>
          <div className="grid grid-cols-2 gap-2">
            {reviews.map((review, index) => {
                return <ReviewCard review={review} key={index} />
            })}
          </div>
        </main>

    </div>
  );
}
