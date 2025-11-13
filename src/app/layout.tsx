import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Intelligence-Grade Analysis for Central & Eastern Europe",
  description: "Two advisory reports—Geopolitical Intelligence and Due Diligence—combine intelligence-community rigor with clear business language for CEE executives.",
  keywords: ["CEE due diligence", "Central Europe transactions", "Poland market entry", "transaction advisory", "risk intelligence"],
  authors: [{ name: "Daniel Risk Intelligence" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Intelligence-Grade Analysis for Central & Eastern Europe",
  description: "Two advisory reports—Geopolitical Intelligence and Due Diligence—combine intelligence-community rigor with clear business language for CEE executives.",
    url: "https://www.danielriskintelligence.com",
    siteName: "Daniel Risk Intelligence",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intelligence-Grade Analysis for Central & Eastern Europe",
  description: "Two advisory reports—Geopolitical Intelligence and Due Diligence—combine intelligence-community rigor with clear business language for CEE executives.",
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
