import type { categories } from "@/data/categories";

export type CategoryId = (typeof categories)[number]["id"];

export type ProblemSummary = {
  slug: string;
  title: string;
  shortDescription: string;
  status: "available";
};

export const problemsByCategory = {
  "train-station": [
    {
      slug: "cannot-exit-gate",
      title: "I can’t exit the ticket gate",
      shortDescription: "The ticket gate won’t let me through.",
      status: "available",
    },
    {
      slug: "wrong-train",
      title: "I got on the wrong train",
      shortDescription: "Help me find the right route.",
      status: "available",
    },
    {
      slug: "cannot-find-platform",
      title: "I can’t find the right platform",
      shortDescription: "Which platform should I use?",
      status: "available",
    },
    {
      slug: "insufficient-ic-balance",
      title: "My IC card balance is too low",
      shortDescription: "I need to add money or pay the fare.",
      status: "available",
    },
    {
      slug: "lost-item-on-train",
      title: "I left something on the train",
      shortDescription: "Help me report a lost item.",
      status: "available",
    },
  ],
  airport: [
    {
      slug: "cannot-find-check-in-counter",
      title: "I can’t find the check-in counter",
      shortDescription: "Where should I check in for my flight?",
      status: "available",
    },
    {
      slug: "flight-delayed-or-canceled",
      title: "My flight is delayed or canceled",
      shortDescription: "I need to know what to do next.",
      status: "available",
    },
    {
      slug: "missing-baggage",
      title: "My baggage is missing",
      shortDescription: "My bag did not arrive at baggage claim.",
      status: "available",
    },
    {
      slug: "security-check-problem",
      title: "I have a problem at security",
      shortDescription: "I need help understanding the security check.",
      status: "available",
    },
    {
      slug: "cannot-find-boarding-gate",
      title: "I can’t find my boarding gate",
      shortDescription: "Where should I go to board my flight?",
      status: "available",
    },
  ],
  restaurant: [
    {
      slug: "need-help-ordering",
      title: "I need help ordering",
      shortDescription: "I want to understand the menu and order.",
      status: "available",
    },
    {
      slug: "food-allergy",
      title: "I have a food allergy",
      shortDescription: "I need to check what is in the food.",
      status: "available",
    },
    {
      slug: "wrong-order",
      title: "My order is wrong",
      shortDescription: "This is not what I ordered.",
      status: "available",
    },
    {
      slug: "need-vegetarian-option",
      title: "I need a vegetarian option",
      shortDescription: "I want a meal without meat or fish.",
      status: "available",
    },
    {
      slug: "pay-the-bill",
      title: "I want to pay the bill",
      shortDescription: "I need the check and payment options.",
      status: "available",
    },
  ],
  hotel: [
    {
      slug: "cannot-check-in",
      title: "I can’t check in",
      shortDescription: "There is a problem with my reservation.",
      status: "available",
    },
    {
      slug: "room-problem",
      title: "There’s a problem with my room",
      shortDescription: "Something in the room is not working.",
      status: "available",
    },
    {
      slug: "store-luggage",
      title: "I need to store my luggage",
      shortDescription: "Can the hotel keep my bags for a while?",
      status: "available",
    },
    {
      slug: "locked-out-of-room",
      title: "I’m locked out of my room",
      shortDescription: "My room key is not working.",
      status: "available",
    },
    {
      slug: "checkout-help",
      title: "I need help with checkout",
      shortDescription: "I have a question about leaving or paying.",
      status: "available",
    },
  ],
  shopping: [
    {
      slug: "cannot-find-item",
      title: "I can’t find an item",
      shortDescription: "I need help finding a product in the store.",
      status: "available",
    },
    {
      slug: "different-size-or-color",
      title: "I need a different size or color",
      shortDescription: "Do you have another option available?",
      status: "available",
    },
    {
      slug: "check-price",
      title: "I want to know the price",
      shortDescription: "I can’t find or understand the price.",
      status: "available",
    },
    {
      slug: "tax-free-purchase",
      title: "I want to make a tax-free purchase",
      shortDescription: "I need help with the tax-free process.",
      status: "available",
    },
    {
      slug: "return-or-exchange-item",
      title: "I need to return or exchange something",
      shortDescription: "There is a problem with something I bought.",
      status: "available",
    },
  ],
} as const satisfies Record<CategoryId, readonly ProblemSummary[]>;

export const problems = problemsByCategory["train-station"];
