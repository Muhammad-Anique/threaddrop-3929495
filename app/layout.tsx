import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ThreadDrop | Streetwear Drops',
  description: 'Premium streetwear drops. Join the waitlist for exclusive access.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}