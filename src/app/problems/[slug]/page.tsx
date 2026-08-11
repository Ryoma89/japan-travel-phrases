import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/PageContainer";
import { PhraseCard } from "@/components/PhraseCard";
import { trainProblemDetails } from "@/data/train-problem-details";

type ProblemDetailPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return trainProblemDetails.map((problem) => ({ slug: problem.slug }));
}

export async function generateMetadata({ params }: ProblemDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const problem = trainProblemDetails.find((item) => item.slug === slug);
  return problem ? { title: problem.title, description: problem.situation } : {};
}

export default async function ProblemDetailPage({ params }: ProblemDetailPageProps) {
  const { slug } = await params;
  const problem = trainProblemDetails.find((item) => item.slug === slug);

  if (!problem) notFound();

  return (
    <PageContainer>
      <nav className="flex items-center justify-between" aria-label="Breadcrumb">
        <Link href="/categories/train-station" className="group inline-flex min-h-12 items-center gap-2 rounded-lg px-1 text-base font-bold text-foreground hover:text-primary focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-focus">
          <span aria-hidden="true">←</span>
          <span className="underline-offset-4 group-hover:underline group-focus-visible:underline">Back to problems</span>
        </Link>
        <span className="grid size-10 place-items-center rounded-xl bg-primary text-base font-bold text-primary-foreground" aria-hidden="true">J</span>
      </nav>

      <main className="py-10 sm:py-16">
        <header className="max-w-2xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-primary">Train &amp; Station</p>
          <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl">{problem.title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{problem.situation}</p>
        </header>

        <ol className="mt-10 grid list-none gap-4 p-0 sm:mt-12">
          {problem.phrases.map((phrase, index) => (
            <li key={phrase.id}><PhraseCard phrase={phrase} number={index + 1} /></li>
          ))}
        </ol>
      </main>
    </PageContainer>
  );
}
