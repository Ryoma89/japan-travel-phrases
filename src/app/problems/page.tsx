import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/PageContainer";
import { ProblemCard } from "@/components/ProblemCard";
import { problems } from "@/data/problems";

export const metadata: Metadata = {
  title: "Choose your problem",
  description: "Choose a train or station problem to find useful Japanese phrases.",
};

export default function ProblemsPage() {
  return (
    <PageContainer>
      <nav className="flex items-center justify-between" aria-label="Breadcrumb">
        <Link
          href="/"
          className="inline-flex min-h-12 items-center gap-2 rounded-lg px-1 text-base font-bold text-foreground underline-offset-4 hover:text-primary hover:underline focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-focus"
        >
          <span aria-hidden="true">←</span>
          Back to home
        </Link>
        <span className="grid size-10 place-items-center rounded-xl bg-primary text-base font-bold text-primary-foreground" aria-hidden="true">
          J
        </span>
      </nav>

      <main className="py-10 sm:py-16">
        <header className="max-w-2xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-primary">
            Train &amp; Station
          </p>
          <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
            What’s gone wrong?
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Pick the closest match.
          </p>
        </header>

        <ol className="mt-10 grid list-none gap-3 p-0 sm:mt-12">
          {problems.map((problem, index) => (
            <li key={problem.slug}>
              <ProblemCard problem={problem} number={index + 1} />
            </li>
          ))}
        </ol>
      </main>
    </PageContainer>
  );
}
