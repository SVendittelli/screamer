import { inter } from "@/app/ui/fonts";
import "@/app/ui/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Screamer",
    default: "Screamer",
  },
  description:
    "The original voting app for selecting movies to watch on Halloween.",
  metadataBase: new URL("https://halloween.vendittelli.co.uk/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
