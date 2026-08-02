export type ProblemSummary = {
  slug: string;
  title: string;
  shortDescription: string;
};

export const problems = [
  {
    slug: "cannot-exit-gate",
    title: "I can’t exit the ticket gate",
    shortDescription: "The ticket gate won’t let me through.",
  },
  {
    slug: "wrong-train",
    title: "I got on the wrong train",
    shortDescription: "Help me find the right route.",
  },
  {
    slug: "cannot-find-platform",
    title: "I can’t find the right platform",
    shortDescription: "Which platform should I use?",
  },
  {
    slug: "insufficient-ic-balance",
    title: "My IC card balance is too low",
    shortDescription: "I need to add money or pay the fare.",
  },
  {
    slug: "lost-item-on-train",
    title: "I left something on the train",
    shortDescription: "Help me report a lost item.",
  },
] as const satisfies readonly ProblemSummary[];
