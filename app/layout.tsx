import { baseUrl, description, title } from "@/app/ui/branding";
import { inter } from "@/app/ui/fonts";
import "@/app/ui/globals.css";
import { SuperTokensProvider } from "@/components/SuperTokensProvider";
import { Analytics } from "@vercel/analytics/react";
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
      <SuperTokensProvider>
        <body
          className={`${inter.className} antialiased min-h-screen w-screen bg-gradient-to-b from-red-900 via-red-600 to-red-900`}
        >
          {children}
          <Analytics />
        </body>
      </SuperTokensProvider>
    </html>
  );
}
