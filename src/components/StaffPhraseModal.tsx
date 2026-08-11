"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type StaffPhraseModalProps = {
  phraseId: string;
  japanese: string;
  english: string;
  disabled?: boolean;
};

export function StaffPhraseModal({ phraseId, japanese, english, disabled = false }: StaffPhraseModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const titleId = `${phraseId}-staff-title`;
  const descriptionId = `${phraseId}-staff-description`;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
      }

      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(true)}
        className="inline-flex min-h-12 flex-1 items-center justify-center rounded-xl bg-primary px-4 py-3 text-center text-base font-bold text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:cursor-not-allowed disabled:bg-border disabled:text-muted-foreground"
      >
        {disabled ? "Select an allergen first" : "Show to staff"}
      </button>

      {isOpen && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/70 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            className="flex h-full max-h-[48rem] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-border bg-surface px-6 py-6 text-foreground shadow-2xl sm:px-10 sm:py-8"
          >
            <div className="flex justify-end">
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-border bg-surface px-5 py-3 text-base font-bold text-foreground hover:border-primary focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-focus"
              >
                Close
              </button>
            </div>

            <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center overflow-y-auto py-8 text-center">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-primary">
                Please show this to staff
              </p>
              <h2
                id={titleId}
                lang="ja"
                className="text-balance text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-7xl"
              >
                {japanese}
              </h2>
              <p id={descriptionId} className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                {english}
              </p>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
