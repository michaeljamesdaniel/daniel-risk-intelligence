import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Daniel Risk Intelligence | Transaction Advisory for CEE",
  description: "Intelligence-grade transaction advisory for Central & Eastern Europe. Due diligence, market entry strategy, and post-merger integration using structured intelligence methods.",
  keywords: ["CEE due diligence", "Central Europe M&A", "Poland market entry", "transaction advisory", "risk intelligence"],
  authors: [{ name: "Daniel Risk Intelligence" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Daniel Risk Intelligence | Transaction Advisory for CEE",
    description: "Intelligence-grade transaction advisory for Central & Eastern Europe",
    url: "https://www.danielriskintelligence.com",
    siteName: "Daniel Risk Intelligence",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Risk Intelligence",
    description: "Intelligence-grade transaction advisory for Central & Eastern Europe",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
