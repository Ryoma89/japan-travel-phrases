"use client";

import { useState } from "react";
import { PhraseCard } from "@/components/PhraseCard";
import type { Phrase } from "@/data/train-problem-details";

const commonAllergens = [
  { id: "buckwheat", japanese: "そば", romaji: "soba", english: "buckwheat" },
  { id: "egg", japanese: "卵", romaji: "tamago", english: "eggs" },
  { id: "milk", japanese: "乳", romaji: "nyū", english: "milk" },
  { id: "peanuts", japanese: "落花生", romaji: "rakkasei", english: "peanuts" },
  { id: "wheat", japanese: "小麦", romaji: "komugi", english: "wheat" },
  { id: "shrimp", japanese: "えび", romaji: "ebi", english: "shrimp" },
  { id: "crab", japanese: "かに", romaji: "kani", english: "crab" },
] as const;

const customAllergenId = "other";

type AllergenPhraseListProps = {
  phrases: readonly Phrase[];
};

export function AllergenPhraseList({ phrases }: AllergenPhraseListProps) {
  const [selectedId, setSelectedId] = useState("");
  const [customAllergen, setCustomAllergen] = useState("");

  const selectedAllergen = commonAllergens.find((allergen) => allergen.id === selectedId);
  const trimmedCustomAllergen = customAllergen.trim();
  const replacement = selectedAllergen ?? (selectedId === customAllergenId && trimmedCustomAllergen
    ? {
        japanese: trimmedCustomAllergen,
        romaji: trimmedCustomAllergen,
        english: trimmedCustomAllergen,
      }
    : null);

  const personalizedPhrases = phrases.map((phrase) => ({
    ...phrase,
    japanese: replacement ? phrase.japanese.replaceAll("〇〇", replacement.japanese) : phrase.japanese,
    romaji: replacement ? phrase.romaji.replaceAll("〇〇", replacement.romaji) : phrase.romaji,
    english: replacement ? phrase.english.replaceAll("[allergen]", replacement.english) : phrase.english,
  }));

  return (
    <>
      <section className="mt-10 rounded-2xl border border-border bg-surface p-5 sm:mt-12 sm:p-6" aria-labelledby="allergen-heading">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Before using these phrases</p>
        <h2 id="allergen-heading" className="mt-3 text-2xl font-bold text-foreground">Choose your allergen</h2>
        <p className="mt-2 text-base leading-7 text-muted-foreground">
          Select one allergen, or enter another name staff can understand.
        </p>

        <label htmlFor="allergen-select" className="mt-5 block text-base font-bold text-foreground">
          Allergen
        </label>
        <select
          id="allergen-select"
          value={selectedId}
          onChange={(event) => setSelectedId(event.target.value)}
          className="mt-2 min-h-12 w-full rounded-xl border-2 border-border bg-surface px-4 py-3 text-base text-foreground focus-visible:border-primary focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-focus"
        >
          <option value="">Select an allergen</option>
          {commonAllergens.map((allergen) => (
            <option key={allergen.id} value={allergen.id}>
              {allergen.english} — {allergen.japanese}
            </option>
          ))}
          <option value={customAllergenId}>Other allergen</option>
        </select>

        {selectedId === customAllergenId && (
          <div className="mt-4">
            <label htmlFor="custom-allergen" className="block text-base font-bold text-foreground">
              Other allergen
            </label>
            <input
              id="custom-allergen"
              type="text"
              value={customAllergen}
              onChange={(event) => setCustomAllergen(event.target.value)}
              placeholder="e.g. sesame"
              maxLength={40}
              autoComplete="off"
              className="mt-2 min-h-12 w-full rounded-xl border-2 border-border bg-surface px-4 py-3 text-base text-foreground placeholder:text-subtle focus-visible:border-primary focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-focus"
            />
          </div>
        )}

        <p className="mt-5 rounded-xl bg-accent-soft px-4 py-3 text-sm font-semibold leading-6 text-warning-foreground">
          Always ask staff to check the ingredients. This service cannot guarantee that a dish is safe.
        </p>
      </section>

      <ol className="mt-6 grid list-none gap-4 p-0">
        {personalizedPhrases.map((phrase, index) => (
          <li key={phrase.id}>
            <PhraseCard phrase={phrase} number={index + 1} staffDisplayDisabled={!replacement} />
          </li>
        ))}
      </ol>
    </>
  );
}
