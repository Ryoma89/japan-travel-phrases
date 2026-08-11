"use client";

import Link from "next/link";
import { useState } from "react";

export type SearchableProblem = {
  slug: string;
  title: string;
  shortDescription: string;
  situation: string;
  categoryTitle: string;
  englishPhrases: readonly string[];
};

type ProblemSearchProps = {
  problems: readonly SearchableProblem[];
};

export function ProblemSearch({ problems }: ProblemSearchProps) {
  const [query, setQuery] = useState("");
  const terms = query.trim().toLocaleLowerCase("en").split(/\s+/).filter(Boolean);

  const results = terms.length === 0
    ? []
    : problems.filter((problem) => {
        const searchableText = [
          problem.title,
          problem.shortDescription,
          problem.situation,
          problem.categoryTitle,
          ...problem.englishPhrases,
        ].join(" ").toLocaleLowerCase("en");

        return terms.every((term) => searchableText.includes(term));
      });

  return (
    <section className="mt-8" aria-label="Search all problems">
      <div className="flex gap-2">
        <label htmlFor="problem-search" className="sr-only">Search all problems</label>
        <input
          id="problem-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="e.g. lost baggage or allergy"
          autoComplete="off"
          className="min-h-12 min-w-0 flex-1 rounded-xl border-2 border-border bg-surface px-4 py-3 text-base text-foreground placeholder:text-subtle focus-visible:border-primary focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-focus"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl border-2 border-border bg-surface px-4 py-3 text-base font-bold text-foreground hover:border-primary focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-focus"
          >
            Clear
          </button>
        )}
      </div>

      <div
        aria-live="polite"
        aria-atomic="true"
        className={terms.length > 0 ? "mt-3 text-sm font-semibold text-muted-foreground" : "sr-only"}
      >
        {terms.length > 0 && `${results.length} ${results.length === 1 ? "result" : "results"}`}
      </div>

      {terms.length > 0 && (
        <div className="mt-3">
          {results.length > 0 ? (
            <ol className="grid list-none gap-3 p-0">
              {results.map((problem) => (
                <li key={problem.slug}>
                  <Link
                    href={`/problems/${problem.slug}`}
                    className="group flex min-h-28 w-full items-center gap-4 rounded-2xl border border-border bg-surface p-5 text-left transition-colors hover:border-primary hover:bg-category-soft focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-focus"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-bold uppercase tracking-[0.14em] text-primary">
                        {problem.categoryTitle}
                      </span>
                      <span className="mt-2 block text-lg font-semibold leading-6 text-foreground">
                        {problem.title}
                      </span>
                      <span className="mt-2 block text-base leading-6 text-muted-foreground">
                        {problem.shortDescription}
                      </span>
                    </span>
                    <span className="shrink-0 text-xl font-semibold text-primary transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          ) : (
            <p className="rounded-2xl border border-border bg-surface p-5 text-base leading-7 text-muted-foreground">
              No matching problems. Try another word or choose a scene below.
            </p>
          )}
        </div>
      )}
    </section>
  );
}
