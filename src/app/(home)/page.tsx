import { Header } from "@/components/header";
import { Hero } from "./_components/hero";
import { ExamplesGrid } from "./_components/examples-grid";

export default function Page() {
  return (
    <div className="flex flex-col pb-32">
      <Header className="border-b border-transparent" />

      <main className="flex-1">
        <section className="relative w-full py-24">
          <Hero />
        </section>

        <section className="container">
          <ExamplesGrid />
        </section>
      </main>
    </div>
  );
}
