import Link from "next/link";
import type { CategorySummary } from "@/data/categories";

type CategoryCardProps = {
  category: CategorySummary;
  number: number;
};

export function CategoryCard({ category, number }: CategoryCardProps) {
  return (
    <Link
      href={category.href}
      className="group flex min-h-28 w-full items-center gap-4 rounded-2xl border border-border bg-surface p-5 text-left transition-colors hover:border-primary hover:bg-category-soft focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-focus sm:p-6"
    >
      <span className="min-w-0 flex-1">
        <span className="block text-xs font-bold uppercase tracking-[0.14em] text-primary">
          Scene {String(number).padStart(2, "0")}
        </span>
        <span className="block text-xl font-bold leading-7 text-foreground">
          {category.title}
        </span>
        <span className="mt-1 block text-sm leading-5 text-muted-foreground">
          {category.shortDescription}
        </span>
      </span>
      <span
        className="shrink-0 text-xl font-bold text-primary transition-transform group-hover:translate-x-0.5"
        aria-hidden="true"
      >
        →
      </span>
    </Link>
  );
}
