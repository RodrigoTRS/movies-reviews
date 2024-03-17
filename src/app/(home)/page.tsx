import { LineChart } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col py-12 gap-12">

        <header className="flex gap-4 items-center">
          <LineChart className="text-primary" size={32} />
          <h1 className="text-2xl">Início</h1>
        </header>

        <main className="flex flex-col gap-6">
          <h2 className="text-muted-foreground">Avaliações mais recentes</h2>
        </main>

    </div>
  );
}
