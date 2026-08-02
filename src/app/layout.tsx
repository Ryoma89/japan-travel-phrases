import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Japan Travel Phrases",
    template: "%s | Japan Travel Phrases",
  },
  description:
    "Find practical Japanese phrases for common problems while traveling in Japan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
