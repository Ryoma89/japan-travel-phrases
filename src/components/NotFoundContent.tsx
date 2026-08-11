import Link from "next/link";
import { PageContainer } from "@/components/PageContainer";

type NotFoundContentProps = {
  title: string;
  description: string;
  linkHref: string;
  linkLabel: string;
};

export function NotFoundContent({
  title,
  description,
  linkHref,
  linkLabel,
}: NotFoundContentProps) {
  return (
    <PageContainer>
      <main className="flex flex-1 items-center justify-center py-8 sm:py-12">
        <div className="w-full max-w-xl rounded-3xl border border-border bg-surface px-6 py-10 text-center shadow-sm sm:px-10 sm:py-14">
          <span
            className="mx-auto grid size-12 place-items-center rounded-2xl bg-primary text-lg font-bold text-primary-foreground"
            aria-hidden="true"
          >
            J
          </span>
          <h1 className="mt-8 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {description}
          </p>
          <Link
            href={linkHref}
            className="mx-auto mt-8 flex min-h-12 w-full max-w-sm items-center justify-center rounded-xl bg-primary px-6 py-3 text-center text-base font-bold text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-focus"
          >
            {linkLabel}
          </Link>
        </div>
      </main>
    </PageContainer>
  );
}
