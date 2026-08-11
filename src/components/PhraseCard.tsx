import type { Phrase } from "@/data/train-problem-details";
import { StaffPhraseModal } from "@/components/StaffPhraseModal";

type PhraseCardProps = { phrase: Phrase; number: number };

export function PhraseCard({ phrase, number }: PhraseCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
        Phrase {String(number).padStart(2, "0")}
      </p>
      <p lang="ja" className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
        {phrase.japanese}
      </p>
      <p className="mt-4 text-base font-semibold leading-7 text-primary sm:text-lg">
        {phrase.romaji}
      </p>
      <p className="mt-2 text-base leading-7 text-muted-foreground">
        {phrase.english}
      </p>
      <div className="mt-5 flex border-t border-border pt-5">
        <StaffPhraseModal
          phraseId={phrase.id}
          japanese={phrase.japanese}
          english={phrase.english}
        />
      </div>
    </article>
  );
}
