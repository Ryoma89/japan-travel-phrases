import Link from "next/link";
import { PageContainer } from "@/components/PageContainer";

export default function Home() {
  return (
    <PageContainer>
      <header className="flex items-center gap-3" aria-label="Site header">
        <span
          className="grid size-9 place-items-center rounded-lg bg-primary text-base font-bold text-primary-foreground sm:size-11 sm:rounded-xl sm:text-lg"
          aria-hidden="true"
        >
          J
        </span>
        <span className="text-base font-bold tracking-tight text-foreground sm:text-lg">
          Japan Travel Phrases
        </span>
      </header>

      <main className="flex flex-1 flex-col justify-center py-8 sm:py-24">
        <section className="w-full">
          <h1 className="max-w-2xl text-balance text-3xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
            Need help in Japan?
            <br />
            Say it in Japanese.
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:mt-6 sm:text-xl sm:leading-9">
            Pick a problem. Get the phrase.
          </p>
        </section>

        <div className="pt-8 sm:pt-16">
          <Link
            href="/categories"
            className="inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-primary px-6 text-lg font-bold text-primary-foreground shadow-sm transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-focus sm:min-h-16 sm:rounded-2xl sm:text-xl"
          >
            Find a phrase
            <span className="ml-3" aria-hidden="true">
              →
            </span>
          </Link>
          <p className="mt-4 text-center text-xs text-subtle sm:mt-5 sm:text-sm">
            Emergency? Ask staff or call 119.
          </p>
        </div>
      </main>
    </PageContainer>
  );
}
