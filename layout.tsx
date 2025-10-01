import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Daniel Risk Intelligence',
  description:
    'Executive-grade intelligence for high-stakes business decisions in Central & Eastern Europe.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Add meta tags, favicons, or fonts here */}
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}
