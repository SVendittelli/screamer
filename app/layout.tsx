import { baseUrl, description, title } from "@/app/ui/branding";
import { inter } from "@/app/ui/fonts";
import "@/app/ui/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Screamer",
    default: "Screamer",
  },
  description,
  metadataBase: new URL(baseUrl),
  openGraph: {
    title,
    type: "website",
    locale: "en_GB",
    url: baseUrl,
    description,
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-red-900`}>
        {children}
      </body>
    </html>
  );
}
