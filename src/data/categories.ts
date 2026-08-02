export type CategorySummary = {
  id: string;
  title: string;
  shortDescription: string;
  href: string;
};

export const categories = [
  {
    id: "train-station",
    title: "Train & Station",
    shortDescription: "Tickets, platforms, trains, and lost items.",
    href: "/categories/train-station",
  },
  {
    id: "airport",
    title: "Airport",
    shortDescription: "Flights, baggage, and check-in.",
    href: "/categories/airport",
  },
  {
    id: "restaurant",
    title: "Restaurant",
    shortDescription: "Ordering, allergies, and payment.",
    href: "/categories/restaurant",
  },
  {
    id: "hotel",
    title: "Hotel",
    shortDescription: "Check-in, rooms, and requests.",
    href: "/categories/hotel",
  },
  {
    id: "shopping",
    title: "Shopping",
    shortDescription: "Sizes, prices, and tax-free shopping.",
    href: "/categories/shopping",
  },
] as const satisfies readonly CategorySummary[];
