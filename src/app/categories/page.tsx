import type { Metadata } from "next";
import Link from "next/link";
import { CategoryCard } from "@/components/CategoryCard";
import { PageContainer } from "@/components/PageContainer";
import { ProblemSearch, type SearchableProblem } from "@/components/ProblemSearch";
import { categories } from "@/data/categories";
import { problemDetails } from "@/data/problem-details";

export const metadata: Metadata = {
  title: "Choose a scene",
  description: "Choose where you need help to find a useful Japanese phrase.",
};

export default function CategoriesPage() {
  const searchableProblems = problemDetails.map((problem) => ({
    slug: problem.slug,
    title: problem.title,
    shortDescription: problem.shortDescription,
    situation: problem.situation,
    categoryTitle: problem.categoryTitle,
    englishPhrases: problem.phrases.map((phrase) => phrase.english),
  })) satisfies readonly SearchableProblem[];

  return (
    <PageContainer>
      <nav className="flex items-center justify-between" aria-label="Breadcrumb">
        <Link
          href="/"
          className="group inline-flex min-h-12 items-center gap-2 rounded-lg px-1 text-base font-bold text-foreground hover:text-primary focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-focus"
        >
          <span aria-hidden="true">←</span>
          <span className="underline-offset-4 group-hover:underline group-focus-visible:underline">Back to home</span>
        </Link>
        <span
          className="grid size-10 place-items-center rounded-xl bg-primary text-base font-bold text-primary-foreground"
          aria-hidden="true"
        >
          J
        </span>
      </nav>

      <main className="py-9 sm:py-14">
        <header className="max-w-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-primary">
            Choose a scene
          </p>
          <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
            Where do you need help?
          </h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            Pick the place closest to your situation.
          </p>
        </header>

        <div>
          <ProblemSearch problems={searchableProblems} />

          <h2 className="mt-8 text-xl font-bold text-foreground">Browse by scene</h2>
          <ol className="mt-4 grid list-none gap-3 p-0 sm:gap-4">
            {categories.map((category, index) => (
              <li key={category.id}>
                <CategoryCard category={category} number={index + 1} />
              </li>
            ))}
          </ol>
        </div>
      </main>
    </PageContainer>
  );
}
