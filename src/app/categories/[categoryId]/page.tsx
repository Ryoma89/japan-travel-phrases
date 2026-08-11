import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/PageContainer";
import { ProblemCard } from "@/components/ProblemCard";
import { categories } from "@/data/categories";
import { problemsByCategory, type CategoryId } from "@/data/problems";

type CategoryProblemsPageProps = {
  params: Promise<{ categoryId: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ categoryId: category.id }));
}

export async function generateMetadata({
  params,
}: CategoryProblemsPageProps): Promise<Metadata> {
  const { categoryId } = await params;
  const category = categories.find((item) => item.id === categoryId);

  if (!category) {
    return {};
  }

  return {
    title: `${category.title} problems`,
    description: `Choose a ${category.title.toLowerCase()} problem to find useful Japanese phrases.`,
  };
}

export default async function CategoryProblemsPage({
  params,
}: CategoryProblemsPageProps) {
  const { categoryId } = await params;
  const category = categories.find((item) => item.id === categoryId);

  if (!category) {
    notFound();
  }

  const problems = problemsByCategory[category.id as CategoryId];

  return (
    <PageContainer>
      <nav className="flex items-center justify-between" aria-label="Breadcrumb">
        <Link
          href="/categories"
          className="group inline-flex min-h-12 items-center gap-2 rounded-lg px-1 text-base font-bold text-foreground hover:text-primary focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-focus"
        >
          <span aria-hidden="true">←</span>
          <span className="underline-offset-4 group-hover:underline group-focus-visible:underline">Back to scenes</span>
        </Link>
        <span
          className="grid size-10 place-items-center rounded-xl bg-primary text-base font-bold text-primary-foreground"
          aria-hidden="true"
        >
          J
        </span>
      </nav>

      <main className="py-10 sm:py-16">
        <header className="max-w-2xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-primary">
            {category.title}
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
