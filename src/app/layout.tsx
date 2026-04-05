import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { SiteNav } from "@/components/SiteNav";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sitka Style — Brand System",
  description:
    "Brand style system for Sitka Gold Corp (TSX-V: SIG). A comprehensive 29-artboard visual identity covering foundation tokens, presentation slides, data templates, collateral, icons, and map callouts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <SiteNav />
        <main className="flex-1 pt-16">{children}</main>
      </body>
    </html>
  );
}
