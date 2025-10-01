import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Daniel Risk Intelligence, LLC | Strategic Intelligence for Executives",
  description: "Strategic intelligence for executives who need to make decisions with confidence in complex markets. Concise, rigorous reports connecting regional risks to business outcomes.",
  keywords: ["risk intelligence", "strategic intelligence", "executive decision making", "Central and Eastern Europe", "Balkans", "Baltic States", "business risk", "market analysis"],
  authors: [{ name: "Daniel Risk Intelligence, LLC" }],
  openGraph: {
    title: "Daniel Risk Intelligence, LLC",
    description: "Strategic intelligence for executives who need to make decisions with confidence in complex markets.",
    url: "https://danielriskintelligence.com",
    siteName: "Daniel Risk Intelligence",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Risk Intelligence, LLC",
    description: "Strategic intelligence for executives who need to make decisions with confidence in complex markets.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased bg-background text-foreground"
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
