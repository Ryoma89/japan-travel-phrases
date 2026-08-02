import Link from "next/link";
import type { ProblemSummary } from "@/data/problems";

type ProblemCardProps = {
  problem: ProblemSummary;
  number: number;
};

export function ProblemCard({ problem, number }: ProblemCardProps) {
  const content = (
    <>
      <span
        className="grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-background text-sm font-bold text-primary"
        aria-hidden="true"
      >
        {String(number).padStart(2, "0")}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-lg font-semibold leading-6 text-foreground sm:text-xl">
          {problem.title}
        </span>
        <span className="mt-2 block text-base leading-6 text-muted-foreground">
          {problem.shortDescription}
        </span>
      </span>
    </>
  );

  if (problem.status === "phrases-coming-soon") {
    return (
      <div className="flex min-h-28 w-full items-center gap-4 rounded-2xl border border-border bg-surface/60 p-5 text-left sm:gap-5 sm:p-6">
        {content}
        <span className="shrink-0 rounded-full bg-category-soft px-2.5 py-1 text-xs font-bold text-primary">
          Phrases soon
        </span>
      </div>
    );
  }

  return (
    <Link
      href={`/problems/${problem.slug}`}
      className="group flex min-h-28 w-full items-center gap-4 rounded-2xl border border-border bg-surface p-5 text-left transition-colors hover:border-primary hover:bg-category-soft focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-focus sm:gap-5 sm:p-6"
    >
      {content}
      <span
        className="shrink-0 text-xl font-semibold text-primary transition-transform group-hover:translate-x-0.5"
        aria-hidden="true"
      >
        →
      </span>
    </Link>
  );
}
